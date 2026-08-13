// Chess clock engine + DOM wiring. Runs entirely client-side, no framework needed.

type IncrementType = "none" | "fischer" | "bronstein" | "delay";
type Category = "bullet" | "blitz" | "rapid" | "classical" | "custom";
type Side = "a" | "b";

interface StageBonus {
  afterMoves: number;
  bonusMs: number;
}

interface TimeControlConfig {
  id: string;
  label: string;
  shortLabel: string;
  category: Category;
  baseMs: number;
  incrementMs: number;
  incrementType: IncrementType;
  stage?: StageBonus;
}

interface SideState {
  remainingMs: number;
  delayRemainingMs: number;
  moves: number;
  stageApplied: boolean;
  warned30: boolean;
  warned10: boolean;
}

interface ClockSnapshot {
  a: SideState;
  b: SideState;
  active: Side | null;
}

interface ClockI18n {
  start: string;
  pause: string;
  resume: string;
  soundOn: string;
  soundOff: string;
  player1: string;
  player2: string;
  minSuffix: string;
  moveSingular: string;
  movePlural: string;
  categories: Record<Category, string>;
  announce: {
    moved: string;
    timeout: string;
    presetSet: string;
    customApplied: string;
    undone: string;
    swapped: string;
    reset: string;
  };
  resetConfirm: string;
}

const DEFAULT_I18N: ClockI18n = {
  start: "Start",
  pause: "Pause",
  resume: "Resume",
  soundOn: "🔊 Sound on",
  soundOff: "🔇 Sound off",
  player1: "White",
  player2: "Black",
  minSuffix: "min",
  moveSingular: "move",
  movePlural: "moves",
  categories: { bullet: "Bullet", blitz: "Blitz", rapid: "Rapid", classical: "Classical", custom: "Custom" },
  announce: {
    moved: "{name} moved. Clock switched.",
    timeout: "Time out. {loser} ran out of time. {winner} wins on time.",
    presetSet: "Time control set to {label}.",
    customApplied: "Custom time control applied.",
    undone: "Last move undone.",
    swapped: "Sides swapped.",
    reset: "Clock reset.",
  },
  resetConfirm: "Reset the clock? This will clear the current game.",
};

function loadClockI18n(root: HTMLElement): ClockI18n {
  const el = root.querySelector('[data-clock-i18n]');
  if (!el?.textContent) return DEFAULT_I18N;
  try {
    return { ...DEFAULT_I18N, ...JSON.parse(el.textContent) };
  } catch {
    return DEFAULT_I18N;
  }
}

function format(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}

const MINUTE = 60_000;
const SECOND = 1000;
const LOW_TIME_MS = 30 * SECOND;
const CRITICAL_TIME_MS = 10 * SECOND;
const TENTHS_THRESHOLD_MS = 20 * SECOND;

interface PresetDefinition {
  id: string;
  category: Category;
  minutes: number;
  incrementSeconds: number;
  incrementType: IncrementType;
  stage?: StageBonus;
  isFide?: boolean;
}

const PRESET_DEFINITIONS: PresetDefinition[] = [
  { id: "bullet-1+0", category: "bullet", minutes: 1, incrementSeconds: 0, incrementType: "none" },
  { id: "bullet-1+1", category: "bullet", minutes: 1, incrementSeconds: 1, incrementType: "fischer" },
  { id: "bullet-2+1", category: "bullet", minutes: 2, incrementSeconds: 1, incrementType: "fischer" },
  { id: "blitz-3+0", category: "blitz", minutes: 3, incrementSeconds: 0, incrementType: "none" },
  { id: "blitz-3+2", category: "blitz", minutes: 3, incrementSeconds: 2, incrementType: "fischer" },
  { id: "blitz-5+0", category: "blitz", minutes: 5, incrementSeconds: 0, incrementType: "none" },
  { id: "blitz-5+3", category: "blitz", minutes: 5, incrementSeconds: 3, incrementType: "fischer" },
  { id: "rapid-10+0", category: "rapid", minutes: 10, incrementSeconds: 0, incrementType: "none" },
  { id: "rapid-15+10", category: "rapid", minutes: 15, incrementSeconds: 10, incrementType: "fischer" },
  { id: "rapid-25+10", category: "rapid", minutes: 25, incrementSeconds: 10, incrementType: "fischer" },
  { id: "classical-30+0", category: "classical", minutes: 30, incrementSeconds: 0, incrementType: "none" },
  { id: "classical-30+20", category: "classical", minutes: 30, incrementSeconds: 20, incrementType: "fischer" },
  {
    id: "classical-fide",
    category: "classical",
    minutes: 90,
    incrementSeconds: 30,
    incrementType: "fischer",
    stage: { afterMoves: 40, bonusMs: 30 * MINUTE },
    isFide: true,
  },
];

function buildPresets(i18n: ClockI18n): TimeControlConfig[] {
  return PRESET_DEFINITIONS.map((def) => {
    const shortLabel =
      def.incrementSeconds === 0 && !def.stage ? `${def.minutes} ${i18n.minSuffix}` : `${def.minutes} | ${def.incrementSeconds}`;
    const label = `${i18n.categories[def.category]} — ${shortLabel}${def.isFide ? " (FIDE)" : ""}`;
    return {
      id: def.id,
      label,
      shortLabel,
      category: def.category,
      baseMs: def.minutes * MINUTE,
      incrementMs: def.incrementSeconds * SECOND,
      incrementType: def.incrementType,
      stage: def.stage,
    };
  });
}

function createSideState(config: TimeControlConfig): SideState {
  return {
    remainingMs: config.baseMs,
    delayRemainingMs: config.incrementType === "bronstein" || config.incrementType === "delay" ? config.incrementMs : 0,
    moves: 0,
    stageApplied: false,
    warned30: false,
    warned10: false,
  };
}

function cloneSideState(state: SideState): SideState {
  return { ...state };
}

function pad2(value: number): string {
  return value.toString().padStart(2, "0");
}

function formatTime(ms: number, showTenths: boolean): string {
  const clamped = Math.max(0, ms);
  const hours = Math.floor(clamped / (60 * MINUTE));
  const minutes = Math.floor((clamped % (60 * MINUTE)) / MINUTE);
  const seconds = Math.floor((clamped % MINUTE) / SECOND);
  const tenths = Math.floor((clamped % SECOND) / 100);

  if (hours > 0) {
    return `${hours}:${pad2(minutes)}:${pad2(seconds)}`;
  }
  if (showTenths && clamped < TENTHS_THRESHOLD_MS) {
    return `${minutes}:${pad2(seconds)}.${tenths}`;
  }
  return `${minutes}:${pad2(seconds)}`;
}

class ChessClockEngine {
  config: TimeControlConfig;
  a: SideState;
  b: SideState;
  active: Side | null = null;
  isRunning = false;
  hasStarted = false;
  private lastTick = 0;
  private rafId = 0;
  private history: ClockSnapshot | null = null;
  private frame = () => this.tick();

  onUpdate: (() => void) | null = null;
  onTurnEnd: ((mover: Side) => void) | null = null;
  onTimeout: ((loser: Side) => void) | null = null;
  onLowTime: ((side: Side, level: "low" | "critical") => void) | null = null;

  constructor(config: TimeControlConfig) {
    this.config = config;
    this.a = createSideState(config);
    this.b = createSideState(config);
    this.active = "a";
  }

  private snapshot(): ClockSnapshot {
    return { a: cloneSideState(this.a), b: cloneSideState(this.b), active: this.active };
  }

  reset(config: TimeControlConfig, startingSide: Side = "a"): void {
    cancelAnimationFrame(this.rafId);
    this.config = config;
    this.a = createSideState(config);
    this.b = createSideState(config);
    this.active = startingSide;
    this.isRunning = false;
    this.hasStarted = false;
    this.history = null;
    this.onUpdate?.();
  }

  start(): void {
    if (this.hasStarted || !this.active) return;
    this.hasStarted = true;
    this.isRunning = true;
    this.lastTick = performance.now();
    this.rafId = requestAnimationFrame(this.frame);
    this.onUpdate?.();
  }

  pause(): void {
    if (!this.isRunning) return;
    this.isRunning = false;
    cancelAnimationFrame(this.rafId);
    this.onUpdate?.();
  }

  resume(): void {
    if (this.isRunning || !this.hasStarted) return;
    this.isRunning = true;
    this.lastTick = performance.now();
    this.rafId = requestAnimationFrame(this.frame);
    this.onUpdate?.();
  }

  swapSides(): void {
    if (this.hasStarted) return;
    const a = this.a;
    this.a = this.b;
    this.b = a;
  }

  undo(): boolean {
    if (!this.history) return false;
    this.a = this.history.a;
    this.b = this.history.b;
    this.active = this.history.active;
    this.history = null;
    this.onUpdate?.();
    return true;
  }

  /** The active player presses their own clock after completing a move. */
  press(side: Side): void {
    if (!this.isRunning || this.active !== side) return;
    this.history = this.snapshot();

    const mover = this.stateOf(side);
    const other: Side = side === "a" ? "b" : "a";

    mover.moves += 1;
    if (this.config.incrementType === "fischer") {
      mover.remainingMs += this.config.incrementMs;
    }
    if (this.config.stage && !mover.stageApplied && mover.moves === this.config.stage.afterMoves) {
      mover.remainingMs += this.config.stage.bonusMs;
      mover.stageApplied = true;
    }

    const otherState = this.stateOf(other);
    otherState.delayRemainingMs =
      this.config.incrementType === "bronstein" || this.config.incrementType === "delay" ? this.config.incrementMs : 0;

    this.active = other;
    this.onTurnEnd?.(side);
    this.onUpdate?.();
  }

  stateOf(side: Side): SideState {
    return side === "a" ? this.a : this.b;
  }

  destroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  private tick(): void {
    if (!this.isRunning || !this.active) return;
    const now = performance.now();
    let elapsed = now - this.lastTick;
    this.lastTick = now;

    const state = this.stateOf(this.active);

    if (state.delayRemainingMs > 0) {
      const consumed = Math.min(elapsed, state.delayRemainingMs);
      state.delayRemainingMs -= consumed;
      elapsed -= consumed;
    }
    if (elapsed > 0) {
      state.remainingMs -= elapsed;
    }

    if (state.remainingMs <= 0) {
      state.remainingMs = 0;
      this.isRunning = false;
      this.onUpdate?.();
      this.onTimeout?.(this.active);
      return;
    }

    if (!state.warned30 && state.remainingMs <= LOW_TIME_MS) {
      state.warned30 = true;
      this.onLowTime?.(this.active, "low");
    }
    if (!state.warned10 && state.remainingMs <= CRITICAL_TIME_MS) {
      state.warned10 = true;
      this.onLowTime?.(this.active, "critical");
    }

    this.onUpdate?.();
    this.rafId = requestAnimationFrame(this.frame);
  }
}

// ---------------------------------------------------------------------------
// Sound (generated tones, no audio assets required)
// ---------------------------------------------------------------------------

class ClickSound {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext {
    if (!this.ctx) {
      this.ctx = new AudioContext();
    }
    return this.ctx;
  }

  private tone(frequency: number, duration: number, gain: number): void {
    const ctx = this.getContext();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = "sine";
    gainNode.gain.setValueAtTime(gain, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + duration);
  }

  press(): void {
    this.tone(880, 0.06, 0.05);
  }

  warning(): void {
    this.tone(660, 0.18, 0.08);
  }

  critical(): void {
    this.tone(520, 0.12, 0.09);
  }

  timeout(): void {
    this.tone(220, 0.5, 0.12);
  }
}

// ---------------------------------------------------------------------------
// Fullscreen (with a CSS-based fallback for browsers without the Fullscreen
// API on arbitrary elements, e.g. iOS Safari/Chrome)
// ---------------------------------------------------------------------------

interface VendorFullscreenDoc extends Document {
  webkitFullscreenElement?: Element;
  webkitExitFullscreen?: () => Promise<void>;
  mozFullScreenElement?: Element;
  mozCancelFullScreen?: () => Promise<void>;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => Promise<void>;
}

interface VendorFullscreenEl extends HTMLElement {
  webkitRequestFullscreen?: () => Promise<void>;
  webkitRequestFullScreen?: () => Promise<void>;
  mozRequestFullScreen?: () => Promise<void>;
  msRequestFullscreen?: () => Promise<void>;
}

function nativeFullscreenElement(): Element | null {
  const doc = document as VendorFullscreenDoc;
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? doc.mozFullScreenElement ?? doc.msFullscreenElement ?? null;
}

function requestNativeFullscreen(el: HTMLElement): Promise<void> | null {
  const target = el as VendorFullscreenEl;
  const fn = target.requestFullscreen ?? target.webkitRequestFullscreen ?? target.webkitRequestFullScreen ?? target.mozRequestFullScreen ?? target.msRequestFullscreen;
  if (typeof fn !== "function") return null;
  try {
    return fn.call(target) ?? Promise.resolve();
  } catch {
    return null;
  }
}

function exitNativeFullscreen(): Promise<void> | null {
  const doc = document as VendorFullscreenDoc;
  const fn = doc.exitFullscreen ?? doc.webkitExitFullscreen ?? doc.mozCancelFullScreen ?? doc.msExitFullscreen;
  if (typeof fn !== "function") return null;
  try {
    return fn.call(doc) ?? Promise.resolve();
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// DOM wiring
// ---------------------------------------------------------------------------

interface StoredPrefs {
  presetId: string;
  customMinutes: number;
  customIncrement: number;
  customIncrementType: IncrementType;
  customStageEnabled: boolean;
  customStageMoves: number;
  customStageMinutes: number;
  soundOn: boolean;
  nameA: string;
  nameB: string;
  rotateMode: boolean;
}

const STORAGE_KEY = "chessclockonline:prefs";
const DEFAULT_PRESET_ID = "blitz-5+3";

function loadPrefs(i18n: ClockI18n): StoredPrefs {
  const defaults: StoredPrefs = {
    presetId: DEFAULT_PRESET_ID,
    customMinutes: 15,
    customIncrement: 10,
    customIncrementType: "fischer",
    customStageEnabled: false,
    customStageMoves: 40,
    customStageMinutes: 30,
    soundOn: true,
    nameA: i18n.player1,
    nameB: i18n.player2,
    rotateMode: false,
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    return { ...defaults, ...JSON.parse(raw) };
  } catch {
    return defaults;
  }
}

function savePrefs(prefs: StoredPrefs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore storage failures (private browsing, quota, etc.)
  }
}

function buildCustomConfig(prefs: StoredPrefs, i18n: ClockI18n): TimeControlConfig {
  return {
    id: "custom",
    label: i18n.categories.custom,
    shortLabel: i18n.categories.custom,
    category: "custom",
    baseMs: prefs.customMinutes * MINUTE,
    incrementMs: prefs.customIncrement * SECOND,
    incrementType: prefs.customIncrementType,
    stage: prefs.customStageEnabled ? { afterMoves: prefs.customStageMoves, bonusMs: prefs.customStageMinutes * MINUTE } : undefined,
  };
}

function initChessClock(): void {
  const root = document.querySelector<HTMLElement>("[data-chess-clock]");
  if (!root) return;

  const i18n = loadClockI18n(root);
  const presets = buildPresets(i18n);
  const prefs = loadPrefs(i18n);

  const panelA = root.querySelector<HTMLElement>('[data-panel="a"]')!;
  const panelB = root.querySelector<HTMLElement>('[data-panel="b"]')!;
  const timeA = root.querySelector<HTMLElement>('[data-time="a"]')!;
  const timeB = root.querySelector<HTMLElement>('[data-time="b"]')!;
  const movesA = root.querySelector<HTMLElement>('[data-moves="a"]')!;
  const movesB = root.querySelector<HTMLElement>('[data-moves="b"]')!;
  const nameInputA = root.querySelector<HTMLInputElement>('[data-name="a"]')!;
  const nameInputB = root.querySelector<HTMLInputElement>('[data-name="b"]')!;
  const startPauseBtn = root.querySelector<HTMLButtonElement>("[data-start-pause]")!;
  const resetBtn = root.querySelector<HTMLButtonElement>("[data-reset]")!;
  const undoBtn = root.querySelector<HTMLButtonElement>("[data-undo]")!;
  const swapBtn = root.querySelector<HTMLButtonElement>("[data-swap]")!;
  const soundBtn = root.querySelector<HTMLButtonElement>("[data-sound-toggle]")!;
  const fullscreenBtn = root.querySelector<HTMLButtonElement>("[data-fullscreen]")!;
  const rotateBtn = root.querySelector<HTMLButtonElement>("[data-rotate]")!;
  const shell = root.querySelector<HTMLElement>("[data-clock-shell]")!;
  const announcer = root.querySelector<HTMLElement>("[data-announcer]")!;
  const presetLabel = root.querySelector<HTMLElement>("[data-active-preset-label]")!;
  const categoryTabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-category-tab]"));
  const presetLists = Array.from(root.querySelectorAll<HTMLElement>("[data-preset-list]"));
  const customForm = root.querySelector<HTMLElement>("[data-custom-form]")!;
  const customMinutesInput = root.querySelector<HTMLInputElement>("[data-custom-minutes]")!;
  const customIncrementInput = root.querySelector<HTMLInputElement>("[data-custom-increment]")!;
  const customIncrementType = root.querySelector<HTMLSelectElement>("[data-custom-increment-type]")!;
  const customStageToggle = root.querySelector<HTMLInputElement>("[data-custom-stage-toggle]")!;
  const customStageFields = root.querySelector<HTMLElement>("[data-custom-stage-fields]")!;
  const customStageMoves = root.querySelector<HTMLInputElement>("[data-custom-stage-moves]")!;
  const customStageMinutes = root.querySelector<HTMLInputElement>("[data-custom-stage-minutes]")!;
  const applyCustomBtn = root.querySelector<HTMLButtonElement>("[data-apply-custom]")!;

  // Build preset chip buttons
  for (const list of presetLists) {
    const category = list.dataset.presetList as Category;
    for (const preset of presets.filter((p) => p.category === category)) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.dataset.presetId = preset.id;
      chip.className =
        "preset-chip rounded-full border border-hairline bg-canvas px-3 py-1 text-body-sm text-body transition-colors hover:border-hairline-strong hover:text-ink data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-on-primary";
      chip.textContent = preset.shortLabel;
      chip.title = preset.label;
      chip.addEventListener("click", () => selectPreset(preset.id));
      list.appendChild(chip);
    }
  }

  let currentConfig: TimeControlConfig =
    prefs.presetId === "custom" ? buildCustomConfig(prefs, i18n) : presets.find((p) => p.id === prefs.presetId) ?? presets.find((p) => p.id === DEFAULT_PRESET_ID)!;
  const engine = new ChessClockEngine(currentConfig);
  const sound = new ClickSound();
  let soundOn = prefs.soundOn;
  let rotateMode = prefs.rotateMode;

  nameInputA.value = prefs.nameA;
  nameInputB.value = prefs.nameB;
  customMinutesInput.value = String(prefs.customMinutes);
  customIncrementInput.value = String(prefs.customIncrement);
  customIncrementType.value = prefs.customIncrementType;
  customStageToggle.checked = prefs.customStageEnabled;
  customStageMoves.value = String(prefs.customStageMoves);
  customStageMinutes.value = String(prefs.customStageMinutes);
  customStageFields.classList.toggle("hidden", !prefs.customStageEnabled);
  shell.classList.toggle("rotate-mode", rotateMode);
  rotateBtn.setAttribute("aria-pressed", String(rotateMode));
  soundBtn.setAttribute("aria-pressed", String(soundOn));
  soundBtn.textContent = soundOn ? i18n.soundOn : i18n.soundOff;

  function persist(): void {
    savePrefs({
      presetId: currentConfig.id,
      customMinutes: Number(customMinutesInput.value) || 15,
      customIncrement: Number(customIncrementInput.value) || 0,
      customIncrementType: customIncrementType.value as IncrementType,
      customStageEnabled: customStageToggle.checked,
      customStageMoves: Number(customStageMoves.value) || 40,
      customStageMinutes: Number(customStageMinutes.value) || 30,
      soundOn,
      nameA: nameInputA.value || i18n.player1,
      nameB: nameInputB.value || i18n.player2,
      rotateMode,
    });
  }

  function announce(message: string): void {
    announcer.textContent = message;
  }

  function updatePresetChips(): void {
    for (const chip of root.querySelectorAll<HTMLButtonElement>("[data-preset-id]")) {
      chip.dataset.active = String(chip.dataset.presetId === currentConfig.id);
    }
    presetLabel.textContent = currentConfig.label;
  }

  function render(): void {
    const showTenthsA = engine.active === "a";
    const showTenthsB = engine.active === "b";
    timeA.textContent = formatTime(engine.a.remainingMs, showTenthsA);
    timeB.textContent = formatTime(engine.b.remainingMs, showTenthsB);
    movesA.textContent = `${engine.a.moves} ${engine.a.moves === 1 ? i18n.moveSingular : i18n.movePlural}`;
    movesB.textContent = `${engine.b.moves} ${engine.b.moves === 1 ? i18n.moveSingular : i18n.movePlural}`;

    for (const [side, panel, state] of [
      ["a", panelA, engine.a],
      ["b", panelB, engine.b],
    ] as const) {
      const isActive = engine.active === side && engine.isRunning;
      panel.dataset.active = String(isActive);
      panel.dataset.turn = String(engine.active === side);
      panel.dataset.low = String(state.remainingMs <= LOW_TIME_MS && state.remainingMs > 0);
      panel.dataset.critical = String(state.remainingMs <= CRITICAL_TIME_MS && state.remainingMs > 0);
      panel.dataset.expired = String(state.remainingMs <= 0);
      panel.setAttribute("aria-disabled", String(!(engine.active === side && engine.isRunning)));
    }

    startPauseBtn.textContent = !engine.hasStarted ? i18n.start : engine.isRunning ? i18n.pause : i18n.resume;
    undoBtn.disabled = false;
    resetBtn.disabled = false;

    // Once the game has started, lock the name tags so an accidental tap
    // focuses/edits the text box instead of pressing the clock.
    nameInputA.readOnly = engine.hasStarted;
    nameInputB.readOnly = engine.hasStarted;
    nameInputA.tabIndex = engine.hasStarted ? -1 : 0;
    nameInputB.tabIndex = engine.hasStarted ? -1 : 0;
    nameInputA.style.pointerEvents = engine.hasStarted ? "none" : "";
    nameInputB.style.pointerEvents = engine.hasStarted ? "none" : "";
  }

  engine.onUpdate = render;
  engine.onTurnEnd = (mover) => {
    if (soundOn) sound.press();
    const moverName = (mover === "a" ? nameInputA.value : nameInputB.value) || (mover === "a" ? i18n.player1 : i18n.player2);
    announce(format(i18n.announce.moved, { name: moverName }));
  };
  engine.onLowTime = (side, level) => {
    if (!soundOn) return;
    if (level === "critical") sound.critical();
    else sound.warning();
    if (navigator.vibrate) navigator.vibrate(level === "critical" ? [80, 40, 80] : 60);
  };
  engine.onTimeout = (loser) => {
    const loserName = loser === "a" ? nameInputA.value || i18n.player1 : nameInputB.value || i18n.player2;
    const winnerName = loser === "a" ? nameInputB.value || i18n.player2 : nameInputA.value || i18n.player1;
    if (soundOn) sound.timeout();
    announce(format(i18n.announce.timeout, { loser: loserName, winner: winnerName }));
  };

  function selectPreset(id: string): void {
    const preset = presets.find((p) => p.id === id);
    if (!preset) return;
    currentConfig = preset;
    engine.reset(currentConfig, "a");
    updatePresetChips();
    persist();
    announce(format(i18n.announce.presetSet, { label: preset.label }));
  }

  function applyCustom(): void {
    const draftPrefs: StoredPrefs = {
      ...prefs,
      customMinutes: Math.max(1, Number(customMinutesInput.value) || 15),
      customIncrement: Math.max(0, Number(customIncrementInput.value) || 0),
      customIncrementType: customIncrementType.value as IncrementType,
      customStageEnabled: customStageToggle.checked,
      customStageMoves: Math.max(1, Number(customStageMoves.value) || 40),
      customStageMinutes: Math.max(1, Number(customStageMinutes.value) || 30),
    };
    currentConfig = buildCustomConfig(draftPrefs, i18n);
    engine.reset(currentConfig, "a");
    updatePresetChips();
    persist();
    announce(i18n.announce.customApplied);
  }

  // Category tabs
  for (const tab of categoryTabs) {
    tab.addEventListener("click", () => {
      const category = tab.dataset.categoryTab as Category | "custom";
      for (const t of categoryTabs) t.dataset.active = String(t === tab);
      for (const list of presetLists) {
        list.classList.toggle("hidden", list.dataset.presetList !== category);
      }
      customForm.classList.toggle("hidden", category !== "custom");
    });
  }
  // Activate tab matching current config category on load
  const initialTab = categoryTabs.find((t) => t.dataset.categoryTab === currentConfig.category);
  initialTab?.click();

  customStageToggle.addEventListener("change", () => {
    customStageFields.classList.toggle("hidden", !customStageToggle.checked);
  });
  applyCustomBtn.addEventListener("click", applyCustom);

  // Panel presses
  panelA.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("input")) return;
    engine.press("a");
  });
  panelB.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).closest("input")) return;
    engine.press("b");
  });
  for (const panel of [panelA, panelB]) {
    panel.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        if ((event.target as HTMLElement).closest("input")) return;
        event.preventDefault();
        engine.press(panel === panelA ? "a" : "b");
      }
    });
  }

  nameInputA.addEventListener("input", persist);
  nameInputB.addEventListener("input", persist);
  nameInputA.addEventListener("click", (e) => e.stopPropagation());
  nameInputB.addEventListener("click", (e) => e.stopPropagation());

  startPauseBtn.addEventListener("click", () => {
    if (!engine.hasStarted) engine.start();
    else if (engine.isRunning) engine.pause();
    else engine.resume();
  });

  resetBtn.addEventListener("click", () => {
    if (engine.hasStarted && !window.confirm(i18n.resetConfirm)) return;
    engine.reset(currentConfig, "a");
    announce(i18n.announce.reset);
  });

  undoBtn.addEventListener("click", () => {
    if (engine.undo()) announce(i18n.announce.undone);
  });

  swapBtn.addEventListener("click", () => {
    if (engine.hasStarted) return;
    engine.swapSides();
    const tmp = nameInputA.value;
    nameInputA.value = nameInputB.value;
    nameInputB.value = tmp;
    persist();
    render();
    announce(i18n.announce.swapped);
  });

  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    soundBtn.textContent = soundOn ? i18n.soundOn : i18n.soundOff;
    persist();
  });

  rotateBtn.addEventListener("click", () => {
    rotateMode = !rotateMode;
    shell.classList.toggle("rotate-mode", rotateMode);
    rotateBtn.setAttribute("aria-pressed", String(rotateMode));
    persist();
  });

  function enterPseudoFullscreen(): void {
    root.classList.add("pseudo-fullscreen");
    document.documentElement.classList.add("clock-pseudo-fullscreen-lock");
  }

  function exitPseudoFullscreen(): void {
    root.classList.remove("pseudo-fullscreen");
    document.documentElement.classList.remove("clock-pseudo-fullscreen-lock");
  }

  fullscreenBtn.addEventListener("click", () => {
    const isFullscreen = nativeFullscreenElement() === root || root.classList.contains("pseudo-fullscreen");
    if (isFullscreen) {
      exitPseudoFullscreen();
      exitNativeFullscreen()?.catch(() => undefined);
      return;
    }
    const request = requestNativeFullscreen(root);
    if (request) {
      request.catch(() => enterPseudoFullscreen());
    } else {
      enterPseudoFullscreen();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (document.activeElement instanceof HTMLInputElement) return;
    switch (event.key) {
      case " ":
        event.preventDefault();
        if (engine.active) engine.press(engine.active);
        break;
      case "p":
      case "P":
        if (!engine.hasStarted) engine.start();
        else if (engine.isRunning) engine.pause();
        else engine.resume();
        break;
      case "r":
      case "R":
        resetBtn.click();
        break;
      case "u":
      case "U":
        undoBtn.click();
        break;
      case "f":
      case "F":
        fullscreenBtn.click();
        break;
      case "m":
      case "M":
        soundBtn.click();
        break;
      default:
        break;
    }
  });

  updatePresetChips();
  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initChessClock);
} else {
  initChessClock();
}
