// Central translation dictionary. Add a locale by adding a key here and to `locales` in astro.config.mjs.

export const locales = ["en", "es", "fr", "de", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
};

interface TimeControlItem {
  name: string;
  time: string;
  description: string;
  examples: string[];
}

interface FeatureItem {
  title: string;
  body: string;
}

interface FaqItem {
  q: string;
  a: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { home: string; play: string; timeControls: string; features: string; faq: string; startClock: string };
  theme: { light: string; dark: string };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  homeTeaser: { title: string; subtitle: string; items: FeatureItem[]; ctaMore: string };
  clockPage: {
    metaTitle: string;
    metaDescription: string;
    nowPlaying: string;
    soundOn: string;
    soundOff: string;
    faceToFace: string;
    fullscreen: string;
    start: string;
    pause: string;
    resume: string;
    undo: string;
    swap: string;
    reset: string;
    tapHint: string;
    player1: string;
    player2: string;
    categoryTablistLabel: string;
    categories: { bullet: string; blitz: string; rapid: string; classical: string; custom: string };
    custom: {
      minutesLabel: string;
      incrementLabel: string;
      methodLabel: string;
      methodNone: string;
      methodFischer: string;
      methodBronstein: string;
      methodDelay: string;
      stageToggle: string;
      stageMoves: string;
      stageMinutes: string;
      apply: string;
    };
    minSuffix: string;
    moveSingular: string;
    movePlural: string;
    resetConfirm: string;
    announce: { moved: string; timeout: string; presetSet: string; customApplied: string; undone: string; swapped: string; reset: string };
  };
  timeControlsPage: { metaTitle: string; metaDescription: string; title: string; subtitle: string; items: TimeControlItem[] };
  featuresPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
    compareTitle: string;
    compareHeaders: [string, string, string];
    compareRows: [string, string, string][];
  };
  faqPage: { metaTitle: string; metaDescription: string; title: string; items: FaqItem[] };
  footer: {
    tagline: string;
    timeControlsHeading: string;
    productHeading: string;
    playNow: string;
    compare: string;
    copyright: string;
  };
}

export const ui: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Chess Clock Online — Free Online Chess Clock & Timer",
      description:
        "A free online chess clock with Bullet, Blitz, Rapid and Classical time controls. Fischer, Bronstein and simple delay increments, FIDE-standard multi-stage controls, face-to-face tablet mode, and keyboard shortcuts.",
    },
    nav: { home: "Home", play: "Play", timeControls: "Time controls", features: "Features", faq: "FAQ", startClock: "Start clock" },
    theme: { light: "Light", dark: "Dark" },
    hero: {
      badge: "Free · No sign-up · Works offline once loaded",
      title: "Chess Clock Online: Free Web & Mobile Chess Timer",
      subtitle:
        "Bullet, blitz, rapid and classical time controls with real Fischer, Bronstein and delay increments, FIDE-standard multi-stage controls, and a face-to-face mode built for two players sharing one screen.",
      ctaPrimary: "Start playing",
      ctaSecondary: "Browse time controls",
    },
    homeTeaser: {
      title: "Better than the average online chess clock",
      subtitle: "We looked at what existing free chess clocks get right — and what they leave out.",
      items: [
        { title: "Fischer, Bronstein & simple delay", body: "Competitors only offer a plain Fischer increment. We add Bronstein delay and US/simple delay too." },
        { title: "FIDE-standard multi-stage controls", body: "Set a second time control that kicks in after a move count, matching FIDE-standard multi-stage formats." },
        { title: "Face-to-face tablet mode", body: "Flip the top clock 180° so two players sharing one tablet can both read their own time right-side up." },
      ],
      ctaMore: "See all features",
    },
    clockPage: {
      metaTitle: "Play — Chess Clock Online",
      metaDescription: "Start a free chess clock game with Bullet, Blitz, Rapid or Classical time controls.",
      nowPlaying: "Now playing:",
      soundOn: "🔊 Sound on",
      soundOff: "🔇 Sound off",
      faceToFace: "⇅ Face-to-face",
      fullscreen: "⛶ Fullscreen",
      start: "Start",
      pause: "Pause",
      resume: "Resume",
      undo: "↺ Undo",
      swap: "⇄ Swap",
      reset: "Reset",
      tapHint: "Tap your own clock after each move · Space to switch · P pause · R reset · U undo · F fullscreen · M mute",
      player1: "Player 1",
      player2: "Player 2",
      categoryTablistLabel: "Time control category",
      categories: { bullet: "Bullet", blitz: "Blitz", rapid: "Rapid", classical: "Classical", custom: "Custom" },
      custom: {
        minutesLabel: "Minutes per side",
        incrementLabel: "Increment / delay (seconds)",
        methodLabel: "Bonus time method",
        methodNone: "None (sudden death)",
        methodFischer: "Fischer increment — added after each move",
        methodBronstein: "Bronstein delay — unused delay isn't lost",
        methodDelay: "US / simple delay — clock waits before counting down",
        stageToggle: "Add a second time control stage (FIDE-standard format)",
        stageMoves: "After move number",
        stageMinutes: "Bonus minutes added",
        apply: "Apply custom time control",
      },
      minSuffix: "min",
      moveSingular: "move",
      movePlural: "moves",
      resetConfirm: "Reset the clock? This will clear the current game.",
      announce: {
        moved: "{name} moved. Clock switched.",
        timeout: "Time out. {loser} ran out of time. {winner} wins on time.",
        presetSet: "Time control set to {label}.",
        customApplied: "Custom time control applied.",
        undone: "Last move undone.",
        swapped: "Sides swapped.",
        reset: "Clock reset.",
      },
    },
    timeControlsPage: {
      metaTitle: "Time controls — Chess Clock Online",
      metaDescription: "Bullet, Blitz, Rapid and Classical chess time controls explained, with FIDE-standard examples.",
      title: "Every time control, named correctly",
      subtitle:
        "Chess time controls follow conventions used by FIDE, chess.com and Lichess. We match them, instead of inventing our own generic minute presets.",
      items: [
        {
          name: "Bullet",
          time: "Under 3 minutes per side",
          description: "Lightning-fast games where instinct matters more than calculation. Great for warming up or grinding rating points.",
          examples: ["1 min", "1 | 1", "2 | 1"],
        },
        {
          name: "Blitz",
          time: "3–10 minutes per side",
          description: "The most popular online format. Fast enough to play many games a session, slow enough to actually think.",
          examples: ["3 min", "3 | 2", "5 | 3"],
        },
        {
          name: "Rapid",
          time: "10–60 minutes per side",
          description: "Enough time for real strategy without committing an entire evening. The standard for club and online rapid events.",
          examples: ["10 min", "15 | 10", "25 | 10"],
        },
        {
          name: "Classical",
          time: "60+ minutes, often multi-stage",
          description:
            "FIDE-standard time controls, including multi-stage controls like 90 minutes for 40 moves, then 30 minutes with a 30-second increment from move one.",
          examples: ["30 | 20", "90+30 | 30"],
        },
      ],
    },
    featuresPage: {
      metaTitle: "Features — Chess Clock Online",
      metaDescription: "See how Chess Clock Online compares to chessclock.org and visualtimer.com.",
      title: "Better than the average online chess clock",
      subtitle: "We looked at what existing free chess clocks get right — and what they leave out.",
      items: [
        { title: "Fischer, Bronstein & simple delay", body: "Competitors only offer a plain Fischer increment. We add Bronstein delay and US/simple delay, the two other FIDE and USCF-recognized bonus-time methods." },
        { title: "FIDE-standard multi-stage controls", body: "Set a second time control that kicks in after a move count — e.g. 90 minutes for 40 moves, then 30 minutes with a 30-second increment — matching FIDE-standard multi-stage formats." },
        { title: "Face-to-face tablet mode", body: "Flip the top clock 180° so two players sharing one tablet or laptop can both read their own time right-side up, without buying a physical clock." },
        { title: "Undo the accidental tap", body: "Hit your clock too early, or before finishing your move? One-tap undo restores both clocks and the move count instantly." },
        { title: "Named presets, not just minutes", body: "Bullet, Blitz, Rapid and Classical are labelled and grouped the way FIDE, chess.com and Lichess do — not a flat, unlabelled list of minute buttons." },
        { title: "Built for keyboards and screen readers", body: "Full keyboard control (Space, P, R, U, F, M) and live announcements for whose move it is, low time and time-outs." },
      ],
      compareTitle: "Chess Clock Online vs. typical free chess clocks",
      compareHeaders: ["Capability", "Chess Clock Online", "Typical free chess clocks"],
      compareRows: [
        ["Fischer increment", "Yes", "Yes"],
        ["Bronstein delay", "Yes", "Rarely"],
        ["US / simple delay", "Yes", "No"],
        ["Multi-stage time control (FIDE-standard)", "Yes", "No"],
        ["Face-to-face tablet rotation", "Yes", "No"],
        ["Undo last clock press", "Yes", "No"],
        ["Keyboard shortcuts", "Full set", "Space bar only"],
        ["Editable player names", "Yes", "Rarely"],
        ["Account or sign-up required", "Never", "Sometimes"],
      ],
    },
    faqPage: {
      metaTitle: "FAQ — Chess Clock Online",
      metaDescription: "Frequently asked questions about Chess Clock Online's time controls and features.",
      title: "Frequently asked questions",
      items: [
        {
          q: "What is the difference between Fischer increment, Bronstein delay and simple delay?",
          a: "Fischer increment adds extra seconds to your clock after every move, so your total time can grow. Bronstein delay gives you a short grace period each move: if you move within it, your main time is untouched. US / simple delay works the same way in practice, but is the term used in USCF tournaments — the clock waits before it starts counting down your main time.",
        },
        {
          q: "Which time control should I use?",
          a: "For quick games, use Bullet (1–2 minutes) or Blitz (3–5 minutes). For a more thoughtful game, use Rapid (10–25 minutes). For tournament-style or serious study games, use Classical, including the FIDE-style 90+30 multi-stage control.",
        },
        {
          q: "Can two people share one device?",
          a: "Yes. Turn on Face-to-face mode and the top clock rotates 180° so both players can read their own time without turning the device around.",
        },
        {
          q: "Do I need an account?",
          a: "No. Chess Clock Online works instantly in your browser with no sign-up. Your last time control and player names are remembered locally on your device.",
        },
        {
          q: "Does it work on mobile?",
          a: "Yes, the clock is fully responsive and supports touch, keyboard, fullscreen and vibration alerts on supported devices.",
        },
      ],
    },
    footer: {
      tagline:
        "A free, precise, no-login chess clock built for bullet, blitz, rapid, classical and tournament-standard time controls — with delay modes competitors don't offer.",
      timeControlsHeading: "Time controls",
      productHeading: "Product",
      playNow: "Play now",
      compare: "Compare",
      copyright: "Chess Clock Online. Built for players, by players.",
    },
  },

  es: {
    meta: {
      title: "Chess Clock Online — Reloj de ajedrez gratis",
      description:
        "Un reloj de ajedrez online gratuito con controles de tiempo Bullet, Blitz, Rápidas y Clásicas. Incrementos Fischer, Bronstein y retardo simple, controles multifase estándar FIDE, modo cara a cara y atajos de teclado.",
    },
    nav: { home: "Inicio", play: "Jugar", timeControls: "Controles de tiempo", features: "Funciones", faq: "Preguntas", startClock: "Iniciar reloj" },
    theme: { light: "Claro", dark: "Oscuro" },
    hero: {
      badge: "Gratis · Sin registro · Funciona sin conexión una vez cargado",
      title: "Reloj de Ajedrez Online: Cronómetro de Ajedrez Gratis para Web y Móvil",
      subtitle:
        "Controles de tiempo Bullet, Blitz, Rápidas y Clásicas con incrementos Fischer, Bronstein y retardo reales, controles multifase estándar FIDE, y un modo cara a cara para dos jugadores en una pantalla.",
      ctaPrimary: "Empezar a jugar",
      ctaSecondary: "Ver controles de tiempo",
    },
    homeTeaser: {
      title: "Mejor que el reloj de ajedrez online medio",
      subtitle: "Analizamos qué hacen bien los relojes de ajedrez gratuitos existentes, y qué les falta.",
      items: [
        { title: "Fischer, Bronstein y retardo simple", body: "La competencia solo ofrece incremento Fischer. Nosotros añadimos también retardo Bronstein y retardo simple (US)." },
        { title: "Controles multifase estándar FIDE", body: "Configura un segundo control de tiempo que se activa tras cierto número de jugadas, siguiendo el formato multifase estándar FIDE." },
        { title: "Modo cara a cara para tablet", body: "Gira el reloj superior 180° para que dos jugadores compartiendo una tablet lean su tiempo correctamente." },
      ],
      ctaMore: "Ver todas las funciones",
    },
    clockPage: {
      metaTitle: "Jugar — Chess Clock Online",
      metaDescription: "Inicia una partida de ajedrez gratis con controles de tiempo Bullet, Blitz, Rápidas o Clásicas.",
      nowPlaying: "Jugando ahora:",
      soundOn: "🔊 Sonido activado",
      soundOff: "🔇 Sonido desactivado",
      faceToFace: "⇅ Cara a cara",
      fullscreen: "⛶ Pantalla completa",
      start: "Iniciar",
      pause: "Pausar",
      resume: "Reanudar",
      undo: "↺ Deshacer",
      swap: "⇄ Intercambiar",
      reset: "Reiniciar",
      tapHint: "Toca tu propio reloj tras cada jugada · Espacio para cambiar · P pausa · R reiniciar · U deshacer · F pantalla completa · M silenciar",
      player1: "Jugador 1",
      player2: "Jugador 2",
      categoryTablistLabel: "Categoría de control de tiempo",
      categories: { bullet: "Bullet", blitz: "Blitz", rapid: "Rápidas", classical: "Clásicas", custom: "Personalizado" },
      custom: {
        minutesLabel: "Minutos por jugador",
        incrementLabel: "Incremento / retardo (segundos)",
        methodLabel: "Método de tiempo adicional",
        methodNone: "Ninguno (muerte súbita)",
        methodFischer: "Incremento Fischer — se añade tras cada jugada",
        methodBronstein: "Retardo Bronstein — el retardo no usado no se pierde",
        methodDelay: "Retardo simple (US) — el reloj espera antes de descontar",
        stageToggle: "Añadir una segunda fase de tiempo (formato estándar FIDE)",
        stageMoves: "A partir de la jugada número",
        stageMinutes: "Minutos adicionales otorgados",
        apply: "Aplicar control de tiempo personalizado",
      },
      minSuffix: "min",
      moveSingular: "jugada",
      movePlural: "jugadas",
      resetConfirm: "¿Reiniciar el reloj? Esto borrará la partida actual.",
      announce: {
        moved: "{name} ha jugado. Reloj cambiado.",
        timeout: "Tiempo agotado. {loser} se ha quedado sin tiempo. {winner} gana por tiempo.",
        presetSet: "Control de tiempo ajustado a {label}.",
        customApplied: "Control de tiempo personalizado aplicado.",
        undone: "Última jugada deshecha.",
        swapped: "Lados intercambiados.",
        reset: "Reloj reiniciado.",
      },
    },
    timeControlsPage: {
      metaTitle: "Controles de tiempo — Chess Clock Online",
      metaDescription: "Controles de tiempo Bullet, Blitz, Rápidas y Clásicas explicados, con ejemplos del estándar FIDE.",
      title: "Cada control de tiempo, con su nombre correcto",
      subtitle:
        "Los controles de tiempo de ajedrez siguen las convenciones de FIDE, chess.com y Lichess. Las igualamos, en lugar de inventar presets genéricos de minutos.",
      items: [
        {
          name: "Bullet",
          time: "Menos de 3 minutos por jugador",
          description: "Partidas ultrarrápidas donde el instinto pesa más que el cálculo. Ideal para calentar o sumar puntos de rating.",
          examples: ["1 min", "1 | 1", "2 | 1"],
        },
        {
          name: "Blitz",
          time: "3–10 minutos por jugador",
          description: "El formato online más popular. Suficientemente rápido para jugar muchas partidas, suficientemente lento para pensar.",
          examples: ["3 min", "3 | 2", "5 | 3"],
        },
        {
          name: "Rápidas",
          time: "10–60 minutos por jugador",
          description: "Tiempo suficiente para una estrategia real sin ocupar toda la tarde. El estándar en clubes y torneos rápidos online.",
          examples: ["10 min", "15 | 10", "25 | 10"],
        },
        {
          name: "Clásicas",
          time: "60+ minutos, a menudo en varias fases",
          description:
            "Controles de tiempo estándar FIDE, incluyendo controles multifase como 90 minutos para 40 jugadas, luego 30 minutos con 30 segundos de incremento desde la primera jugada.",
          examples: ["30 | 20", "90+30 | 30"],
        },
      ],
    },
    featuresPage: {
      metaTitle: "Funciones — Chess Clock Online",
      metaDescription: "Compara Chess Clock Online con chessclock.org y visualtimer.com.",
      title: "Mejor que el reloj de ajedrez online medio",
      subtitle: "Analizamos qué hacen bien los relojes de ajedrez gratuitos existentes, y qué les falta.",
      items: [
        { title: "Fischer, Bronstein y retardo simple", body: "La competencia solo ofrece incremento Fischer. Nosotros añadimos retardo Bronstein y retardo simple (US), los otros dos métodos reconocidos por FIDE y USCF." },
        { title: "Controles multifase estándar FIDE", body: "Configura un segundo control de tiempo que se activa tras cierto número de jugadas — por ejemplo, 90 minutos para 40 jugadas y luego 30 minutos con 30 segundos de incremento — siguiendo el formato multifase estándar FIDE." },
        { title: "Modo cara a cara para tablet", body: "Gira el reloj superior 180° para que dos jugadores compartiendo una tablet o portátil lean su tiempo correctamente, sin comprar un reloj físico." },
        { title: "Deshaz el toque accidental", body: "¿Tocaste tu reloj demasiado pronto o antes de terminar tu jugada? Deshacer con un toque restaura ambos relojes y el contador de jugadas al instante." },
        { title: "Presets con nombre, no solo minutos", body: "Bullet, Blitz, Rápidas y Clásicas están etiquetados y agrupados como en FIDE, chess.com y Lichess, no como una lista plana de botones de minutos." },
        { title: "Pensado para teclado y lectores de pantalla", body: "Control completo por teclado (Espacio, P, R, U, F, M) y anuncios en vivo de a quién le toca, poco tiempo y fin de partida." },
      ],
      compareTitle: "Chess Clock Online frente a relojes de ajedrez gratuitos habituales",
      compareHeaders: ["Función", "Chess Clock Online", "Relojes gratuitos habituales"],
      compareRows: [
        ["Incremento Fischer", "Sí", "Sí"],
        ["Retardo Bronstein", "Sí", "Raramente"],
        ["Retardo simple (US)", "Sí", "No"],
        ["Control de tiempo multifase (estándar FIDE)", "Sí", "No"],
        ["Rotación cara a cara en tablet", "Sí", "No"],
        ["Deshacer última pulsación", "Sí", "No"],
        ["Atajos de teclado", "Completos", "Solo barra espaciadora"],
        ["Nombres de jugador editables", "Sí", "Raramente"],
        ["Requiere cuenta o registro", "Nunca", "A veces"],
      ],
    },
    faqPage: {
      metaTitle: "Preguntas frecuentes — Chess Clock Online",
      metaDescription: "Preguntas frecuentes sobre los controles de tiempo y funciones de Chess Clock Online.",
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Cuál es la diferencia entre incremento Fischer, retardo Bronstein y retardo simple?",
          a: "El incremento Fischer añade segundos extra a tu reloj tras cada jugada, así que tu tiempo total puede crecer. El retardo Bronstein te da un breve margen cada jugada: si mueves dentro de ese margen, tu tiempo principal no se toca. El retardo simple (US) funciona igual en la práctica, pero es el término usado en torneos USCF: el reloj espera antes de empezar a descontar tu tiempo principal.",
        },
        {
          q: "¿Qué control de tiempo debería usar?",
          a: "Para partidas rápidas, usa Bullet (1–2 minutos) o Blitz (3–5 minutos). Para una partida más reflexiva, usa Rápidas (10–25 minutos). Para partidas de torneo o de estudio serio, usa Clásicas, incluyendo el control multifase estilo FIDE 90+30.",
        },
        {
          q: "¿Pueden dos personas compartir un mismo dispositivo?",
          a: "Sí. Activa el modo cara a cara y el reloj superior gira 180° para que ambos jugadores lean su tiempo sin girar el dispositivo.",
        },
        {
          q: "¿Necesito una cuenta?",
          a: "No. Chess Clock Online funciona al instante en tu navegador sin registro. Tu último control de tiempo y los nombres de los jugadores se guardan localmente en tu dispositivo.",
        },
        {
          q: "¿Funciona en el móvil?",
          a: "Sí, el reloj es totalmente responsive y admite pantalla táctil, teclado, pantalla completa y alertas por vibración en dispositivos compatibles.",
        },
      ],
    },
    footer: {
      tagline:
        "Un reloj de ajedrez gratuito, preciso y sin registro, pensado para controles Bullet, Blitz, Rápidas, Clásicas y de torneo, con modos de retardo que la competencia no ofrece.",
      timeControlsHeading: "Controles de tiempo",
      productHeading: "Producto",
      playNow: "Jugar ahora",
      compare: "Comparar",
      copyright: "Chess Clock Online. Hecho para jugadores, por jugadores.",
    },
  },

  fr: {
    meta: {
      title: "Chess Clock Online — Pendule d'échecs gratuite en ligne",
      description:
        "Une pendule d'échecs en ligne gratuite avec cadences Bullet, Blitz, Rapide et Classique. Incréments Fischer, Bronstein et retard simple, cadences multiphases aux normes FIDE, mode face-à-face et raccourcis clavier.",
    },
    nav: { home: "Accueil", play: "Jouer", timeControls: "Cadences", features: "Fonctionnalités", faq: "FAQ", startClock: "Lancer la pendule" },
    theme: { light: "Clair", dark: "Sombre" },
    hero: {
      badge: "Gratuit · Sans inscription · Fonctionne hors ligne une fois chargé",
      title: "Pendule d'Échecs en Ligne : Minuterie d'Échecs Gratuite pour Web et Mobile",
      subtitle:
        "Cadences Bullet, Blitz, Rapide et Classique avec de vrais incréments Fischer, Bronstein et retard, des cadences multiphases aux normes FIDE, et un mode face-à-face pour deux joueurs sur un même écran.",
      ctaPrimary: "Commencer à jouer",
      ctaSecondary: "Voir les cadences",
    },
    homeTeaser: {
      title: "Meilleure que la pendule d'échecs en ligne moyenne",
      subtitle: "Nous avons regardé ce que les pendules gratuites existantes font bien, et ce qu'il leur manque.",
      items: [
        { title: "Fischer, Bronstein et retard simple", body: "La concurrence ne propose que l'incrément Fischer. Nous ajoutons aussi le retard Bronstein et le retard simple (US)." },
        { title: "Cadences multiphases aux normes FIDE", body: "Définissez une seconde cadence qui se déclenche après un nombre de coups, au format multiphase des normes FIDE." },
        { title: "Mode face-à-face pour tablette", body: "Faites pivoter la pendule du haut à 180° pour que deux joueurs partageant une tablette lisent chacun leur temps à l'endroit." },
      ],
      ctaMore: "Voir toutes les fonctionnalités",
    },
    clockPage: {
      metaTitle: "Jouer — Chess Clock Online",
      metaDescription: "Démarrez une partie d'échecs gratuite avec une cadence Bullet, Blitz, Rapide ou Classique.",
      nowPlaying: "Cadence actuelle :",
      soundOn: "🔊 Son activé",
      soundOff: "🔇 Son coupé",
      faceToFace: "⇅ Face-à-face",
      fullscreen: "⛶ Plein écran",
      start: "Démarrer",
      pause: "Pause",
      resume: "Reprendre",
      undo: "↺ Annuler",
      swap: "⇄ Inverser",
      reset: "Réinitialiser",
      tapHint: "Appuyez sur votre pendule après chaque coup · Espace pour changer · P pause · R réinitialiser · U annuler · F plein écran · M muet",
      player1: "Joueur 1",
      player2: "Joueur 2",
      categoryTablistLabel: "Catégorie de cadence",
      categories: { bullet: "Bullet", blitz: "Blitz", rapid: "Rapide", classical: "Classique", custom: "Personnalisé" },
      custom: {
        minutesLabel: "Minutes par joueur",
        incrementLabel: "Incrément / retard (secondes)",
        methodLabel: "Méthode de temps bonus",
        methodNone: "Aucune (mort subite)",
        methodFischer: "Incrément Fischer — ajouté après chaque coup",
        methodBronstein: "Retard Bronstein — le retard non utilisé n'est pas perdu",
        methodDelay: "Retard simple (US) — la pendule attend avant de décompter",
        stageToggle: "Ajouter une seconde phase de cadence (format FIDE)",
        stageMoves: "À partir du coup numéro",
        stageMinutes: "Minutes bonus ajoutées",
        apply: "Appliquer la cadence personnalisée",
      },
      minSuffix: "min",
      moveSingular: "coup",
      movePlural: "coups",
      resetConfirm: "Réinitialiser la pendule ? La partie en cours sera effacée.",
      announce: {
        moved: "{name} a joué. Pendule changée.",
        timeout: "Temps écoulé. {loser} n'a plus de temps. {winner} gagne au temps.",
        presetSet: "Cadence réglée sur {label}.",
        customApplied: "Cadence personnalisée appliquée.",
        undone: "Dernier coup annulé.",
        swapped: "Côtés inversés.",
        reset: "Pendule réinitialisée.",
      },
    },
    timeControlsPage: {
      metaTitle: "Cadences — Chess Clock Online",
      metaDescription: "Les cadences Bullet, Blitz, Rapide et Classique expliquées, avec des exemples aux normes FIDE.",
      title: "Chaque cadence, correctement nommée",
      subtitle:
        "Les cadences d'échecs suivent les conventions utilisées par la FIDE, chess.com et Lichess. Nous les reprenons, plutôt que d'inventer nos propres préréglages génériques.",
      items: [
        {
          name: "Bullet",
          time: "Moins de 3 minutes par joueur",
          description: "Des parties ultra-rapides où l'instinct compte plus que le calcul. Idéal pour s'échauffer ou grimper au classement.",
          examples: ["1 min", "1 | 1", "2 | 1"],
        },
        {
          name: "Blitz",
          time: "3 à 10 minutes par joueur",
          description: "Le format en ligne le plus populaire. Assez rapide pour enchaîner les parties, assez lent pour vraiment réfléchir.",
          examples: ["3 min", "3 | 2", "5 | 3"],
        },
        {
          name: "Rapide",
          time: "10 à 60 minutes par joueur",
          description: "Assez de temps pour une vraie stratégie sans y passer la soirée. La norme des clubs et des tournois rapides en ligne.",
          examples: ["10 min", "15 | 10", "25 | 10"],
        },
        {
          name: "Classique",
          time: "60 minutes et plus, souvent en plusieurs phases",
          description:
            "Cadences aux normes FIDE, y compris les cadences à plusieurs phases comme 90 minutes pour 40 coups, puis 30 minutes avec 30 secondes d'incrément dès le premier coup.",
          examples: ["30 | 20", "90+30 | 30"],
        },
      ],
    },
    featuresPage: {
      metaTitle: "Fonctionnalités — Chess Clock Online",
      metaDescription: "Comparez Chess Clock Online à chessclock.org et visualtimer.com.",
      title: "Meilleure que la pendule d'échecs en ligne moyenne",
      subtitle: "Nous avons regardé ce que les pendules gratuites existantes font bien, et ce qu'il leur manque.",
      items: [
        { title: "Fischer, Bronstein et retard simple", body: "La concurrence ne propose que l'incrément Fischer. Nous ajoutons le retard Bronstein et le retard simple (US), les deux autres méthodes reconnues par la FIDE et l'USCF." },
        { title: "Cadences multiphases aux normes FIDE", body: "Définissez une seconde cadence qui se déclenche après un nombre de coups — par exemple 90 minutes pour 40 coups, puis 30 minutes avec 30 secondes d'incrément — au format multiphase des normes FIDE." },
        { title: "Mode face-à-face pour tablette", body: "Faites pivoter la pendule du haut à 180° pour que deux joueurs partageant une tablette ou un ordinateur portable lisent chacun leur temps à l'endroit, sans acheter de pendule physique." },
        { title: "Annulez l'appui accidentel", body: "Vous avez appuyé trop tôt, ou avant d'avoir fini votre coup ? L'annulation en un geste restaure les deux pendules et le compteur de coups instantanément." },
        { title: "Des préréglages nommés, pas juste des minutes", body: "Bullet, Blitz, Rapide et Classique sont étiquetés et regroupés comme chez la FIDE, chess.com et Lichess, pas comme une simple liste de boutons de minutes." },
        { title: "Pensée pour le clavier et les lecteurs d'écran", body: "Contrôle clavier complet (Espace, P, R, U, F, M) et annonces en direct du joueur au trait, du temps faible et des fins de partie." },
      ],
      compareTitle: "Chess Clock Online face aux pendules d'échecs gratuites classiques",
      compareHeaders: ["Fonctionnalité", "Chess Clock Online", "Pendules gratuites classiques"],
      compareRows: [
        ["Incrément Fischer", "Oui", "Oui"],
        ["Retard Bronstein", "Oui", "Rarement"],
        ["Retard simple (US)", "Oui", "Non"],
        ["Cadence multiphase (norme FIDE)", "Oui", "Non"],
        ["Rotation face-à-face sur tablette", "Oui", "Non"],
        ["Annuler le dernier appui", "Oui", "Non"],
        ["Raccourcis clavier", "Complets", "Barre d'espace seulement"],
        ["Noms de joueurs modifiables", "Oui", "Rarement"],
        ["Compte ou inscription requis", "Jamais", "Parfois"],
      ],
    },
    faqPage: {
      metaTitle: "FAQ — Chess Clock Online",
      metaDescription: "Questions fréquentes sur les cadences et fonctionnalités de Chess Clock Online.",
      title: "Questions fréquentes",
      items: [
        {
          q: "Quelle est la différence entre l'incrément Fischer, le retard Bronstein et le retard simple ?",
          a: "L'incrément Fischer ajoute des secondes à votre pendule après chaque coup, donc votre temps total peut augmenter. Le retard Bronstein vous donne un court délai de grâce à chaque coup : si vous jouez pendant ce délai, votre temps principal n'est pas touché. Le retard simple (US) fonctionne pareil en pratique, mais c'est le terme utilisé dans les tournois USCF — la pendule attend avant de décompter votre temps principal.",
        },
        {
          q: "Quelle cadence dois-je utiliser ?",
          a: "Pour des parties rapides, utilisez Bullet (1 à 2 minutes) ou Blitz (3 à 5 minutes). Pour une partie plus réfléchie, utilisez Rapide (10 à 25 minutes). Pour des parties de tournoi ou d'étude sérieuse, utilisez Classique, y compris la cadence multiphase de style FIDE 90+30.",
        },
        {
          q: "Deux personnes peuvent-elles partager un seul appareil ?",
          a: "Oui. Activez le mode face-à-face et la pendule du haut pivote à 180° pour que les deux joueurs lisent leur temps sans retourner l'appareil.",
        },
        {
          q: "Ai-je besoin d'un compte ?",
          a: "Non. Chess Clock Online fonctionne instantanément dans votre navigateur, sans inscription. Votre dernière cadence et les noms des joueurs sont mémorisés localement sur votre appareil.",
        },
        {
          q: "Ça fonctionne sur mobile ?",
          a: "Oui, la pendule est entièrement responsive et prend en charge le tactile, le clavier, le plein écran et les alertes par vibration sur les appareils compatibles.",
        },
      ],
    },
    footer: {
      tagline:
        "Une pendule d'échecs gratuite, précise et sans inscription, conçue pour les cadences Bullet, Blitz, Rapide, Classique et de tournoi, avec des modes de retard que la concurrence n'offre pas.",
      timeControlsHeading: "Cadences",
      productHeading: "Produit",
      playNow: "Jouer maintenant",
      compare: "Comparer",
      copyright: "Chess Clock Online. Conçu pour les joueurs, par des joueurs.",
    },
  },

  de: {
    meta: {
      title: "Chess Clock Online — Kostenlose Schachuhr online",
      description:
        "Eine kostenlose Online-Schachuhr mit Bullet-, Blitz-, Schnell- und klassischen Bedenkzeiten. Fischer-, Bronstein- und einfacher Verzögerungszuschlag, FIDE-Standard-Mehrphasenbedenkzeiten, Face-to-Face-Tablet-Modus und Tastenkürzel.",
    },
    nav: { home: "Start", play: "Spielen", timeControls: "Bedenkzeiten", features: "Funktionen", faq: "FAQ", startClock: "Uhr starten" },
    theme: { light: "Hell", dark: "Dunkel" },
    hero: {
      badge: "Kostenlos · Keine Anmeldung · Läuft offline, sobald geladen",
      title: "Schachuhr Online: Kostenloser Schach-Timer für Web & Mobilgeräte",
      subtitle:
        "Bullet-, Blitz-, Schnell- und klassische Bedenkzeiten mit echtem Fischer-, Bronstein- und Verzögerungszuschlag, FIDE-Standard-Mehrphasenbedenkzeiten und einem Face-to-Face-Modus für zwei Spieler an einem Bildschirm.",
      ctaPrimary: "Jetzt spielen",
      ctaSecondary: "Bedenkzeiten ansehen",
    },
    homeTeaser: {
      title: "Besser als die durchschnittliche Online-Schachuhr",
      subtitle: "Wir haben uns angesehen, was bestehende kostenlose Schachuhren richtig machen — und was ihnen fehlt.",
      items: [
        { title: "Fischer, Bronstein & einfache Verzögerung", body: "Der Wettbewerb bietet nur Fischer-Zuschlag. Wir fügen auch Bronstein- und einfache (US-)Verzögerung hinzu." },
        { title: "FIDE-Standard-Mehrphasenbedenkzeiten", body: "Legen Sie eine zweite Bedenkzeit fest, die nach einer bestimmten Zugzahl greift, im FIDE-Standard-Mehrphasenformat." },
        { title: "Face-to-Face-Tablet-Modus", body: "Drehen Sie die obere Uhr um 180°, damit zwei Spieler an einem Tablet ihre Zeit jeweils richtig herum lesen können." },
      ],
      ctaMore: "Alle Funktionen ansehen",
    },
    clockPage: {
      metaTitle: "Spielen — Chess Clock Online",
      metaDescription: "Starten Sie eine kostenlose Schachpartie mit Bullet-, Blitz-, Schnell- oder klassischer Bedenkzeit.",
      nowPlaying: "Aktuelle Bedenkzeit:",
      soundOn: "🔊 Ton an",
      soundOff: "🔇 Ton aus",
      faceToFace: "⇅ Face-to-Face",
      fullscreen: "⛶ Vollbild",
      start: "Start",
      pause: "Pause",
      resume: "Fortsetzen",
      undo: "↺ Rückgängig",
      swap: "⇄ Tauschen",
      reset: "Zurücksetzen",
      tapHint: "Nach jedem Zug die eigene Uhr antippen · Leertaste zum Wechseln · P Pause · R Zurücksetzen · U Rückgängig · F Vollbild · M Stumm",
      player1: "Spieler 1",
      player2: "Spieler 2",
      categoryTablistLabel: "Bedenkzeit-Kategorie",
      categories: { bullet: "Bullet", blitz: "Blitz", rapid: "Schnell", classical: "Klassisch", custom: "Individuell" },
      custom: {
        minutesLabel: "Minuten pro Spieler",
        incrementLabel: "Zuschlag / Verzögerung (Sekunden)",
        methodLabel: "Bonuszeit-Methode",
        methodNone: "Keine (Sudden Death)",
        methodFischer: "Fischer-Zuschlag — wird nach jedem Zug hinzugefügt",
        methodBronstein: "Bronstein-Verzögerung — ungenutzte Verzögerung geht nicht verloren",
        methodDelay: "Einfache (US-)Verzögerung — die Uhr wartet, bevor sie herunterzählt",
        stageToggle: "Zweite Bedenkzeit-Phase hinzufügen (FIDE-Standardformat)",
        stageMoves: "Ab Zugnummer",
        stageMinutes: "Zusätzliche Bonusminuten",
        apply: "Individuelle Bedenkzeit anwenden",
      },
      minSuffix: "Min",
      moveSingular: "Zug",
      movePlural: "Züge",
      resetConfirm: "Uhr zurücksetzen? Die aktuelle Partie wird dabei gelöscht.",
      announce: {
        moved: "{name} hat gezogen. Uhr gewechselt.",
        timeout: "Zeit abgelaufen. {loser} hat keine Zeit mehr. {winner} gewinnt auf Zeit.",
        presetSet: "Bedenkzeit auf {label} gesetzt.",
        customApplied: "Individuelle Bedenkzeit angewendet.",
        undone: "Letzter Zug rückgängig gemacht.",
        swapped: "Seiten getauscht.",
        reset: "Uhr zurückgesetzt.",
      },
    },
    timeControlsPage: {
      metaTitle: "Bedenkzeiten — Chess Clock Online",
      metaDescription: "Bullet-, Blitz-, Schnell- und klassische Bedenkzeiten erklärt, mit FIDE-Standardbeispielen.",
      title: "Jede Bedenkzeit, korrekt benannt",
      subtitle:
        "Schach-Bedenkzeiten folgen den Konventionen von FIDE, chess.com und Lichess. Wir übernehmen sie, statt eigene generische Minuten-Presets zu erfinden.",
      items: [
        {
          name: "Bullet",
          time: "Unter 3 Minuten pro Spieler",
          description: "Blitzschnelle Partien, bei denen Instinkt mehr zählt als Berechnung. Ideal zum Aufwärmen oder für schnelle Ratingpunkte.",
          examples: ["1 Min", "1 | 1", "2 | 1"],
        },
        {
          name: "Blitz",
          time: "3–10 Minuten pro Spieler",
          description: "Das beliebteste Online-Format. Schnell genug für viele Partien, langsam genug zum wirklichen Nachdenken.",
          examples: ["3 Min", "3 | 2", "5 | 3"],
        },
        {
          name: "Schnell",
          time: "10–60 Minuten pro Spieler",
          description: "Genug Zeit für echte Strategie, ohne einen ganzen Abend zu beanspruchen. Der Standard für Vereins- und Online-Schnellturniere.",
          examples: ["10 Min", "15 | 10", "25 | 10"],
        },
        {
          name: "Klassisch",
          time: "60+ Minuten, oft mehrphasig",
          description:
            "FIDE-Standard-Bedenkzeiten, einschließlich mehrphasiger Bedenkzeiten wie 90 Minuten für 40 Züge, danach 30 Minuten mit 30 Sekunden Zuschlag ab dem ersten Zug.",
          examples: ["30 | 20", "90+30 | 30"],
        },
      ],
    },
    featuresPage: {
      metaTitle: "Funktionen — Chess Clock Online",
      metaDescription: "Vergleichen Sie Chess Clock Online mit chessclock.org und visualtimer.com.",
      title: "Besser als die durchschnittliche Online-Schachuhr",
      subtitle: "Wir haben uns angesehen, was bestehende kostenlose Schachuhren richtig machen — und was ihnen fehlt.",
      items: [
        { title: "Fischer, Bronstein & einfache Verzögerung", body: "Der Wettbewerb bietet nur Fischer-Zuschlag. Wir fügen Bronstein-Verzögerung und einfache (US-)Verzögerung hinzu, die beiden anderen von FIDE und USCF anerkannten Bonuszeit-Methoden." },
        { title: "FIDE-Standard-Mehrphasenbedenkzeiten", body: "Legen Sie eine zweite Bedenkzeit fest, die nach einer bestimmten Zugzahl greift — z. B. 90 Minuten für 40 Züge, dann 30 Minuten mit 30 Sekunden Zuschlag — im FIDE-Standard-Mehrphasenformat." },
        { title: "Face-to-Face-Tablet-Modus", body: "Drehen Sie die obere Uhr um 180°, damit zwei Spieler an einem Tablet oder Laptop ihre Zeit jeweils richtig herum lesen können, ohne eine physische Uhr zu kaufen." },
        { title: "Versehentliches Tippen rückgängig machen", body: "Zu früh oder vor Zugende die Uhr gedrückt? Ein Tipp auf Rückgängig stellt beide Uhren und den Zugzähler sofort wieder her." },
        { title: "Benannte Presets, nicht nur Minuten", body: "Bullet, Blitz, Schnell und Klassisch sind so benannt und gruppiert wie bei FIDE, chess.com und Lichess — nicht als flache, unbeschriftete Liste von Minutenschaltflächen." },
        { title: "Für Tastatur und Screenreader gemacht", body: "Vollständige Tastatursteuerung (Leertaste, P, R, U, F, M) und Live-Ansagen, wer am Zug ist, wenig Zeit bleibt und die Partie endet." },
      ],
      compareTitle: "Chess Clock Online im Vergleich zu typischen kostenlosen Schachuhren",
      compareHeaders: ["Funktion", "Chess Clock Online", "Typische kostenlose Schachuhren"],
      compareRows: [
        ["Fischer-Zuschlag", "Ja", "Ja"],
        ["Bronstein-Verzögerung", "Ja", "Selten"],
        ["Einfache (US-)Verzögerung", "Ja", "Nein"],
        ["Mehrphasige Bedenkzeit (FIDE-Standard)", "Ja", "Nein"],
        ["Face-to-Face-Drehung auf Tablet", "Ja", "Nein"],
        ["Letzten Tastendruck rückgängig machen", "Ja", "Nein"],
        ["Tastenkürzel", "Vollständig", "Nur Leertaste"],
        ["Bearbeitbare Spielernamen", "Ja", "Selten"],
        ["Konto oder Anmeldung erforderlich", "Nie", "Manchmal"],
      ],
    },
    faqPage: {
      metaTitle: "FAQ — Chess Clock Online",
      metaDescription: "Häufig gestellte Fragen zu den Bedenkzeiten und Funktionen von Chess Clock Online.",
      title: "Häufig gestellte Fragen",
      items: [
        {
          q: "Was ist der Unterschied zwischen Fischer-Zuschlag, Bronstein-Verzögerung und einfacher Verzögerung?",
          a: "Der Fischer-Zuschlag fügt Ihrer Uhr nach jedem Zug zusätzliche Sekunden hinzu, sodass Ihre Gesamtzeit wachsen kann. Die Bronstein-Verzögerung gibt Ihnen bei jedem Zug eine kurze Karenzzeit: Wenn Sie innerhalb dieser Zeit ziehen, bleibt Ihre Hauptzeit unangetastet. Die einfache (US-)Verzögerung funktioniert in der Praxis genauso, ist aber der in USCF-Turnieren verwendete Begriff — die Uhr wartet, bevor sie Ihre Hauptzeit herunterzählt.",
        },
        {
          q: "Welche Bedenkzeit sollte ich verwenden?",
          a: "Für schnelle Partien nutzen Sie Bullet (1–2 Minuten) oder Blitz (3–5 Minuten). Für eine überlegtere Partie nutzen Sie Schnell (10–25 Minuten). Für Turnier- oder ernsthafte Studienpartien nutzen Sie Klassisch, einschließlich der mehrphasigen FIDE-Bedenkzeit 90+30.",
        },
        {
          q: "Können sich zwei Personen ein Gerät teilen?",
          a: "Ja. Aktivieren Sie den Face-to-Face-Modus, und die obere Uhr dreht sich um 180°, sodass beide Spieler ihre Zeit lesen können, ohne das Gerät zu drehen.",
        },
        {
          q: "Brauche ich ein Konto?",
          a: "Nein. Chess Clock Online funktioniert sofort in Ihrem Browser, ohne Anmeldung. Ihre letzte Bedenkzeit und die Spielernamen werden lokal auf Ihrem Gerät gespeichert.",
        },
        {
          q: "Funktioniert es auf dem Handy?",
          a: "Ja, die Uhr ist voll responsiv und unterstützt Touch, Tastatur, Vollbild und Vibrationsalarme auf unterstützten Geräten.",
        },
      ],
    },
    footer: {
      tagline:
        "Eine kostenlose, präzise Schachuhr ohne Anmeldung für Bullet-, Blitz-, Schnell-, klassische und Turnier-Bedenkzeiten — mit Verzögerungsmodi, die der Wettbewerb nicht bietet.",
      timeControlsHeading: "Bedenkzeiten",
      productHeading: "Produkt",
      playNow: "Jetzt spielen",
      compare: "Vergleichen",
      copyright: "Chess Clock Online. Gemacht für Spieler, von Spielern.",
    },
  },

  pt: {
    meta: {
      title: "Chess Clock Online — Relógio de xadrez grátis",
      description:
        "Um relógio de xadrez online gratuito com controlos de tempo Bullet, Blitz, Rápidas e Clássicas. Incrementos Fischer, Bronstein e atraso simples, controlos multifase padrão FIDE, modo frente a frente e atalhos de teclado.",
    },
    nav: { home: "Início", play: "Jogar", timeControls: "Controlos de tempo", features: "Funcionalidades", faq: "Perguntas", startClock: "Iniciar relógio" },
    theme: { light: "Claro", dark: "Escuro" },
    hero: {
      badge: "Grátis · Sem registo · Funciona offline depois de carregado",
      title: "Relógio de Xadrez Online: Cronómetro de Xadrez Grátis para Web e Móvel",
      subtitle:
        "Controlos de tempo Bullet, Blitz, Rápidas e Clássicas com incrementos Fischer, Bronstein e atraso reais, controlos multifase padrão FIDE, e um modo frente a frente para dois jogadores no mesmo ecrã.",
      ctaPrimary: "Começar a jogar",
      ctaSecondary: "Ver controlos de tempo",
    },
    homeTeaser: {
      title: "Melhor do que o relógio de xadrez online médio",
      subtitle: "Analisámos o que os relógios de xadrez gratuitos existentes fazem bem, e o que lhes falta.",
      items: [
        { title: "Fischer, Bronstein e atraso simples", body: "A concorrência só oferece incremento Fischer. Nós adicionamos também atraso Bronstein e atraso simples (US)." },
        { title: "Controlos multifase padrão FIDE", body: "Defina um segundo controlo de tempo que entra em vigor após um número de jogadas, seguindo o formato multifase padrão FIDE." },
        { title: "Modo frente a frente para tablet", body: "Rode o relógio de cima 180° para que dois jogadores a partilhar um tablet leiam o seu tempo corretamente." },
      ],
      ctaMore: "Ver todas as funcionalidades",
    },
    clockPage: {
      metaTitle: "Jogar — Chess Clock Online",
      metaDescription: "Inicie uma partida de xadrez grátis com controlo de tempo Bullet, Blitz, Rápidas ou Clássicas.",
      nowPlaying: "A jogar agora:",
      soundOn: "🔊 Som ativado",
      soundOff: "🔇 Som desativado",
      faceToFace: "⇅ Frente a frente",
      fullscreen: "⛶ Ecrã inteiro",
      start: "Iniciar",
      pause: "Pausar",
      resume: "Retomar",
      undo: "↺ Desfazer",
      swap: "⇄ Trocar",
      reset: "Reiniciar",
      tapHint: "Toque no seu relógio depois de cada jogada · Espaço para trocar · P pausa · R reiniciar · U desfazer · F ecrã inteiro · M silenciar",
      player1: "Jogador 1",
      player2: "Jogador 2",
      categoryTablistLabel: "Categoria de controlo de tempo",
      categories: { bullet: "Bullet", blitz: "Blitz", rapid: "Rápidas", classical: "Clássicas", custom: "Personalizado" },
      custom: {
        minutesLabel: "Minutos por jogador",
        incrementLabel: "Incremento / atraso (segundos)",
        methodLabel: "Método de tempo extra",
        methodNone: "Nenhum (morte súbita)",
        methodFischer: "Incremento Fischer — adicionado após cada jogada",
        methodBronstein: "Atraso Bronstein — o atraso não usado não se perde",
        methodDelay: "Atraso simples (US) — o relógio espera antes de contar",
        stageToggle: "Adicionar uma segunda fase de tempo (formato padrão FIDE)",
        stageMoves: "A partir da jogada número",
        stageMinutes: "Minutos extra concedidos",
        apply: "Aplicar controlo de tempo personalizado",
      },
      minSuffix: "min",
      moveSingular: "jogada",
      movePlural: "jogadas",
      resetConfirm: "Reiniciar o relógio? Isto vai apagar a partida atual.",
      announce: {
        moved: "{name} jogou. Relógio trocado.",
        timeout: "Tempo esgotado. {loser} ficou sem tempo. {winner} vence por tempo.",
        presetSet: "Controlo de tempo definido para {label}.",
        customApplied: "Controlo de tempo personalizado aplicado.",
        undone: "Última jogada desfeita.",
        swapped: "Lados trocados.",
        reset: "Relógio reiniciado.",
      },
    },
    timeControlsPage: {
      metaTitle: "Controlos de tempo — Chess Clock Online",
      metaDescription: "Controlos de tempo Bullet, Blitz, Rápidas e Clássicas explicados, com exemplos do padrão FIDE.",
      title: "Cada controlo de tempo, com o nome correto",
      subtitle:
        "Os controlos de tempo de xadrez seguem as convenções da FIDE, chess.com e Lichess. Seguimos essas convenções, em vez de inventar predefinições genéricas de minutos.",
      items: [
        {
          name: "Bullet",
          time: "Menos de 3 minutos por jogador",
          description: "Partidas ultrarrápidas em que o instinto conta mais do que o cálculo. Ótimo para aquecer ou ganhar pontos de rating.",
          examples: ["1 min", "1 | 1", "2 | 1"],
        },
        {
          name: "Blitz",
          time: "3–10 minutos por jogador",
          description: "O formato online mais popular. Rápido o suficiente para jogar muitas partidas, lento o suficiente para pensar de verdade.",
          examples: ["3 min", "3 | 2", "5 | 3"],
        },
        {
          name: "Rápidas",
          time: "10–60 minutos por jogador",
          description: "Tempo suficiente para uma estratégia real sem ocupar a noite toda. O padrão em clubes e torneios rápidos online.",
          examples: ["10 min", "15 | 10", "25 | 10"],
        },
        {
          name: "Clássicas",
          time: "60+ minutos, muitas vezes em várias fases",
          description:
            "Controlos de tempo padrão FIDE, incluindo controlos multifase como 90 minutos para 40 jogadas, depois 30 minutos com 30 segundos de incremento desde a primeira jogada.",
          examples: ["30 | 20", "90+30 | 30"],
        },
      ],
    },
    featuresPage: {
      metaTitle: "Funcionalidades — Chess Clock Online",
      metaDescription: "Compare o Chess Clock Online com o chessclock.org e o visualtimer.com.",
      title: "Melhor do que o relógio de xadrez online médio",
      subtitle: "Analisámos o que os relógios de xadrez gratuitos existentes fazem bem, e o que lhes falta.",
      items: [
        { title: "Fischer, Bronstein e atraso simples", body: "A concorrência só oferece incremento Fischer. Nós adicionamos atraso Bronstein e atraso simples (US), os outros dois métodos reconhecidos pela FIDE e pela USCF." },
        { title: "Controlos multifase padrão FIDE", body: "Defina um segundo controlo de tempo que entra em vigor após um número de jogadas — por exemplo, 90 minutos para 40 jogadas e depois 30 minutos com 30 segundos de incremento — seguindo o formato multifase padrão FIDE." },
        { title: "Modo frente a frente para tablet", body: "Rode o relógio de cima 180° para que dois jogadores a partilhar um tablet ou portátil leiam o seu tempo corretamente, sem comprar um relógio físico." },
        { title: "Desfaça o toque acidental", body: "Tocou no relógio cedo demais ou antes de terminar a jogada? Desfazer com um toque repõe ambos os relógios e a contagem de jogadas instantaneamente." },
        { title: "Predefinições com nome, não só minutos", body: "Bullet, Blitz, Rápidas e Clássicas são identificadas e agrupadas como na FIDE, chess.com e Lichess, não como uma lista simples de botões de minutos." },
        { title: "Feito para teclado e leitores de ecrã", body: "Controlo total por teclado (Espaço, P, R, U, F, M) e anúncios em direto de quem joga, pouco tempo restante e fim de jogo." },
      ],
      compareTitle: "Chess Clock Online face aos relógios de xadrez gratuitos comuns",
      compareHeaders: ["Funcionalidade", "Chess Clock Online", "Relógios gratuitos comuns"],
      compareRows: [
        ["Incremento Fischer", "Sim", "Sim"],
        ["Atraso Bronstein", "Sim", "Raramente"],
        ["Atraso simples (US)", "Sim", "Não"],
        ["Controlo de tempo multifase (padrão FIDE)", "Sim", "Não"],
        ["Rotação frente a frente em tablet", "Sim", "Não"],
        ["Desfazer último toque", "Sim", "Não"],
        ["Atalhos de teclado", "Completos", "Só barra de espaço"],
        ["Nomes de jogadores editáveis", "Sim", "Raramente"],
        ["Conta ou registo necessário", "Nunca", "Às vezes"],
      ],
    },
    faqPage: {
      metaTitle: "Perguntas frequentes — Chess Clock Online",
      metaDescription: "Perguntas frequentes sobre os controlos de tempo e funcionalidades do Chess Clock Online.",
      title: "Perguntas frequentes",
      items: [
        {
          q: "Qual é a diferença entre incremento Fischer, atraso Bronstein e atraso simples?",
          a: "O incremento Fischer adiciona segundos extra ao seu relógio depois de cada jogada, pelo que o seu tempo total pode aumentar. O atraso Bronstein dá-lhe um curto período de tolerância a cada jogada: se jogar dentro desse período, o seu tempo principal não é afetado. O atraso simples (US) funciona da mesma forma na prática, mas é o termo usado em torneios USCF — o relógio espera antes de começar a contar o seu tempo principal.",
        },
        {
          q: "Que controlo de tempo devo usar?",
          a: "Para partidas rápidas, use Bullet (1–2 minutos) ou Blitz (3–5 minutos). Para uma partida mais ponderada, use Rápidas (10–25 minutos). Para partidas de torneio ou de estudo sério, use Clássicas, incluindo o controlo multifase estilo FIDE 90+30.",
        },
        {
          q: "Duas pessoas podem partilhar um dispositivo?",
          a: "Sim. Ative o modo frente a frente e o relógio de cima roda 180° para que ambos os jogadores leiam o seu tempo sem rodar o dispositivo.",
        },
        {
          q: "Preciso de uma conta?",
          a: "Não. O Chess Clock Online funciona instantaneamente no seu navegador, sem registo. O seu último controlo de tempo e os nomes dos jogadores ficam guardados localmente no seu dispositivo.",
        },
        {
          q: "Funciona em telemóvel?",
          a: "Sim, o relógio é totalmente responsivo e suporta toque, teclado, ecrã inteiro e alertas de vibração em dispositivos compatíveis.",
        },
      ],
    },
    footer: {
      tagline:
        "Um relógio de xadrez gratuito, preciso e sem registo, feito para controlos Bullet, Blitz, Rápidas, Clássicas e de torneio, com modos de atraso que a concorrência não oferece.",
      timeControlsHeading: "Controlos de tempo",
      productHeading: "Produto",
      playNow: "Jogar agora",
      compare: "Comparar",
      copyright: "Chess Clock Online. Feito para jogadores, por jogadores.",
    },
  },
};

export function t(locale: string | undefined): Dictionary {
  const key = (locale ?? defaultLocale) as Locale;
  return ui[key] ?? ui[defaultLocale];
}
