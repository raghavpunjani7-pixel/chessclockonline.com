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
  meta: { title: string; description: string; keywords: string };
  nav: { home: string; play: string; timeControls: string; features: string; faq: string };
  theme: { light: string; dark: string };
  hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string };
  homeTeaser: { title: string; subtitle: string; items: FeatureItem[]; ctaMore: string };
  homeAbout: { title: string; intro: string; sections: { heading: string; body: string }[] };
  chessClockFaq: { title: string; items: FaqItem[] };
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
  aboutPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  privacyPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  termsPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  contactPage: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    intro: string;
    emailLabel: string;
    email: string;
    responseNote: string;
  };
  errorPage: {
    notFoundMetaTitle: string;
    notFoundMetaDescription: string;
    notFoundTitle: string;
    notFoundMessage: string;
    serverErrorMetaTitle: string;
    serverErrorMetaDescription: string;
    serverErrorTitle: string;
    serverErrorMessage: string;
    backHome: string;
  };
  footer: {
    tagline: string;
    timeControlsHeading: string;
    productHeading: string;
    playNow: string;
    compare: string;
    copyright: string;
    legalHeading: string;
    aboutLink: string;
    privacyLink: string;
    termsLink: string;
    contactLink: string;
  };
}

export const ui: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Chess Clock Online — Best Free Chess Timer & Clock App",
      description:
        "Free online chess clock & timer app. Bullet, Blitz, Rapid, Classical controls with Fischer/Bronstein/delay increments and FIDE rules. No sign-up.",
      keywords:
        "chess clock, chess clock online, best chess clock, online chess clock, chess clock timer, chess clock app, chess timer, speed chess timer, chess timer clock, chess timer rules, online chess timer, best chess timer",
    },
    nav: { home: "Home", play: "Play", timeControls: "Time controls", features: "Features", faq: "FAQ" },
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
    homeAbout: {
      title: "The Best Online Chess Clock for Every Game",
      intro:
        "Chess Clock Online is a free chess clock that runs in your browser — no download, no account, and no ads getting between you and your game. It's built to replace a physical chess timer for casual games, club nights, and serious tournament practice alike, while staying accurate, simple, and available on any device with a screen.",
      sections: [
        {
          heading: "What Is a Chess Clock, and Why Every Game Needs One",
          body:
            "A chess clock is a pair of linked timers that track how much thinking time each player has used, so a game can't drag on forever and neither player can stall. Traditional analog chess clocks used two mechanical dials; most players today use a digital chess clock, either a physical unit or an online chess clock like this one. Whenever you press your side, your opponent's clock starts counting down instead of yours. Run out of time before the game ends, and you lose on time, regardless of the position on the board. Because a chess clock online removes the need to buy, carry, or charge a physical device, it has become the default choice for casual play, correspondence-turned-live games, and teaching new players the rhythm of timed chess.",
        },
        {
          heading: "A Chess Timer Built for Every Format",
          body:
            "Not every game needs the same chess timer clock. This chess clock ships with named presets for Bullet, Blitz, Rapid, and Classical, matching the categories used by FIDE, chess.com, and Lichess, so you're never guessing what '3 | 2' or '15 | 10' actually means. Use it as a speed chess timer for 1-minute bullet or 3-minute blitz games where reflexes matter more than deep calculation, or switch to a slower Rapid or Classical setting when you want room to actually think. Every preset is fully editable, so if you need a custom online chess timer for a specific club format or a friendly house rule, you can dial in your own minutes and bonus time in seconds.",
        },
        {
          heading: "Chess Timer Rules, Explained",
          body:
            "Understanding chess timer rules makes a real difference once games get close on the clock. This tool supports all three bonus-time methods recognized by FIDE and USCF: Fischer increment, which adds seconds to your clock after each move so your total time can actually grow; Bronstein delay, which gives you a grace window each move that simply isn't lost if you move quickly; and US-style simple delay, which pauses the countdown for a few seconds before your main time starts ticking. You can also add a second time-control stage — for example, 90 minutes for the first 40 moves, then 30 minutes with a 30-second increment for the rest of the game — matching the multi-stage format used in FIDE-rated classical events.",
        },
        {
          heading: "A Chess Clock App You Can Use Anywhere",
          body:
            "This chess clock app works equally well on a phone propped between two players, a tablet lying flat on a table, or a laptop next to a physical board. Face-to-face mode flips the top half of the display 180 degrees, so both players can read their own remaining time right-side up without twisting the screen around after every move. It loads once and keeps running even if your connection drops mid-game, remembers your last time control and player names locally on your device, and responds instantly to taps, clicks, or keyboard shortcuts — no app-store install required.",
        },
        {
          heading: "Why It's the Best Chess Clock Online",
          body:
            "Plenty of sites offer a bare-bones online chess clock with a single Fischer increment and nothing else. This one adds Bronstein and simple delay, FIDE-standard multi-stage controls, undo for accidental taps, editable player names, and full keyboard and screen-reader support — features usually reserved for paid tournament equipment. The timing engine itself runs on the browser's animation frame loop rather than a simple interval, so the display stays smooth and the time stays accurate down to the millisecond. Combine that precision with zero cost, zero sign-up, and zero ads, and it's easy to see why players looking for the best chess timer keep coming back to this one instead of digging a physical clock out of a drawer.",
        },
      ],
    },
    chessClockFaq: {
      title: "Chess Clock FAQ",
      items: [
        {
          q: "What is a chess clock?",
          a: "A chess clock is a device with two connected timers that measures how much time each player takes to think and move. Pressing your own side stops your timer and starts your opponent's, so total game time stays limited for both players.",
        },
        {
          q: "How to use a chess clock?",
          a: "Choose a time control and start the clock. After you make your move on the board, press your own button — or tap your side on a screen — to stop your timer and start your opponent's. Keep alternating presses after every move until the game ends or a clock runs out.",
        },
        {
          q: "How does a chess clock work?",
          a: "A chess clock runs two independent timers, but only one counts down at a time. When you press your side after moving, your timer pauses and your opponent's starts counting down instead. Digital clocks add extra logic for increments or delay, but the core mechanism — one side running while the other is paused — stays the same.",
        },
        {
          q: "Why do chess players use a clock?",
          a: "A clock keeps games fair and finite by preventing either player from taking unlimited time to think. It rewards efficient calculation, ensures tournaments finish on schedule, and adds a time-pressure element that's a core part of competitive chess strategy.",
        },
        {
          q: "What is the purpose of the clock in chess?",
          a: "The clock's purpose is to allocate and enforce a fixed thinking-time budget for each player, keep the game moving toward a result, and provide an additional way to win: if your opponent uses up all their time before the game ends another way, they lose on time.",
        },
        {
          q: "What happens if a chess clock runs out?",
          a: "If your clock reaches zero before the game ends another way, you lose on time — even if you have a winning position on the board. The main exception is if your opponent has insufficient material to ever checkmate you, in which case the game is a draw instead of a loss.",
        },
      ],
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
      player1: "White",
      player2: "Black",
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
    aboutPage: {
      metaTitle: "About Us — Chess Clock Online",
      metaDescription:
        "Learn about Chess Clock Online, a free browser-based chess clock built for players who want accurate timing without ads or accounts.",
      title: "About Chess Clock Online",
      intro:
        "Chess Clock Online started as a simple idea: a chess clock shouldn't cost money, require an account, or bury the timer under ads. It's built and maintained as a focused tool for one job — keeping time fairly and accurately during a game of chess.",
      sections: [
        {
          heading: "Why We Built It",
          body: "Most free chess clocks online cut corners on features that serious players actually use — Bronstein delay, multi-stage time controls, face-to-face mode for shared devices. We built Chess Clock Online to cover the FIDE-standard timing methods properly, instead of shipping a single generic increment and calling it done.",
        },
        {
          heading: "How It's Built",
          body: "The clock runs entirely in your browser. There's no server processing your moves, no account system, and no backend storing your games — your preferences (time control, player names, sound) are saved locally on your own device using your browser's storage, and never leave it.",
        },
        {
          heading: "Who It's For",
          body: "Casual players timing a game at the kitchen table, club organizers running an evening of rapid games, coaches teaching students the rhythm of a timed game, and anyone who wants a reliable backup for when a physical chess clock isn't handy.",
        },
        {
          heading: "Get in Touch",
          body: "Questions, bug reports, or feature requests are always welcome — see our Contact page for how to reach us.",
        },
      ],
    },
    privacyPage: {
      metaTitle: "Privacy Policy — Chess Clock Online",
      metaDescription:
        "Chess Clock Online's privacy policy: what data we collect (almost none), how localStorage is used, and how to contact us.",
      title: "Privacy Policy",
      updated: "Last updated: August 13, 2026",
      intro:
        "Chess Clock Online is designed to work entirely in your browser. This policy explains what little data is involved and how it's handled.",
      sections: [
        {
          heading: "Information We Collect",
          body: "Chess Clock Online does not require an account, does not ask for personal information, and does not track your gameplay. We do not use analytics scripts, advertising cookies, or third-party tracking pixels on this site.",
        },
        {
          heading: "Local Storage",
          body: "To remember your chosen time control, player names, sound setting and theme between visits, the site saves a small amount of data in your browser's localStorage, under the keys chessclockonline:prefs and chessclockonline:theme. This data stays on your device — it is never transmitted to us or to any third party, and you can clear it at any time by clearing your browser's site data.",
        },
        {
          heading: "Hosting & Server Logs",
          body: "Like any website, our hosting provider may automatically log standard technical information (such as IP address, browser type, and request timestamps) for security and operational purposes. We do not access this data for tracking or marketing, and it is not linked to any personal profile.",
        },
        {
          heading: "Children's Privacy",
          body: "Chess Clock Online does not knowingly collect any information from anyone, including children, because it does not collect personal information at all.",
        },
        {
          heading: "Changes to This Policy",
          body: 'If this policy changes, the updated version will be posted on this page with a new "last updated" date.',
        },
        {
          heading: "Contact Us",
          body: "Questions about this policy can be sent to chessclockonline@gmail.com.",
        },
      ],
    },
    termsPage: {
      metaTitle: "Terms & Conditions — Chess Clock Online",
      metaDescription: "The terms and conditions for using Chess Clock Online, a free browser-based chess clock.",
      title: "Terms & Conditions",
      updated: "Last updated: August 13, 2026",
      intro: "These terms govern your use of Chess Clock Online. By using the site, you agree to them.",
      sections: [
        {
          heading: "Use of the Service",
          body: "Chess Clock Online is provided free of charge for personal, educational, and casual or competitive club use. You may not use the site in any way that disrupts its operation or attempts to gain unauthorized access to its underlying code or infrastructure.",
        },
        {
          heading: "No Account, No Guarantees on Local Data",
          body: "Because the site does not use accounts and stores your preferences only in your browser's local storage, clearing your browser data, switching devices, or using a different browser will remove your saved time controls and player names. We are not responsible for any loss of locally stored preferences.",
        },
        {
          heading: "Intellectual Property",
          body: "The design, code, and content of Chess Clock Online are the property of its creators unless otherwise noted. You may not copy, redistribute, or resell the site or its source as your own product.",
        },
        {
          heading: "No Warranty",
          body: 'Chess Clock Online is provided "as is", without warranty of any kind. While we aim for accurate, millisecond-precise timing, we do not guarantee the service will be uninterrupted, error-free, or suitable for official tournament use where certified equipment is required by the organizer.',
        },
        {
          heading: "Limitation of Liability",
          body: "To the fullest extent permitted by law, we are not liable for any damages or losses — including a lost game, tournament, or match — arising from the use or inability to use Chess Clock Online.",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.",
        },
        {
          heading: "Contact Us",
          body: "Questions about these terms can be sent to chessclockonline@gmail.com.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Contact Us — Chess Clock Online",
      metaDescription: "Get in touch with the Chess Clock Online team for bug reports, feature requests, or questions.",
      title: "Contact Us",
      intro: "Found a bug, have a feature idea, or just want to say hello? We'd like to hear from you.",
      emailLabel: "Email us at",
      email: "chessclockonline@gmail.com",
      responseNote: "We read every message and try to reply as soon as we can.",
    },
    errorPage: {
      notFoundMetaTitle: "404 — Page Not Found — Chess Clock Online",
      notFoundMetaDescription: "The page you're looking for doesn't exist or may have moved.",
      notFoundTitle: "Page not found",
      notFoundMessage: "The page you're looking for doesn't exist or may have moved. Check the URL, or head back to the homepage.",
      serverErrorMetaTitle: "500 — Server Error — Chess Clock Online",
      serverErrorMetaDescription: "An unexpected error occurred.",
      serverErrorTitle: "Something went wrong",
      serverErrorMessage: "An unexpected error occurred. Try refreshing the page, or head back to the homepage.",
      backHome: "Back to home",
    },
    footer: {
      tagline:
        "A free, precise, no-login chess clock built for bullet, blitz, rapid, classical and tournament-standard time controls — with delay modes competitors don't offer.",
      timeControlsHeading: "Time controls",
      productHeading: "Product",
      playNow: "Play now",
      compare: "Compare",
      copyright: "Chess Clock Online. Built for players, by players.",
      legalHeading: "Legal",
      aboutLink: "About Us",
      privacyLink: "Privacy Policy",
      termsLink: "Terms & Conditions",
      contactLink: "Contact Us",
    },
  },

  es: {
    meta: {
      title: "Chess Clock Online — Reloj de ajedrez gratis",
      description:
        "Un reloj de ajedrez online gratuito con controles de tiempo Bullet, Blitz, Rápidas y Clásicas. Incrementos Fischer, Bronstein y retardo simple, controles multifase estándar FIDE, modo cara a cara y atajos de teclado.",
      keywords:
        "reloj de ajedrez, reloj de ajedrez online, mejor reloj de ajedrez, cronómetro de ajedrez, temporizador de ajedrez, reloj de ajedrez digital, app de reloj de ajedrez, reglas del reloj de ajedrez",
    },
    nav: { home: "Inicio", play: "Jugar", timeControls: "Controles de tiempo", features: "Funciones", faq: "Preguntas" },
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
    homeAbout: {
      title: "El Mejor Reloj de Ajedrez Online para Cada Partida",
      intro:
        "Chess Clock Online es un reloj de ajedrez gratuito que funciona en tu navegador, sin descargas, sin cuenta y sin anuncios. Sustituye a un temporizador de ajedrez físico para partidas casuales, noches de club o práctica de torneo, manteniéndose preciso, sencillo y disponible en cualquier dispositivo con pantalla.",
      sections: [
        {
          heading: "Qué es un reloj de ajedrez y por qué lo necesitas",
          body: "Un reloj de ajedrez es un par de temporizadores enlazados que controlan cuánto tiempo de reflexión ha usado cada jugador, para que la partida no se alargue indefinidamente. Los relojes analógicos tradicionales usaban dos esferas mecánicas; hoy la mayoría usa un reloj de ajedrez digital, ya sea físico o un reloj de ajedrez online como este. Al pulsar tu lado, el reloj de tu rival empieza a contar en tu lugar. Si se te acaba el tiempo, pierdes la partida por tiempo, sin importar la posición en el tablero. Un reloj de ajedrez online elimina la necesidad de comprar o cargar un dispositivo físico.",
        },
        {
          heading: "Un temporizador de ajedrez para cada formato",
          body: "Este reloj de ajedrez incluye ajustes predefinidos para Bullet, Blitz, Rápidas y Clásicas, siguiendo las categorías usadas por FIDE, chess.com y Lichess. Úsalo como temporizador de partidas rápidas para bullet de 1 minuto o blitz de 3 minutos, o cambia a Rápidas o Clásicas cuando quieras más tiempo para pensar. Cada ajuste es totalmente editable para crear tu propio temporizador de ajedrez online personalizado.",
        },
        {
          heading: "Reglas del reloj de ajedrez explicadas",
          body: "Este reloj admite los tres métodos de tiempo adicional reconocidos por FIDE y USCF: incremento Fischer, que añade segundos tras cada jugada; retardo Bronstein, que da un margen de gracia que no se pierde si mueves rápido; y el retardo simple estilo estadounidense. También puedes añadir una segunda fase de tiempo, como 90 minutos para las primeras 40 jugadas y luego 30 minutos con 30 segundos de incremento, igual que en los torneos clásicos de FIDE.",
        },
        {
          heading: "Una app de reloj de ajedrez para cualquier lugar",
          body: "Funciona igual de bien en un móvil, una tablet apoyada en la mesa o un portátil junto a un tablero físico. El modo cara a cara gira la mitad superior de la pantalla 180 grados para que ambos jugadores lean su propio tiempo correctamente. Recuerda tu último control de tiempo y nombres de jugador localmente, sin necesidad de instalar nada.",
        },
        {
          heading: "Por qué es el mejor reloj de ajedrez online",
          body: "Muchos sitios ofrecen solo un incremento Fischer básico. Este añade retardo Bronstein y simple, controles multifase estándar FIDE, deshacer, nombres de jugador editables y compatibilidad total con teclado y lectores de pantalla. El motor de temporización funciona con precisión de milisegundos, así que si buscas el mejor temporizador de ajedrez gratuito, este reloj de ajedrez es la opción.",
        },
      ],
    },
    chessClockFaq: {
      title: "Preguntas frecuentes sobre el reloj de ajedrez",
      items: [
        {
          q: "¿Qué es un reloj de ajedrez?",
          a: "Un reloj de ajedrez es un dispositivo con dos temporizadores conectados que mide cuánto tiempo tarda cada jugador en pensar y mover. Al pulsar tu lado se detiene tu temporizador y se activa el de tu rival, así que el tiempo total de la partida queda limitado para ambos.",
        },
        {
          q: "¿Cómo usar un reloj de ajedrez?",
          a: "Elige un control de tiempo e inicia el reloj. Después de mover en el tablero, pulsa tu propio botón (o toca tu lado en una pantalla) para detener tu temporizador y activar el de tu rival. Sigue alternando pulsaciones tras cada jugada hasta que termine la partida o se agote un reloj.",
        },
        {
          q: "¿Cómo funciona un reloj de ajedrez?",
          a: "Un reloj de ajedrez controla dos temporizadores independientes, pero solo uno cuenta a la vez. Al pulsar tu lado tras mover, tu temporizador se pausa y el de tu rival empieza a contar. Los relojes digitales añaden lógica extra para incrementos o retardo, pero el mecanismo base —un lado corriendo mientras el otro está en pausa— se mantiene igual.",
        },
        {
          q: "¿Por qué los jugadores de ajedrez usan un reloj?",
          a: "Un reloj mantiene las partidas justas y limitadas al impedir que un jugador piense un tiempo ilimitado. Premia el cálculo eficiente, asegura que los torneos terminen a tiempo y añade un elemento de presión temporal que forma parte de la estrategia del ajedrez competitivo.",
        },
        {
          q: "¿Cuál es el propósito del reloj en el ajedrez?",
          a: "El propósito del reloj es asignar y hacer cumplir un tiempo de reflexión limitado para cada jugador, mantener la partida avanzando hacia un resultado, y ofrecer otra forma de ganar: si tu rival agota su tiempo antes de que la partida termine de otra manera, pierde por tiempo.",
        },
        {
          q: "¿Qué ocurre si se agota el reloj de ajedrez?",
          a: "Si tu reloj llega a cero antes de que la partida termine de otra forma, pierdes por tiempo, incluso si tienes una posición ganadora en el tablero. La excepción principal es si tu rival no tiene material suficiente para darte jaque mate nunca, en cuyo caso la partida es tablas en lugar de una derrota.",
        },
      ],
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
      player1: "Blancas",
      player2: "Negras",
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
    aboutPage: {
      metaTitle: "Sobre nosotros — Chess Clock Online",
      metaDescription:
        "Conoce Chess Clock Online, un reloj de ajedrez gratuito en el navegador, creado para jugadores que quieren un cronometraje preciso sin anuncios ni cuentas.",
      title: "Sobre Chess Clock Online",
      intro:
        "Chess Clock Online nació de una idea sencilla: un reloj de ajedrez no debería costar dinero, exigir una cuenta ni esconder el temporizador detrás de anuncios. Es una herramienta enfocada en una sola tarea: controlar el tiempo de forma justa y precisa durante una partida de ajedrez.",
      sections: [
        {
          heading: "Por qué lo creamos",
          body: "La mayoría de los relojes de ajedrez gratuitos recortan funciones que los jugadores serios realmente usan: retardo Bronstein, controles de tiempo multifase, modo cara a cara para dispositivos compartidos. Creamos Chess Clock Online para cubrir correctamente los métodos de cronometraje estándar FIDE, en lugar de ofrecer un único incremento genérico y darlo por terminado.",
        },
        {
          heading: "Cómo está hecho",
          body: "El reloj funciona por completo en tu navegador. No hay ningún servidor procesando tus jugadas, ni sistema de cuentas, ni backend que guarde tus partidas: tus preferencias (control de tiempo, nombres de jugador, sonido) se guardan localmente en tu propio dispositivo usando el almacenamiento del navegador, y nunca salen de él.",
        },
        {
          heading: "Para quién es",
          body: "Jugadores casuales que cronometran una partida en la mesa de casa, organizadores de club que gestionan una noche de partidas rápidas, entrenadores que enseñan a sus alumnos el ritmo de una partida con reloj, y cualquiera que quiera un respaldo fiable cuando no tenga a mano un reloj de ajedrez físico.",
        },
        {
          heading: "Contacta con nosotros",
          body: "Las preguntas, informes de errores o sugerencias de funciones siempre son bienvenidas: consulta nuestra página de contacto para saber cómo escribirnos.",
        },
      ],
    },
    privacyPage: {
      metaTitle: "Política de privacidad — Chess Clock Online",
      metaDescription:
        "Política de privacidad de Chess Clock Online: qué datos recopilamos (casi ninguno), cómo se usa el almacenamiento local y cómo contactarnos.",
      title: "Política de privacidad",
      updated: "Última actualización: 13 de agosto de 2026",
      intro:
        "Chess Clock Online está diseñado para funcionar por completo en tu navegador. Esta política explica la escasa información involucrada y cómo se trata.",
      sections: [
        {
          heading: "Información que recopilamos",
          body: "Chess Clock Online no requiere una cuenta, no pide información personal y no rastrea tu forma de jugar. No usamos scripts de análisis, cookies publicitarias ni píxeles de seguimiento de terceros en este sitio.",
        },
        {
          heading: "Almacenamiento local",
          body: "Para recordar tu control de tiempo elegido, los nombres de los jugadores, el ajuste de sonido y el tema entre visitas, el sitio guarda una pequeña cantidad de datos en el localStorage de tu navegador, bajo las claves chessclockonline:prefs y chessclockonline:theme. Estos datos permanecen en tu dispositivo: nunca se nos transmiten ni a terceros, y puedes borrarlos en cualquier momento eliminando los datos del sitio en tu navegador.",
        },
        {
          heading: "Alojamiento y registros del servidor",
          body: "Como cualquier sitio web, nuestro proveedor de alojamiento puede registrar automáticamente información técnica estándar (como la dirección IP, el tipo de navegador y la marca de tiempo de las solicitudes) con fines de seguridad y operativos. No usamos estos datos para rastreo ni marketing, y no están vinculados a ningún perfil personal.",
        },
        {
          heading: "Privacidad de los menores",
          body: "Chess Clock Online no recopila conscientemente información de nadie, incluidos los menores, porque no recopila información personal en absoluto.",
        },
        {
          heading: "Cambios en esta política",
          body: 'Si esta política cambia, la versión actualizada se publicará en esta página con una nueva fecha de "última actualización".',
        },
        {
          heading: "Contacto",
          body: "Las preguntas sobre esta política pueden enviarse a chessclockonline@gmail.com.",
        },
      ],
    },
    termsPage: {
      metaTitle: "Términos y condiciones — Chess Clock Online",
      metaDescription: "Los términos y condiciones de uso de Chess Clock Online, un reloj de ajedrez gratuito en el navegador.",
      title: "Términos y condiciones",
      updated: "Última actualización: 13 de agosto de 2026",
      intro: "Estos términos rigen el uso de Chess Clock Online. Al usar el sitio, los aceptas.",
      sections: [
        {
          heading: "Uso del servicio",
          body: "Chess Clock Online se ofrece de forma gratuita para uso personal, educativo y de club, casual o competitivo. No debes usar el sitio de ninguna forma que interrumpa su funcionamiento o intente acceder sin autorización a su código o infraestructura.",
        },
        {
          heading: "Sin cuenta, sin garantías sobre los datos locales",
          body: "Como el sitio no usa cuentas y guarda tus preferencias solo en el almacenamiento local de tu navegador, borrar los datos del navegador, cambiar de dispositivo o usar un navegador distinto eliminará tus controles de tiempo y nombres de jugador guardados. No nos hacemos responsables de la pérdida de preferencias almacenadas localmente.",
        },
        {
          heading: "Propiedad intelectual",
          body: "El diseño, el código y el contenido de Chess Clock Online son propiedad de sus creadores, salvo que se indique lo contrario. No puedes copiar, redistribuir ni revender el sitio o su código fuente como producto propio.",
        },
        {
          heading: "Sin garantía",
          body: 'Chess Clock Online se ofrece "tal cual", sin garantía de ningún tipo. Aunque buscamos un cronometraje preciso al milisegundo, no garantizamos que el servicio esté libre de interrupciones o errores, ni que sea adecuado para torneos oficiales donde el organizador exija equipos certificados.',
        },
        {
          heading: "Limitación de responsabilidad",
          body: "En la medida en que lo permita la ley, no nos hacemos responsables de ningún daño o pérdida —incluida una partida, torneo o encuentro perdido— derivado del uso o la imposibilidad de usar Chess Clock Online.",
        },
        {
          heading: "Cambios en estos términos",
          body: "Podemos actualizar estos términos ocasionalmente. El uso continuado del sitio tras la publicación de los cambios supone la aceptación de los términos actualizados.",
        },
        {
          heading: "Contacto",
          body: "Las preguntas sobre estos términos pueden enviarse a chessclockonline@gmail.com.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Contacto — Chess Clock Online",
      metaDescription: "Ponte en contacto con el equipo de Chess Clock Online para informes de errores, sugerencias de funciones o preguntas.",
      title: "Contacto",
      intro: "¿Encontraste un error, tienes una idea para una función o simplemente quieres saludar? Nos encantaría saber de ti.",
      emailLabel: "Escríbenos a",
      email: "chessclockonline@gmail.com",
      responseNote: "Leemos todos los mensajes e intentamos responder lo antes posible.",
    },
    errorPage: {
      notFoundMetaTitle: "404 — Página no encontrada — Chess Clock Online",
      notFoundMetaDescription: "La página que buscas no existe o puede haberse movido.",
      notFoundTitle: "Página no encontrada",
      notFoundMessage: "La página que buscas no existe o puede haberse movido. Revisa la URL o vuelve a la página principal.",
      serverErrorMetaTitle: "500 — Error del servidor — Chess Clock Online",
      serverErrorMetaDescription: "Se produjo un error inesperado.",
      serverErrorTitle: "Algo salió mal",
      serverErrorMessage: "Se produjo un error inesperado. Intenta recargar la página o vuelve a la página principal.",
      backHome: "Volver al inicio",
    },
    footer: {
      tagline:
        "Un reloj de ajedrez gratuito, preciso y sin registro, pensado para controles Bullet, Blitz, Rápidas, Clásicas y de torneo, con modos de retardo que la competencia no ofrece.",
      timeControlsHeading: "Controles de tiempo",
      productHeading: "Producto",
      playNow: "Jugar ahora",
      compare: "Comparar",
      copyright: "Chess Clock Online. Hecho para jugadores, por jugadores.",
      legalHeading: "Legal",
      aboutLink: "Sobre nosotros",
      privacyLink: "Política de privacidad",
      termsLink: "Términos y condiciones",
      contactLink: "Contacto",
    },
  },

  fr: {
    meta: {
      title: "Chess Clock Online — Pendule d'échecs gratuite en ligne",
      description:
        "Une pendule d'échecs en ligne gratuite avec cadences Bullet, Blitz, Rapide et Classique. Incréments Fischer, Bronstein et retard simple, cadences multiphases aux normes FIDE, mode face-à-face et raccourcis clavier.",
      keywords:
        "pendule d'échecs, pendule d'échecs en ligne, meilleure pendule d'échecs, minuterie d'échecs, chronomètre d'échecs, pendule d'échecs numérique, application pendule d'échecs, règles de la pendule d'échecs",
    },
    nav: { home: "Accueil", play: "Jouer", timeControls: "Cadences", features: "Fonctionnalités", faq: "FAQ" },
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
    homeAbout: {
      title: "La Meilleure Pendule d'Échecs en Ligne pour Chaque Partie",
      intro:
        "Chess Clock Online est une pendule d'échecs gratuite qui fonctionne dans votre navigateur, sans téléchargement, sans compte et sans publicité. Elle remplace une pendule d'échecs physique pour les parties amicales, les soirées de club ou l'entraînement en tournoi, tout en restant précise, simple et disponible sur n'importe quel écran.",
      sections: [
        {
          heading: "Qu'est-ce qu'une pendule d'échecs et pourquoi en avoir une",
          body: "Une pendule d'échecs est une paire de minuteries liées qui suivent le temps de réflexion utilisé par chaque joueur, pour qu'une partie ne s'éternise pas. Les pendules analogiques traditionnelles utilisaient deux cadrans mécaniques ; aujourd'hui, la plupart des joueurs utilisent une pendule d'échecs numérique, physique ou en ligne comme celle-ci. Quand vous appuyez sur votre côté, la pendule de votre adversaire se met à décompter. Si votre temps s'écoule avant la fin de la partie, vous perdez au temps, quelle que soit la position sur l'échiquier.",
        },
        {
          heading: "Une minuterie d'échecs pour chaque format",
          body: "Cette pendule d'échecs propose des réglages nommés pour Bullet, Blitz, Rapide et Classique, selon les catégories utilisées par la FIDE, chess.com et Lichess. Utilisez-la comme minuterie rapide pour du bullet en 1 minute ou du blitz en 3 minutes, ou passez en Rapide ou Classique pour plus de réflexion. Chaque préréglage est entièrement modifiable pour créer votre propre minuterie d'échecs en ligne personnalisée.",
        },
        {
          heading: "Règles de la pendule d'échecs expliquées",
          body: "Cet outil prend en charge les trois méthodes de temps bonus reconnues par la FIDE et l'USCF : l'incrément Fischer, qui ajoute des secondes après chaque coup ; le retard Bronstein, qui offre une marge non perdue si vous jouez rapidement ; et le retard simple à l'américaine. Vous pouvez aussi ajouter une seconde cadence, par exemple 90 minutes pour les 40 premiers coups puis 30 minutes avec 30 secondes d'incrément, comme dans les tournois classiques de la FIDE.",
        },
        {
          heading: "Une application de pendule d'échecs utilisable partout",
          body: "Elle fonctionne aussi bien sur un téléphone posé entre deux joueurs, une tablette à plat sur une table, ou un ordinateur portable à côté d'un échiquier physique. Le mode face-à-face fait pivoter la moitié supérieure de l'écran à 180 degrés pour que chaque joueur lise son temps à l'endroit. Elle mémorise votre dernière cadence et les noms des joueurs localement, sans installation nécessaire.",
        },
        {
          heading: "Pourquoi c'est la meilleure pendule d'échecs en ligne",
          body: "Beaucoup de sites ne proposent qu'un simple incrément Fischer. Celle-ci ajoute le retard Bronstein et simple, des cadences multiphases aux normes FIDE, l'annulation, des noms de joueurs modifiables et une compatibilité complète clavier et lecteur d'écran. Le moteur de chronométrage reste précis à la milliseconde près, ce qui en fait la meilleure minuterie d'échecs gratuite disponible en ligne.",
        },
      ],
    },
    chessClockFaq: {
      title: "FAQ sur la pendule d'échecs",
      items: [
        {
          q: "Qu'est-ce qu'une pendule d'échecs ?",
          a: "Une pendule d'échecs est un appareil doté de deux minuteries reliées qui mesure le temps de réflexion utilisé par chaque joueur. Appuyer sur votre côté arrête votre minuterie et démarre celle de votre adversaire, ce qui limite le temps total de la partie pour les deux joueurs.",
        },
        {
          q: "Comment utiliser une pendule d'échecs ?",
          a: "Choisissez une cadence puis démarrez la pendule. Après avoir joué votre coup sur l'échiquier, appuyez sur votre propre bouton — ou touchez votre côté sur un écran — pour arrêter votre minuterie et démarrer celle de votre adversaire. Continuez à alterner après chaque coup jusqu'à la fin de la partie ou l'épuisement d'une pendule.",
        },
        {
          q: "Comment fonctionne une pendule d'échecs ?",
          a: "Une pendule d'échecs gère deux minuteries indépendantes, mais une seule décompte à la fois. Quand vous appuyez sur votre côté après avoir joué, votre minuterie se met en pause et celle de votre adversaire démarre. Les pendules numériques ajoutent une logique pour les incréments ou le retard, mais le mécanisme de base — un côté qui tourne pendant que l'autre est en pause — reste identique.",
        },
        {
          q: "Pourquoi les joueurs d'échecs utilisent-ils une pendule ?",
          a: "Une pendule garde les parties équitables et limitées en empêchant un joueur de réfléchir indéfiniment. Elle récompense le calcul efficace, garantit que les tournois se terminent à l'heure, et ajoute un élément de pression temporelle qui fait partie intégrante de la stratégie aux échecs de compétition.",
        },
        {
          q: "Quel est le rôle de la pendule aux échecs ?",
          a: "Le rôle de la pendule est d'allouer et de faire respecter un temps de réflexion limité pour chaque joueur, de faire avancer la partie vers un résultat, et d'offrir un autre moyen de gagner : si votre adversaire épuise son temps avant la fin de la partie autrement, il perd au temps.",
        },
        {
          q: "Que se passe-t-il si une pendule d'échecs s'arrête à zéro ?",
          a: "Si votre pendule atteint zéro avant que la partie ne se termine autrement, vous perdez au temps, même avec une position gagnante sur l'échiquier. La principale exception est si votre adversaire n'a pas assez de matériel pour vous mater, auquel cas la partie est nulle plutôt que perdue.",
        },
      ],
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
      player1: "Blancs",
      player2: "Noirs",
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
    aboutPage: {
      metaTitle: "À propos — Chess Clock Online",
      metaDescription:
        "Découvrez Chess Clock Online, une pendule d'échecs gratuite dans le navigateur, conçue pour les joueurs qui veulent un chronométrage précis sans publicité ni compte.",
      title: "À propos de Chess Clock Online",
      intro:
        "Chess Clock Online est né d'une idée simple : une pendule d'échecs ne devrait pas coûter d'argent, exiger un compte, ni cacher le minuteur derrière des publicités. C'est un outil concentré sur une seule tâche : chronométrer une partie d'échecs de façon juste et précise.",
      sections: [
        {
          heading: "Pourquoi nous l'avons créée",
          body: "La plupart des pendules d'échecs gratuites en ligne sacrifient des fonctionnalités que les joueurs sérieux utilisent réellement : retard Bronstein, cadences multiphases, mode face-à-face pour les appareils partagés. Nous avons créé Chess Clock Online pour couvrir correctement les méthodes de chronométrage aux normes FIDE, plutôt que de proposer un simple incrément générique.",
        },
        {
          heading: "Comment elle est construite",
          body: "La pendule fonctionne entièrement dans votre navigateur. Aucun serveur ne traite vos coups, aucun système de compte, aucun backend ne stocke vos parties : vos préférences (cadence, noms des joueurs, son) sont enregistrées localement sur votre appareil via le stockage de votre navigateur, et n'en sortent jamais.",
        },
        {
          heading: "À qui elle s'adresse",
          body: "Les joueurs occasionnels qui chronométrent une partie à la table de la cuisine, les organisateurs de club qui gèrent une soirée de parties rapides, les entraîneurs qui enseignent le rythme d'une partie chronométrée, et toute personne souhaitant une solution de secours fiable quand une pendule physique n'est pas disponible.",
        },
        {
          heading: "Nous contacter",
          body: "Questions, signalements de bugs ou suggestions de fonctionnalités sont toujours les bienvenus — consultez notre page de contact pour savoir comment nous joindre.",
        },
      ],
    },
    privacyPage: {
      metaTitle: "Politique de confidentialité — Chess Clock Online",
      metaDescription:
        "Politique de confidentialité de Chess Clock Online : quelles données nous collectons (presque aucune), comment le stockage local est utilisé, et comment nous contacter.",
      title: "Politique de confidentialité",
      updated: "Dernière mise à jour : 13 août 2026",
      intro:
        "Chess Clock Online est conçu pour fonctionner entièrement dans votre navigateur. Cette politique explique le peu de données concernées et la manière dont elles sont traitées.",
      sections: [
        {
          heading: "Informations que nous collectons",
          body: "Chess Clock Online ne nécessite pas de compte, ne demande aucune information personnelle et ne suit pas votre façon de jouer. Nous n'utilisons ni scripts d'analyse, ni cookies publicitaires, ni pixels de suivi tiers sur ce site.",
        },
        {
          heading: "Stockage local",
          body: "Pour mémoriser votre cadence choisie, les noms des joueurs, le réglage du son et le thème entre les visites, le site enregistre une petite quantité de données dans le localStorage de votre navigateur, sous les clés chessclockonline:prefs et chessclockonline:theme. Ces données restent sur votre appareil — elles ne nous sont jamais transmises ni à des tiers, et vous pouvez les effacer à tout moment en supprimant les données du site dans votre navigateur.",
        },
        {
          heading: "Hébergement et journaux du serveur",
          body: "Comme tout site web, notre hébergeur peut enregistrer automatiquement des informations techniques standard (comme l'adresse IP, le type de navigateur et l'horodatage des requêtes) à des fins de sécurité et opérationnelles. Nous n'utilisons pas ces données à des fins de suivi ou de marketing, et elles ne sont liées à aucun profil personnel.",
        },
        {
          heading: "Confidentialité des mineurs",
          body: "Chess Clock Online ne collecte sciemment aucune information de qui que ce soit, y compris des mineurs, car le site ne collecte aucune information personnelle.",
        },
        {
          heading: "Modifications de cette politique",
          body: "Si cette politique change, la version mise à jour sera publiée sur cette page avec une nouvelle date de « dernière mise à jour ».",
        },
        {
          heading: "Contact",
          body: "Les questions concernant cette politique peuvent être envoyées à chessclockonline@gmail.com.",
        },
      ],
    },
    termsPage: {
      metaTitle: "Conditions générales — Chess Clock Online",
      metaDescription: "Les conditions générales d'utilisation de Chess Clock Online, une pendule d'échecs gratuite dans le navigateur.",
      title: "Conditions générales",
      updated: "Dernière mise à jour : 13 août 2026",
      intro: "Ces conditions régissent votre utilisation de Chess Clock Online. En utilisant le site, vous les acceptez.",
      sections: [
        {
          heading: "Utilisation du service",
          body: "Chess Clock Online est proposé gratuitement pour un usage personnel, éducatif, ou pour des clubs, à des fins occasionnelles ou compétitives. Vous ne devez pas utiliser le site d'une manière qui perturbe son fonctionnement ou qui tente d'accéder sans autorisation à son code ou à son infrastructure.",
        },
        {
          heading: "Pas de compte, pas de garantie sur les données locales",
          body: "Le site n'utilisant pas de comptes et enregistrant vos préférences uniquement dans le stockage local de votre navigateur, effacer les données de votre navigateur, changer d'appareil ou utiliser un autre navigateur supprimera vos cadences et noms de joueurs enregistrés. Nous ne sommes pas responsables de la perte de préférences stockées localement.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "Le design, le code et le contenu de Chess Clock Online appartiennent à leurs créateurs, sauf mention contraire. Vous ne pouvez pas copier, redistribuer ou revendre le site ou son code source comme votre propre produit.",
        },
        {
          heading: "Aucune garantie",
          body: "Chess Clock Online est fourni « tel quel », sans garantie d'aucune sorte. Bien que nous visions un chronométrage précis à la milliseconde, nous ne garantissons pas que le service sera ininterrompu, exempt d'erreurs, ou adapté à un usage en tournoi officiel où l'organisateur exige un équipement homologué.",
        },
        {
          heading: "Limitation de responsabilité",
          body: "Dans toute la mesure permise par la loi, nous ne sommes pas responsables des dommages ou pertes — y compris une partie, un tournoi ou un match perdu — résultant de l'utilisation ou de l'impossibilité d'utiliser Chess Clock Online.",
        },
        {
          heading: "Modifications de ces conditions",
          body: "Nous pouvons mettre à jour ces conditions de temps à autre. La poursuite de l'utilisation du site après la publication des modifications vaut acceptation des conditions mises à jour.",
        },
        {
          heading: "Contact",
          body: "Les questions concernant ces conditions peuvent être envoyées à chessclockonline@gmail.com.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Contact — Chess Clock Online",
      metaDescription: "Contactez l'équipe de Chess Clock Online pour signaler un bug, suggérer une fonctionnalité ou poser une question.",
      title: "Contact",
      intro: "Vous avez trouvé un bug, une idée de fonctionnalité, ou vous voulez simplement nous saluer ? Nous serions ravis de vous lire.",
      emailLabel: "Écrivez-nous à",
      email: "chessclockonline@gmail.com",
      responseNote: "Nous lisons chaque message et essayons de répondre le plus vite possible.",
    },
    errorPage: {
      notFoundMetaTitle: "404 — Page introuvable — Chess Clock Online",
      notFoundMetaDescription: "La page que vous recherchez n'existe pas ou a peut-être été déplacée.",
      notFoundTitle: "Page introuvable",
      notFoundMessage: "La page que vous recherchez n'existe pas ou a peut-être été déplacée. Vérifiez l'URL ou retournez à la page d'accueil.",
      serverErrorMetaTitle: "500 — Erreur serveur — Chess Clock Online",
      serverErrorMetaDescription: "Une erreur inattendue s'est produite.",
      serverErrorTitle: "Une erreur s'est produite",
      serverErrorMessage: "Une erreur inattendue s'est produite. Essayez de rafraîchir la page ou retournez à la page d'accueil.",
      backHome: "Retour à l'accueil",
    },
    footer: {
      tagline:
        "Une pendule d'échecs gratuite, précise et sans inscription, conçue pour les cadences Bullet, Blitz, Rapide, Classique et de tournoi, avec des modes de retard que la concurrence n'offre pas.",
      timeControlsHeading: "Cadences",
      productHeading: "Produit",
      playNow: "Jouer maintenant",
      compare: "Comparer",
      copyright: "Chess Clock Online. Conçu pour les joueurs, par des joueurs.",
      legalHeading: "Mentions légales",
      aboutLink: "À propos",
      privacyLink: "Politique de confidentialité",
      termsLink: "Conditions générales",
      contactLink: "Contact",
    },
  },

  de: {
    meta: {
      title: "Chess Clock Online — Kostenlose Schachuhr online",
      description:
        "Eine kostenlose Online-Schachuhr mit Bullet-, Blitz-, Schnell- und klassischen Bedenkzeiten. Fischer-, Bronstein- und einfacher Verzögerungszuschlag, FIDE-Standard-Mehrphasenbedenkzeiten, Face-to-Face-Tablet-Modus und Tastenkürzel.",
      keywords:
        "Schachuhr, Schachuhr online, beste Schachuhr, Schach-Timer, Schachzeitmesser, digitale Schachuhr, Schachuhr App, Schachuhr Regeln",
    },
    nav: { home: "Start", play: "Spielen", timeControls: "Bedenkzeiten", features: "Funktionen", faq: "FAQ" },
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
    homeAbout: {
      title: "Die Beste Online-Schachuhr für Jede Partie",
      intro:
        "Chess Clock Online ist eine kostenlose Schachuhr, die direkt im Browser läuft — ohne Download, ohne Konto und ohne Werbung. Sie ersetzt eine physische Schachuhr für lockere Partien, Vereinsabende oder Turniertraining und bleibt dabei präzise, einfach und auf jedem Bildschirm verfügbar.",
      sections: [
        {
          heading: "Was ist eine Schachuhr und wozu braucht man sie",
          body: "Eine Schachuhr besteht aus zwei verbundenen Timern, die die Bedenkzeit jedes Spielers messen, damit eine Partie nicht endlos dauert. Klassische analoge Schachuhren hatten zwei mechanische Zifferblätter; heute nutzen die meisten Spieler eine digitale Schachuhr, entweder als Gerät oder als Schachuhr online wie diese. Drückt man die eigene Seite, beginnt die Uhr des Gegners herunterzuzählen. Läuft die Zeit ab, bevor die Partie endet, verliert man auf Zeit — unabhängig von der Stellung auf dem Brett.",
        },
        {
          heading: "Ein Schach-Timer für jedes Format",
          body: "Diese Schachuhr bietet benannte Voreinstellungen für Bullet, Blitz, Schnell und Klassisch, passend zu den Kategorien von FIDE, chess.com und Lichess. Nutzen Sie sie als schnellen Schach-Timer für 1-Minuten-Bullet oder 3-Minuten-Blitz, oder wechseln Sie zu Schnell oder Klassisch für mehr Bedenkzeit. Jede Voreinstellung lässt sich vollständig anpassen, um eine eigene Online-Schachuhr-Konfiguration zu erstellen.",
        },
        {
          heading: "Schachuhr-Regeln erklärt",
          body: "Dieses Tool unterstützt alle drei von FIDE und USCF anerkannten Bonuszeit-Methoden: den Fischer-Zuschlag, der nach jedem Zug Sekunden hinzufügt; die Bronstein-Verzögerung, die eine Karenzzeit gewährt, die bei schnellem Zug nicht verloren geht; und die einfache US-Verzögerung. Zusätzlich lässt sich eine zweite Bedenkzeit-Phase einstellen, etwa 90 Minuten für die ersten 40 Züge, danach 30 Minuten mit 30 Sekunden Zuschlag — wie bei klassischen FIDE-Turnieren.",
        },
        {
          heading: "Eine Schachuhr-App, die überall funktioniert",
          body: "Sie funktioniert gleichermaßen gut auf einem Smartphone zwischen zwei Spielern, einem flach liegenden Tablet oder einem Laptop neben einem echten Brett. Der Face-to-Face-Modus dreht die obere Hälfte des Displays um 180 Grad, damit beide Spieler ihre eigene Zeit richtig herum lesen können. Die letzte Bedenkzeit und die Spielernamen werden lokal gespeichert, ganz ohne Installation.",
        },
        {
          heading: "Warum das die beste Schachuhr online ist",
          body: "Viele Seiten bieten nur einen einfachen Fischer-Zuschlag. Diese Schachuhr ergänzt Bronstein- und einfache Verzögerung, FIDE-Standard-Mehrphasenbedenkzeiten, Rückgängig-Funktion, editierbare Spielernamen sowie volle Tastatur- und Screenreader-Unterstützung. Die Zeitmessung bleibt auf die Millisekunde genau — deshalb gilt sie als bester kostenloser Schach-Timer online.",
        },
      ],
    },
    chessClockFaq: {
      title: "Häufige Fragen zur Schachuhr",
      items: [
        {
          q: "Was ist eine Schachuhr?",
          a: "Eine Schachuhr ist ein Gerät mit zwei verbundenen Timern, das misst, wie viel Zeit jeder Spieler zum Nachdenken und Ziehen braucht. Drückt man die eigene Seite, stoppt der eigene Timer und der des Gegners startet, sodass die Gesamtspielzeit für beide Spieler begrenzt bleibt.",
        },
        {
          q: "Wie benutzt man eine Schachuhr?",
          a: "Wählen Sie eine Bedenkzeit und starten Sie die Uhr. Nachdem Sie auf dem Brett gezogen haben, drücken Sie Ihre eigene Taste — oder tippen auf Ihre Seite am Bildschirm —, um Ihren Timer zu stoppen und den des Gegners zu starten. Wechseln Sie so nach jedem Zug, bis die Partie endet oder eine Uhr abläuft.",
        },
        {
          q: "Wie funktioniert eine Schachuhr?",
          a: "Eine Schachuhr steuert zwei unabhängige Timer, von denen aber nur einer gleichzeitig läuft. Drückt man nach dem Zug die eigene Seite, pausiert der eigene Timer und der des Gegners beginnt zu laufen. Digitale Uhren fügen zusätzliche Logik für Zuschlag oder Verzögerung hinzu, aber der Grundmechanismus — eine Seite läuft, während die andere pausiert — bleibt gleich.",
        },
        {
          q: "Warum benutzen Schachspieler eine Uhr?",
          a: "Eine Uhr hält Partien fair und begrenzt, indem sie verhindert, dass ein Spieler unbegrenzt lange nachdenkt. Sie belohnt effizientes Rechnen, sorgt dafür, dass Turniere planmäßig enden, und fügt ein Zeitdruck-Element hinzu, das fester Bestandteil der Wettkampfstrategie im Schach ist.",
        },
        {
          q: "Welchen Zweck hat die Uhr im Schach?",
          a: "Die Uhr soll jedem Spieler ein festes Bedenkzeit-Budget zuweisen und durchsetzen, die Partie auf ein Ergebnis hin vorantreiben und einen zusätzlichen Weg zum Sieg bieten: Verbraucht der Gegner seine gesamte Zeit, bevor die Partie anders endet, verliert er auf Zeit.",
        },
        {
          q: "Was passiert, wenn eine Schachuhr abläuft?",
          a: "Erreicht Ihre Uhr null, bevor die Partie anders endet, verlieren Sie auf Zeit — selbst bei gewonnener Stellung auf dem Brett. Die Hauptausnahme: Hat der Gegner nicht genug Material, um jemals mattzusetzen, endet die Partie stattdessen remis.",
        },
      ],
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
      player1: "Weiß",
      player2: "Schwarz",
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
    aboutPage: {
      metaTitle: "Über uns — Chess Clock Online",
      metaDescription:
        "Erfahren Sie mehr über Chess Clock Online, eine kostenlose Schachuhr im Browser für Spieler, die präzise Zeitmessung ohne Werbung oder Konto wollen.",
      title: "Über Chess Clock Online",
      intro:
        "Chess Clock Online entstand aus einer einfachen Idee: Eine Schachuhr sollte kein Geld kosten, kein Konto erfordern und den Timer nicht hinter Werbung verstecken. Sie ist als fokussiertes Werkzeug für genau eine Aufgabe gebaut — die Zeit während einer Schachpartie fair und präzise zu messen.",
      sections: [
        {
          heading: "Warum wir sie gebaut haben",
          body: "Die meisten kostenlosen Online-Schachuhren sparen bei Funktionen, die ernsthafte Spieler tatsächlich nutzen — Bronstein-Verzögerung, Mehrphasenbedenkzeiten, Face-to-Face-Modus für geteilte Geräte. Wir haben Chess Clock Online gebaut, um die FIDE-Standard-Zeitmessmethoden richtig abzudecken, statt nur einen generischen Zuschlag anzubieten.",
        },
        {
          heading: "Wie sie gebaut ist",
          body: "Die Uhr läuft vollständig in Ihrem Browser. Kein Server verarbeitet Ihre Züge, kein Kontosystem, kein Backend speichert Ihre Partien — Ihre Einstellungen (Bedenkzeit, Spielernamen, Ton) werden lokal auf Ihrem eigenen Gerät im Speicher Ihres Browsers gesichert und verlassen es nie.",
        },
        {
          heading: "Für wen sie gedacht ist",
          body: "Gelegenheitsspieler, die eine Partie am Küchentisch stoppen, Vereinsorganisatoren, die einen Abend mit Schnellpartien leiten, Trainer, die Schülern den Rhythmus einer Partie mit Uhr beibringen, und alle, die eine zuverlässige Alternative brauchen, wenn keine physische Schachuhr griffbereit ist.",
        },
        {
          heading: "Kontaktieren Sie uns",
          body: "Fragen, Fehlermeldungen oder Funktionswünsche sind immer willkommen — auf unserer Kontaktseite erfahren Sie, wie Sie uns erreichen.",
        },
      ],
    },
    privacyPage: {
      metaTitle: "Datenschutz — Chess Clock Online",
      metaDescription:
        "Die Datenschutzerklärung von Chess Clock Online: welche Daten wir erheben (fast keine), wie localStorage genutzt wird, und wie Sie uns kontaktieren können.",
      title: "Datenschutzerklärung",
      updated: "Zuletzt aktualisiert: 13. August 2026",
      intro:
        "Chess Clock Online ist so konzipiert, dass es vollständig in Ihrem Browser läuft. Diese Erklärung beschreibt die wenigen betroffenen Daten und deren Verarbeitung.",
      sections: [
        {
          heading: "Von uns erhobene Informationen",
          body: "Chess Clock Online erfordert kein Konto, fragt keine persönlichen Daten ab und verfolgt Ihr Spielverhalten nicht. Wir verwenden auf dieser Seite weder Analyse-Skripte noch Werbe-Cookies oder Tracking-Pixel von Drittanbietern.",
        },
        {
          heading: "Lokaler Speicher",
          body: "Um Ihre gewählte Bedenkzeit, die Spielernamen, die Toneinstellung und das Design zwischen den Besuchen zu merken, speichert die Seite eine kleine Datenmenge im localStorage Ihres Browsers, unter den Schlüsseln chessclockonline:prefs und chessclockonline:theme. Diese Daten bleiben auf Ihrem Gerät — sie werden niemals an uns oder Dritte übertragen, und Sie können sie jederzeit löschen, indem Sie die Website-Daten in Ihrem Browser löschen.",
        },
        {
          heading: "Hosting & Server-Protokolle",
          body: "Wie bei jeder Website kann unser Hosting-Anbieter automatisch übliche technische Informationen (wie IP-Adresse, Browsertyp und Zeitstempel von Anfragen) aus Sicherheits- und Betriebsgründen protokollieren. Wir nutzen diese Daten nicht zu Tracking- oder Marketingzwecken, und sie sind mit keinem persönlichen Profil verknüpft.",
        },
        {
          heading: "Datenschutz für Kinder",
          body: "Chess Clock Online sammelt wissentlich keine Informationen von irgendjemandem, auch nicht von Kindern, da überhaupt keine persönlichen Daten erhoben werden.",
        },
        {
          heading: "Änderungen dieser Erklärung",
          body: 'Sollte sich diese Erklärung ändern, wird die aktualisierte Version auf dieser Seite mit einem neuen Datum "Zuletzt aktualisiert" veröffentlicht.',
        },
        {
          heading: "Kontakt",
          body: "Fragen zu dieser Erklärung können an chessclockonline@gmail.com gesendet werden.",
        },
      ],
    },
    termsPage: {
      metaTitle: "AGB — Chess Clock Online",
      metaDescription: "Die Allgemeinen Geschäftsbedingungen für die Nutzung von Chess Clock Online, einer kostenlosen Schachuhr im Browser.",
      title: "Allgemeine Geschäftsbedingungen",
      updated: "Zuletzt aktualisiert: 13. August 2026",
      intro: "Diese Bedingungen regeln Ihre Nutzung von Chess Clock Online. Durch die Nutzung der Website stimmen Sie ihnen zu.",
      sections: [
        {
          heading: "Nutzung des Dienstes",
          body: "Chess Clock Online wird kostenlos für den persönlichen, pädagogischen sowie den lockeren oder wettbewerbsmäßigen Vereinsgebrauch bereitgestellt. Sie dürfen die Seite nicht in einer Weise nutzen, die ihren Betrieb stört oder versucht, unbefugten Zugriff auf ihren zugrunde liegenden Code oder ihre Infrastruktur zu erlangen.",
        },
        {
          heading: "Kein Konto, keine Garantie für lokale Daten",
          body: "Da die Seite keine Konten verwendet und Ihre Einstellungen nur im lokalen Speicher Ihres Browsers speichert, werden Ihre gespeicherten Bedenkzeiten und Spielernamen entfernt, wenn Sie Ihre Browserdaten löschen, das Gerät wechseln oder einen anderen Browser verwenden. Wir übernehmen keine Verantwortung für den Verlust lokal gespeicherter Einstellungen.",
        },
        {
          heading: "Geistiges Eigentum",
          body: "Design, Code und Inhalte von Chess Clock Online sind Eigentum ihrer Urheber, sofern nicht anders angegeben. Sie dürfen die Seite oder ihren Quellcode nicht als eigenes Produkt kopieren, weiterverbreiten oder verkaufen.",
        },
        {
          heading: "Keine Gewährleistung",
          body: 'Chess Clock Online wird "wie besehen" ohne jegliche Gewährleistung bereitgestellt. Obwohl wir eine auf die Millisekunde genaue Zeitmessung anstreben, garantieren wir nicht, dass der Dienst unterbrechungsfrei, fehlerfrei oder für offizielle Turniere geeignet ist, bei denen der Veranstalter zertifizierte Geräte vorschreibt.',
        },
        {
          heading: "Haftungsbeschränkung",
          body: "Soweit gesetzlich zulässig, haften wir nicht für Schäden oder Verluste — einschließlich einer verlorenen Partie, eines Turniers oder eines Wettkampfs — die aus der Nutzung oder Nichtnutzbarkeit von Chess Clock Online entstehen.",
        },
        {
          heading: "Änderungen dieser Bedingungen",
          body: "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung der Seite nach Veröffentlichung von Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen.",
        },
        {
          heading: "Kontakt",
          body: "Fragen zu diesen Bedingungen können an chessclockonline@gmail.com gesendet werden.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Kontakt — Chess Clock Online",
      metaDescription: "Kontaktieren Sie das Team von Chess Clock Online für Fehlermeldungen, Funktionswünsche oder Fragen.",
      title: "Kontakt",
      intro: "Einen Fehler gefunden, eine Idee für eine Funktion, oder wollen Sie einfach Hallo sagen? Wir freuen uns, von Ihnen zu hören.",
      emailLabel: "Schreiben Sie uns an",
      email: "chessclockonline@gmail.com",
      responseNote: "Wir lesen jede Nachricht und versuchen, so schnell wie möglich zu antworten.",
    },
    errorPage: {
      notFoundMetaTitle: "404 — Seite nicht gefunden — Chess Clock Online",
      notFoundMetaDescription: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
      notFoundTitle: "Seite nicht gefunden",
      notFoundMessage: "Die gesuchte Seite existiert nicht oder wurde verschoben. Überprüfen Sie die URL oder kehren Sie zur Startseite zurück.",
      serverErrorMetaTitle: "500 — Serverfehler — Chess Clock Online",
      serverErrorMetaDescription: "Ein unerwarteter Fehler ist aufgetreten.",
      serverErrorTitle: "Etwas ist schiefgelaufen",
      serverErrorMessage: "Ein unerwarteter Fehler ist aufgetreten. Laden Sie die Seite neu oder kehren Sie zur Startseite zurück.",
      backHome: "Zurück zur Startseite",
    },
    footer: {
      tagline:
        "Eine kostenlose, präzise Schachuhr ohne Anmeldung für Bullet-, Blitz-, Schnell-, klassische und Turnier-Bedenkzeiten — mit Verzögerungsmodi, die der Wettbewerb nicht bietet.",
      timeControlsHeading: "Bedenkzeiten",
      productHeading: "Produkt",
      playNow: "Jetzt spielen",
      compare: "Vergleichen",
      copyright: "Chess Clock Online. Gemacht für Spieler, von Spielern.",
      legalHeading: "Rechtliches",
      aboutLink: "Über uns",
      privacyLink: "Datenschutz",
      termsLink: "AGB",
      contactLink: "Kontakt",
    },
  },

  pt: {
    meta: {
      title: "Chess Clock Online — Relógio de xadrez grátis",
      description:
        "Um relógio de xadrez online gratuito com controlos de tempo Bullet, Blitz, Rápidas e Clássicas. Incrementos Fischer, Bronstein e atraso simples, controlos multifase padrão FIDE, modo frente a frente e atalhos de teclado.",
      keywords:
        "relógio de xadrez, relógio de xadrez online, melhor relógio de xadrez, cronómetro de xadrez, temporizador de xadrez, relógio de xadrez digital, app de relógio de xadrez, regras do relógio de xadrez",
    },
    nav: { home: "Início", play: "Jogar", timeControls: "Controlos de tempo", features: "Funcionalidades", faq: "Perguntas" },
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
    homeAbout: {
      title: "O Melhor Relógio de Xadrez Online para Cada Partida",
      intro:
        "Chess Clock Online é um relógio de xadrez gratuito que funciona no seu navegador, sem transferências, sem conta e sem anúncios. Substitui um temporizador de xadrez físico para partidas casuais, noites de clube ou treino de torneio, mantendo-se preciso, simples e disponível em qualquer ecrã.",
      sections: [
        {
          heading: "O que é um relógio de xadrez e porque precisa de um",
          body: "Um relógio de xadrez é um par de temporizadores ligados que controlam o tempo de reflexão usado por cada jogador, para que uma partida não se prolongue indefinidamente. Os relógios analógicos tradicionais usavam dois mostradores mecânicos; hoje a maioria usa um relógio de xadrez digital, físico ou um relógio de xadrez online como este. Ao premir o seu lado, o relógio do adversário começa a contar. Se o tempo acabar antes do fim da partida, perde por tempo, independentemente da posição no tabuleiro.",
        },
        {
          heading: "Um temporizador de xadrez para cada formato",
          body: "Este relógio de xadrez inclui predefinições para Bullet, Blitz, Rápidas e Clássicas, seguindo as categorias usadas pela FIDE, chess.com e Lichess. Use-o como temporizador rápido para bullet de 1 minuto ou blitz de 3 minutos, ou mude para Rápidas ou Clássicas quando quiser mais tempo para pensar. Cada predefinição é totalmente editável, permitindo criar o seu próprio temporizador de xadrez online personalizado.",
        },
        {
          heading: "Regras do relógio de xadrez explicadas",
          body: "Esta ferramenta suporta os três métodos de tempo extra reconhecidos pela FIDE e USCF: incremento Fischer, que adiciona segundos após cada jogada; atraso Bronstein, que dá uma margem que não se perde se jogar depressa; e o atraso simples ao estilo dos EUA. Também pode adicionar uma segunda fase de tempo, como 90 minutos para as primeiras 40 jogadas e depois 30 minutos com 30 segundos de incremento, tal como nos torneios clássicos da FIDE.",
        },
        {
          heading: "Uma app de relógio de xadrez para usar em qualquer lugar",
          body: "Funciona igualmente bem num telemóvel entre dois jogadores, num tablet pousado na mesa ou num portátil ao lado de um tabuleiro físico. O modo frente a frente roda a metade superior do ecrã 180 graus, para que ambos os jogadores leiam o seu tempo corretamente. Guarda localmente o último controlo de tempo e os nomes dos jogadores, sem necessidade de instalação.",
        },
        {
          heading: "Porque é o melhor relógio de xadrez online",
          body: "Muitos sites oferecem apenas um incremento Fischer básico. Este acrescenta atraso Bronstein e simples, controlos multifase padrão FIDE, desfazer, nomes de jogador editáveis e suporte total para teclado e leitores de ecrã. O motor de cronometragem mantém-se preciso ao milissegundo, tornando-o o melhor temporizador de xadrez gratuito online.",
        },
      ],
    },
    chessClockFaq: {
      title: "Perguntas frequentes sobre o relógio de xadrez",
      items: [
        {
          q: "O que é um relógio de xadrez?",
          a: "Um relógio de xadrez é um dispositivo com dois temporizadores ligados que mede quanto tempo cada jogador demora a pensar e a jogar. Ao premir o seu lado, o seu temporizador para e o do adversário começa, mantendo o tempo total da partida limitado para ambos.",
        },
        {
          q: "Como usar um relógio de xadrez?",
          a: "Escolha um controlo de tempo e inicie o relógio. Depois de jogar no tabuleiro, prima o seu próprio botão — ou toque no seu lado num ecrã — para parar o seu temporizador e iniciar o do adversário. Continue a alternar após cada jogada até a partida terminar ou um relógio se esgotar.",
        },
        {
          q: "Como funciona um relógio de xadrez?",
          a: "Um relógio de xadrez controla dois temporizadores independentes, mas apenas um conta de cada vez. Ao premir o seu lado depois de jogar, o seu temporizador pausa e o do adversário começa a contar. Os relógios digitais acrescentam lógica extra para incrementos ou atraso, mas o mecanismo base — um lado a correr enquanto o outro está em pausa — mantém-se igual.",
        },
        {
          q: "Porque é que os jogadores de xadrez usam um relógio?",
          a: "Um relógio mantém as partidas justas e limitadas, impedindo que um jogador pense por tempo ilimitado. Recompensa o cálculo eficiente, garante que os torneios terminam a horas e acrescenta um elemento de pressão temporal que faz parte da estratégia do xadrez competitivo.",
        },
        {
          q: "Qual é o propósito do relógio no xadrez?",
          a: "O propósito do relógio é atribuir e fazer cumprir um orçamento de tempo de reflexão fixo para cada jogador, manter a partida a avançar para um resultado, e oferecer outra forma de vencer: se o adversário esgotar o seu tempo antes de a partida terminar de outra forma, perde por tempo.",
        },
        {
          q: "O que acontece se o relógio de xadrez se esgotar?",
          a: "Se o seu relógio chegar a zero antes de a partida terminar de outra forma, perde por tempo, mesmo com uma posição vencedora no tabuleiro. A principal exceção é se o adversário não tiver material suficiente para alguma vez dar xeque-mate, caso em que a partida é empate em vez de derrota.",
        },
      ],
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
      player1: "Brancas",
      player2: "Pretas",
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
    aboutPage: {
      metaTitle: "Sobre nós — Chess Clock Online",
      metaDescription:
        "Conheça o Chess Clock Online, um relógio de xadrez grátis no navegador, feito para jogadores que querem cronometragem precisa sem anúncios nem contas.",
      title: "Sobre o Chess Clock Online",
      intro:
        "O Chess Clock Online nasceu de uma ideia simples: um relógio de xadrez não devia custar dinheiro, exigir uma conta, nem esconder o temporizador atrás de anúncios. É construído como uma ferramenta focada numa única tarefa: cronometrar uma partida de xadrez de forma justa e precisa.",
      sections: [
        {
          heading: "Porque o criámos",
          body: "A maioria dos relógios de xadrez gratuitos online corta funcionalidades que os jogadores sérios realmente usam — atraso Bronstein, controlos de tempo multifase, modo frente a frente para dispositivos partilhados. Criámos o Chess Clock Online para cobrir corretamente os métodos de cronometragem padrão FIDE, em vez de oferecer apenas um incremento genérico.",
        },
        {
          heading: "Como é feito",
          body: "O relógio funciona inteiramente no seu navegador. Não há nenhum servidor a processar as suas jogadas, nenhum sistema de contas, nenhum backend a guardar as suas partidas — as suas preferências (controlo de tempo, nomes dos jogadores, som) são guardadas localmente no seu próprio dispositivo através do armazenamento do navegador, e nunca saem dele.",
        },
        {
          heading: "Para quem é",
          body: "Jogadores casuais que cronometram uma partida na mesa de casa, organizadores de clubes que gerem uma noite de partidas rápidas, treinadores que ensinam aos alunos o ritmo de uma partida cronometrada, e qualquer pessoa que queira uma alternativa fiável quando não tem um relógio de xadrez físico à mão.",
        },
        {
          heading: "Fale connosco",
          body: "Perguntas, relatórios de erros ou sugestões de funcionalidades são sempre bem-vindos — consulte a nossa página de contacto para saber como nos contactar.",
        },
      ],
    },
    privacyPage: {
      metaTitle: "Política de privacidade — Chess Clock Online",
      metaDescription:
        "A política de privacidade do Chess Clock Online: que dados recolhemos (quase nenhum), como o armazenamento local é usado, e como nos contactar.",
      title: "Política de privacidade",
      updated: "Última atualização: 13 de agosto de 2026",
      intro:
        "O Chess Clock Online foi concebido para funcionar inteiramente no seu navegador. Esta política explica a pouca informação envolvida e como é tratada.",
      sections: [
        {
          heading: "Informação que recolhemos",
          body: "O Chess Clock Online não requer uma conta, não pede informação pessoal e não monitoriza a forma como joga. Não usamos scripts de análise, cookies publicitários nem pixels de rastreio de terceiros neste site.",
        },
        {
          heading: "Armazenamento local",
          body: "Para memorizar o controlo de tempo escolhido, os nomes dos jogadores, a definição de som e o tema entre visitas, o site guarda uma pequena quantidade de dados no localStorage do seu navegador, sob as chaves chessclockonline:prefs e chessclockonline:theme. Estes dados permanecem no seu dispositivo — nunca nos são transmitidos nem a terceiros, e pode apagá-los a qualquer momento eliminando os dados do site no seu navegador.",
        },
        {
          heading: "Alojamento e registos do servidor",
          body: "Como qualquer site, o nosso fornecedor de alojamento pode registar automaticamente informação técnica padrão (como o endereço IP, o tipo de navegador e a data/hora dos pedidos) para fins de segurança e operacionais. Não usamos estes dados para rastreio ou marketing, e não estão ligados a nenhum perfil pessoal.",
        },
        {
          heading: "Privacidade das crianças",
          body: "O Chess Clock Online não recolhe conscientemente informação de ninguém, incluindo crianças, porque não recolhe informação pessoal de todo.",
        },
        {
          heading: "Alterações a esta política",
          body: 'Se esta política for alterada, a versão atualizada será publicada nesta página com uma nova data de "última atualização".',
        },
        {
          heading: "Contacto",
          body: "As perguntas sobre esta política podem ser enviadas para chessclockonline@gmail.com.",
        },
      ],
    },
    termsPage: {
      metaTitle: "Termos e condições — Chess Clock Online",
      metaDescription: "Os termos e condições de utilização do Chess Clock Online, um relógio de xadrez grátis no navegador.",
      title: "Termos e condições",
      updated: "Última atualização: 13 de agosto de 2026",
      intro: "Estes termos regem a sua utilização do Chess Clock Online. Ao usar o site, aceita-os.",
      sections: [
        {
          heading: "Utilização do serviço",
          body: "O Chess Clock Online é disponibilizado gratuitamente para uso pessoal, educativo e de clube, casual ou competitivo. Não deve usar o site de forma a perturbar o seu funcionamento nem tentar obter acesso não autorizado ao seu código ou infraestrutura.",
        },
        {
          heading: "Sem conta, sem garantias sobre dados locais",
          body: "Como o site não usa contas e guarda as suas preferências apenas no armazenamento local do navegador, limpar os dados do navegador, mudar de dispositivo ou usar um navegador diferente removerá os controlos de tempo e nomes de jogadores guardados. Não nos responsabilizamos por qualquer perda de preferências armazenadas localmente.",
        },
        {
          heading: "Propriedade intelectual",
          body: "O design, o código e o conteúdo do Chess Clock Online são propriedade dos seus criadores, salvo indicação em contrário. Não pode copiar, redistribuir ou revender o site ou o seu código-fonte como produto próprio.",
        },
        {
          heading: "Sem garantia",
          body: 'O Chess Clock Online é fornecido "tal como está", sem garantia de qualquer tipo. Embora procuremos uma cronometragem precisa ao milissegundo, não garantimos que o serviço seja ininterrupto, isento de erros, ou adequado para torneios oficiais onde o organizador exija equipamento certificado.',
        },
        {
          heading: "Limitação de responsabilidade",
          body: "Na máxima medida permitida por lei, não somos responsáveis por quaisquer danos ou perdas — incluindo uma partida, torneio ou encontro perdido — resultantes do uso ou da impossibilidade de usar o Chess Clock Online.",
        },
        {
          heading: "Alterações a estes termos",
          body: "Podemos atualizar estes termos periodicamente. A utilização continuada do site após a publicação de alterações constitui aceitação dos termos atualizados.",
        },
        {
          heading: "Contacto",
          body: "As perguntas sobre estes termos podem ser enviadas para chessclockonline@gmail.com.",
        },
      ],
    },
    contactPage: {
      metaTitle: "Contacto — Chess Clock Online",
      metaDescription: "Contacte a equipa do Chess Clock Online para relatar erros, sugerir funcionalidades ou colocar questões.",
      title: "Contacto",
      intro: "Encontrou um erro, tem uma ideia para uma funcionalidade, ou só quer dizer olá? Gostaríamos muito de o ouvir.",
      emailLabel: "Escreva-nos para",
      email: "chessclockonline@gmail.com",
      responseNote: "Lemos todas as mensagens e tentamos responder o mais rápido possível.",
    },
    errorPage: {
      notFoundMetaTitle: "404 — Página não encontrada — Chess Clock Online",
      notFoundMetaDescription: "A página que procura não existe ou pode ter sido movida.",
      notFoundTitle: "Página não encontrada",
      notFoundMessage: "A página que procura não existe ou pode ter sido movida. Verifique o URL ou volte à página inicial.",
      serverErrorMetaTitle: "500 — Erro do servidor — Chess Clock Online",
      serverErrorMetaDescription: "Ocorreu um erro inesperado.",
      serverErrorTitle: "Algo correu mal",
      serverErrorMessage: "Ocorreu um erro inesperado. Tente atualizar a página ou volte à página inicial.",
      backHome: "Voltar ao início",
    },
    footer: {
      tagline:
        "Um relógio de xadrez gratuito, preciso e sem registo, feito para controlos Bullet, Blitz, Rápidas, Clássicas e de torneio, com modos de atraso que a concorrência não oferece.",
      timeControlsHeading: "Controlos de tempo",
      productHeading: "Produto",
      playNow: "Jogar agora",
      compare: "Comparar",
      copyright: "Chess Clock Online. Feito para jogadores, por jogadores.",
      legalHeading: "Legal",
      aboutLink: "Sobre nós",
      privacyLink: "Política de privacidade",
      termsLink: "Termos e condições",
      contactLink: "Contacto",
    },
  },
};

export function t(locale: string | undefined): Dictionary {
  const key = (locale ?? defaultLocale) as Locale;
  return ui[key] ?? ui[defaultLocale];
}
