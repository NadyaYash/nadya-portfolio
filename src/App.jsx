import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import profilePhoto from "../1701113988652.jpeg";
import easyJigsawPuzzlesIcon from "./assets/easy-jigsaw-puzzles-icon.png";
import easyJigsawScreen01 from "./assets/easy-jigsaw-screen-01.jpg";
import easyJigsawScreen02 from "./assets/easy-jigsaw-screen-02.jpg";
import easyJigsawScreen03 from "./assets/easy-jigsaw-screen-03.jpg";
import easyJigsawScreen04 from "./assets/easy-jigsaw-screen-04.jpg";
import easyJigsawScreen05 from "./assets/easy-jigsaw-screen-05.jpg";
import easyJigsawScreen06 from "./assets/easy-jigsaw-screen-06.jpg";
import easyJigsawScreen07 from "./assets/easy-jigsaw-screen-07.jpg";
import wordSpinCrosswordPuzzleIcon from "../icon/wordspin-crossword-puzzle-icon.png";
import wordChainChatIcon from "../icon/word-chain-chat-icon.jpg";
import flowblocksStore from "./assets/flowblocks-store.jpg";
import flowblocksIcon from "./assets/flowblocks-icon.png";
import flowblocksScreen01 from "./assets/flowblocks-screen-01.jpg";
import flowblocksScreen02 from "./assets/flowblocks-screen-02.jpg";
import flowblocksScreen04 from "./assets/flowblocks-screen-04.jpg";
import flowblocksScreen05 from "./assets/flowblocks-screen-05.jpg";
import flowblocksScreen06 from "./assets/flowblocks-screen-06.jpg";
import puzzleFreeWeb from "./assets/puzzlefree-web.jpg";
import puzzleFreeDaily from "./assets/puzzlefree-daily.jpg";
import puzzleFreeGrid from "./assets/puzzlefree-grid.jpg";
import puzzleFreeMobile from "./assets/puzzlefree-mobile.jpg";
import puzzleFreeIcon from "./assets/puzzlefree-icon.png";
import puzzleFreeKidsIcon from "./assets/puzzlefree-kids-icon.png";
import jigsawKidsPuzzles from "./assets/jigsaw-kids-puzzles.jpg";
import jigsawKidsPacks from "./assets/jigsaw-kids-packs.jpg";
import jigsawKidsPlay from "./assets/jigsaw-kids-play.jpg";
import jigsawKidsMobile from "./assets/jigsaw-kids-mobile.jpg";
import teamIvanPhoto from "./assets/team-ivan.png";
import calcSprintIcon from "../icon/CalcSprint.png";
import beadArtIcon from "../icon/BeadArt.png";
import colorfulHeartsIcon from "../icon/ColorfulHearts.png";
import gorodaOnlineIcon from "../icon/GorodaOnline.png";
import howLoudIcon from "../icon/HowLoud.png";
import wiseHusbandIcon from "../icon/WiseHusband.png";
import pixelPaintIcon from "../icon/PixelPaint.png";
import slidePuzzleIcon from "../icon/SlidePuzzle.png";
import sudokuJustPlayIcon from "../icon/SudokuJustPlay.png";
import sudokuByPuzzleFreeIcon from "../icon/SudokubyPuzzlefree.png";
import kidsSudokuIcon from "../icon/kidsSudoku.png";
import morseIcon from "../icon/morse.png";
import nomadFlowMoneyIcon from "./assets/nomad-flow-money-icon.png";
import clockWidgetsIcon from "./assets/clock-widgets-icon.png";
import pullMeWormsIcon from "./assets/pull-me-worms-icon.png";
import arrowsPuzzleNeonGameIcon from "./assets/arrows-puzzle-neon-game-icon.jpg";
import headphoneSoundCheckIcon from "./assets/headphone-sound-check-icon.jpg";
import headphoneSoundCheckScreen01 from "./assets/headphone-sound-check-01-home.jpg";
import headphoneSoundCheckScreen02 from "./assets/headphone-sound-check-02-lr-mono.jpg";
import headphoneSoundCheckScreen03 from "./assets/headphone-sound-check-03-stereo.jpg";
import headphoneSoundCheckScreen04 from "./assets/headphone-sound-check-04-spatial-3d.jpg";
import headphoneSoundCheckScreen05 from "./assets/headphone-sound-check-05-mic-check.jpg";
import headphoneSoundCheckScreen06 from "./assets/headphone-sound-check-06-report.jpg";
import coffeelineBaristaIcon from "./assets/coffeeline-barista-icon.jpg";
import coffeelineBaristaScreen01 from "./assets/coffeeline-barista-screen-01.jpg";
import coffeelineBaristaScreen02 from "./assets/coffeeline-barista-screen-02.jpg";
import coffeelineBaristaScreen03 from "./assets/coffeeline-barista-screen-03.jpg";
import coffeelineBaristaScreen04 from "./assets/coffeeline-barista-screen-04.jpg";
import coffeelineBaristaScreen05 from "./assets/coffeeline-barista-screen-05.jpg";
import kidsMathCountAddIcon from "./assets/kids-math-count-add-icon.jpg";
import kidsMathCountAddScreen01 from "./assets/kids-math-count-add-screen-01.jpg";
import kidsMathCountAddScreen02 from "./assets/kids-math-count-add-screen-02.jpg";
import kidsMathCountAddScreen03 from "./assets/kids-math-count-add-screen-03.jpg";
import kidsMathCountAddScreen04 from "./assets/kids-math-count-add-screen-04.jpg";
import kidsMathCountAddScreen05 from "./assets/kids-math-count-add-screen-05.jpg";
import tapMeArrowsIcon from "./assets/tap-me-arrows-icon.jpg";
import tapMeArrowsScreen01 from "./assets/tap-me-arrows-screen-01.jpg";
import tapMeArrowsScreen02 from "./assets/tap-me-arrows-screen-02.jpg";
import tapMeArrowsScreen03 from "./assets/tap-me-arrows-screen-03.jpg";
import tapMeArrowsScreen04 from "./assets/tap-me-arrows-screen-04.jpg";
import garminWatchFacesCover from "./assets/garmin-watch-faces-lumen-cover.jpg";
import garminWatchFacesDomestiqueScreen from "./assets/garmin-watch-faces-domestique-screen.jpg";
import garminWatchFacesWeatherDialScreen from "./assets/garmin-watch-faces-weather-dial-screen.jpg";
import garminWatchFacesRetroLcdScreen from "./assets/garmin-watch-faces-retro-lcd-screen.jpg";
import garminWatchFacesLumenScreen from "./assets/garmin-watch-faces-lumen-screen.jpg";
import garminWatchFacesFillDrainScreen from "./assets/garmin-watch-faces-fill-drain-screen.jpg";
import garminWatchFaces1989SportLcdScreen from "./assets/garmin-watch-faces-1989-sport-lcd-screen.jpg";
import garminWatchFacesLuxuryChronometerScreen from "./assets/garmin-watch-faces-luxury-chronometer-screen.jpg";
import garminWatchFacesFootball2026Screen from "./assets/garmin-watch-faces-football-2026-screen.jpg";
import garminWatchFacesLagunScreen from "./assets/garmin-watch-faces-lagun-screen.jpg";
import garminWatchFacesMemphisScreen from "./assets/garmin-watch-faces-memphis-screen.jpg";
import garminWatchFacesMetricRingsScreen from "./assets/garmin-watch-faces-metric-rings-screen.jpg";
import garminWatchFacesProgressArcsScreen from "./assets/garmin-watch-faces-progress-arcs-screen.jpg";
import garminWatchFacesZuluScreen from "./assets/garmin-watch-faces-zulu-screen.jpg";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "How I help", href: "#help" },
  { label: "Contact", href: "#contact" },
];

const legalNotice = [
  {
    label: "Business Owner",
    value: "Nadzeya Yashchuk",
  },
  {
    label: "Business Type",
    value: "Sole Proprietor (Einzelunternehmer)",
  },
  {
    label: "Business Activity (Gewerbewortlaut)",
    value: "Services in automated data processing and information technology",
  },
  {
    label: "GISA Registration Number",
    value: "38969065",
  },
  {
    label: "Address",
    value: "Käferheimerstraße 153b / Tür 12, 5071 Wals-Siezenheim, Austria",
  },
  {
    label: "Email",
    value: "contact@nadzeyayashchuk.com",
    href: "mailto:contact@nadzeyayashchuk.com",
  },
  {
    label: "Phone",
    value: "+43 660 1212508",
    href: "tel:+436601212508",
  },
  {
    label: "Registered at",
    value: "Bezirkshauptmannschaft Salzburg-Umgebung",
  },
  {
    label: "Member of",
    value: "Austrian Economic Chamber (WKO)",
    href: "https://www.wko.at/",
  },
  {
    label: "VAT ID",
    value: "Not applicable (Kleinunternehmer regulation)",
  },
];

const privacyContact = {
  name: "Nadzeya Yashchuk",
  address: "Käferheimerstraße 153b / Tür 12, 5071 Wals-Siezenheim, Austria",
  email: "contact@nadzeyayashchuk.com",
};

const gameLanding = {
  title: "Easy Jigsaw Puzzles",
  slug: "puzzle-game",
  isDraft: false,
  legalPublished: true,
  supportPublished: true,
  category: "Puzzle game",
  period: "2026",
  tagline: "A calm jigsaw puzzle game for relaxing play.",
  summary:
    "Easy Jigsaw Puzzles brings classic picture puzzles to mobile with simple controls, offline play, and an easy path into a quiet puzzle session.",
  icon: easyJigsawPuzzlesIcon,
  iconLabel: "Puzzle",
  storeLinks: [
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/easy-jigsaw-puzzles/id6772980224",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.enidev.easypuzzle",
    },
  ],
  legalLinks: [
    {
      label: "Privacy Policy",
      href: "/games/puzzle-game/privacy",
    },
    {
      label: "Terms of Use",
      href: "/games/puzzle-game/terms",
    },
    {
      label: "Support",
      href: "/games/puzzle-game/support",
    },
  ],
  highlights: ["Relaxed jigsaw puzzle play", "Offline availability", "Privacy, terms, and support pages ready for App Store review"],
  images: [
    {
      src: easyJigsawScreen01,
      alt: "Easy Jigsaw Puzzles home screen with the message Ten worlds to wander.",
    },
    {
      src: easyJigsawScreen02,
      alt: "Easy Jigsaw Puzzles gameplay screen with the message Piece by piece.",
    },
    {
      src: easyJigsawScreen03,
      alt: "Easy Jigsaw Puzzles completion screen with the message Your best, your time.",
    },
    {
      src: easyJigsawScreen04,
      alt: "Easy Jigsaw Puzzles nature collection screen with quiet landscapes.",
    },
    {
      src: easyJigsawScreen05,
      alt: "Easy Jigsaw Puzzles flora collection screen with the message An unhurried bloom.",
    },
    {
      src: easyJigsawScreen06,
      alt: "Easy Jigsaw Puzzles cartoon collection screen with the message Drawn to smile.",
    },
    {
      src: easyJigsawScreen07,
      alt: "Easy Jigsaw Puzzles food collection screen with the message Slow plates.",
    },
  ],
};

const wordSpinGame = {
  title: "WORDSPIN: Crossword Puzzle",
  slug: "wordspin-crossword-puzzle",
  isDraft: false,
  legalPublished: true,
  supportPublished: true,
  category: "Word game",
  period: "2026",
  tagline: "A crossword puzzle game for focused wordplay.",
  summary:
    "WORDSPIN: Crossword Puzzle is a calm crossword puzzle game with drag-to-spell wordplay, handcrafted levels, and a quiet, focused pace.",
  icon: wordSpinCrosswordPuzzleIcon,
  iconLabel: "Word",
  storeLinks: [
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/wordspin-crossword-puzzle/id6774131462",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.enidev.wordspin",
    },
  ],
  legalLinks: [
    {
      label: "Privacy Policy",
      href: "/games/wordspin-crossword-puzzle/privacy",
    },
    {
      label: "Terms of Use",
      href: "/games/wordspin-crossword-puzzle/terms",
    },
    {
      label: "Support",
      href: "/games/wordspin-crossword-puzzle/support",
    },
  ],
  highlights: ["Crossword puzzle game", "Support page ready", "Privacy and terms links ready for app review"],
  images: [],
};

const tapMeArrowsFreedomGame = {
  title: "Arrow Puzzle: Tap & Escape",
  legalTitle: "Arrow Puzzle: Tap & Escape",
  slug: "tap-me-arrows-freedom",
  isDraft: false,
  legalPublished: true,
  supportPublished: true,
  category: "Puzzle game",
  period: "2026",
  tagline: "A colorful arrow puzzle game about clearing the path.",
  summary:
    "Arrow Puzzle: Tap & Escape is a calm tap-to-clear puzzle game where each move opens space for the next arrow, with simple rules, handcrafted levels, and a light, no-pressure flow.",
  icon: tapMeArrowsIcon,
  iconLabel: "Arrow",
  storeLinks: [
    {
      label: "App Store",
      href: "https://apps.apple.com/us/app/tap-me-freedom-for-the-arrows/id6778717993",
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.enidev.tapme",
    },
  ],
  legalLinks: [
    {
      label: "Privacy Policy",
      href: "/games/tap-me-arrows-freedom/privacy",
    },
    {
      label: "Terms of Use",
      href: "/games/tap-me-arrows-freedom/terms",
    },
    {
      label: "Support",
      href: "/games/tap-me-arrows-freedom/support",
    },
  ],
  highlights: [
    "Tap-to-clear arrow puzzle gameplay",
    "Handcrafted levels with easy-to-grasp but tricky layouts",
    "Privacy, terms, and support pages ready for store review",
  ],
  images: [
    {
      src: tapMeArrowsScreen01,
      alt: "Arrow Puzzle: Tap & Escape screenshot with the message Set it free.",
    },
    {
      src: tapMeArrowsScreen02,
      alt: "Arrow Puzzle: Tap & Escape screenshot highlighting a calm no-pressure puzzle setup.",
    },
    {
      src: tapMeArrowsScreen03,
      alt: "Arrow Puzzle: Tap & Escape screenshot showing an easy-to-learn but tricky level layout.",
    },
    {
      src: tapMeArrowsScreen04,
      alt: "Arrow Puzzle: Tap & Escape screenshot focused on handcrafted puzzle progression.",
    },
  ],
};

export const gameLandings = [gameLanding, wordSpinGame, tapMeArrowsFreedomGame];

const helpAreas = [
  {
    title: "Turn messy input into a clear plan",
    text: "I sort through ideas, feedback, constraints, and business needs so the team knows what matters next.",
    icon: "compass",
  },
  {
    title: "Make priorities easier to defend",
    text: "I help separate urgent from important, reduce noise, and shape a roadmap people can actually act on.",
    icon: "map",
  },
  {
    title: "Keep delivery moving",
    text: "I keep scope, decisions, developers, QA, and timelines connected so work does not stall in the middle.",
    icon: "flow",
  },
  {
    title: "Prepare launches with less stress",
    text: "I bring structure to release details, edge cases, feedback loops, and last-mile decisions before they become blockers.",
    icon: "rocket",
  },
  {
    title: "Shape app store presence",
    text: "I help prepare apps for launch with clearer store structure, QA testing, listing presentation, and release readiness that support conversion.",
    icon: "pulse",
  },
  {
    title: "Connect product work to outcomes",
    text: "I keep usability, growth, retention, and team capacity in the same conversation so product work supports the business.",
    icon: "target",
  },
];

const getTitleSlug = (title) =>
  title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const assetUrl = (asset) => {
  if (typeof asset === "string") {
    return asset;
  }

  if (asset && typeof asset === "object" && typeof asset.src === "string") {
    return asset.src;
  }

  return "";
};

export const getLaunchSlug = (item) => item.slug || getTitleSlug(item.title);
export const getLaunchPath = (item) => `/apps/${getLaunchSlug(item)}`;
export const getGamePath = (game) => `/games/${game.slug}`;
const getGameLegalName = (game) => game.legalTitle || game.title;
export const getProjectSlug = (project) => project.slug || getTitleSlug(project.name);
export const getProjectPath = (project) => `/work/${getProjectSlug(project)}`;
const getFirstSentence = (text) => {
  const firstSentence = text?.split(/[.!?]/).find(Boolean)?.trim();
  return firstSentence ? `${firstSentence.replace(/,$/, "")}.` : "";
};

export const storeLaunches = [
  ...gameLandings
    .filter((game) => !game.isDraft)
    .map((game) => ({
      title: game.title,
      category: game.category,
      period: game.period,
      icon: game.icon,
      iconClass: game.iconClass,
      iconLabel: game.iconLabel,
      note: "Publisher & QA",
      summary: game.summary,
      impact: ["Published with support, privacy, and terms ready for launch and app review."],
      links: [
        {
          label: "Learn more",
          href: getGamePath(game),
        },
        ...game.storeLinks,
        ...game.legalLinks.slice(0, 2),
      ],
    })),
  {
    title: "Nomad Flow: Money",
    category: "Money tracking app",
    period: "2026",
    icon: nomadFlowMoneyIcon,
    note: "Publisher & QA",
    summary:
      "Private money tracking for nomads living between countries, currencies, cash, cards, and bases — no account, no cloud ledger, no ads.",
    impact: ["Publisher-side positioning, QA testing, and release readiness for a private finance utility."],
    links: [
      {
        label: "Web",
        href: "https://nomadflow.money/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/nomad-flow-money/id6770238544",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.nomadflowmoney",
      },
    ],
  },
  {
    title: "Clock Widgets: Flip & Digital",
    category: "Clock widgets app",
    period: "2026",
    icon: clockWidgetsIcon,
    note: "Publisher & QA",
    summary: "Clock widgets app where I handled publisher-side positioning, QA testing, and web presence.",
    impact: ["Publisher-side positioning, QA testing, and public launch presence."],
    links: [
      {
        label: "Web",
        href: "https://clockwidgets.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/clock-widgets-flip-digital/id6772222315",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.clockwidgets&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "Untangle Worms: Knot Puzzle",
    slug: "pull-me-freedom-for-the-worms",
    category: "Puzzle game",
    period: "2026",
    icon: pullMeWormsIcon,
    note: "Publisher & QA",
    summary: "Puzzle game where I supported publisher-side setup, QA testing, store links, and release readiness.",
    impact: ["Publisher-side support, QA testing, and store readiness for a puzzle game launch."],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.ropes&pcampaignid=web_share",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/pull-me-freedom-for-the-worms/id6775017077",
      },
    ],
  },
  {
    title: "Word Chain Chat",
    category: "Word game",
    period: "2026",
    icon: wordChainChatIcon,
    note: "Publisher & QA",
    summary:
      "Fast head-to-head word game where I supported publisher-side positioning, QA testing, and App Store release readiness.",
    impact: ["Publisher-side positioning, QA testing, and launch readiness for a competitive word game release."],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/word-chain-chat/id6775745201",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.wordchain",
      },
    ],
  },
  {
    title: "Arrows Puzzle - Neon Game",
    category: "Puzzle game",
    period: "2026",
    icon: arrowsPuzzleNeonGameIcon,
    note: "Publisher & QA",
    summary:
      "A clean and relaxing arrow puzzle game where I supported publisher-side positioning, QA testing, and App Store release readiness.",
    impact: ["Publisher-side positioning, QA testing, and launch readiness for a calm neon puzzle release."],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/arrows-puzzle-neon-game/id6777918234",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.puzzlearrow",
      },
    ],
  },
  {
    title: "Kids Sudoku: Just Play",
    category: "Kids puzzle",
    period: "2026",
    icon: kidsSudokuIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://sudoku-play.org/sudoku-for-kids/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/id6764041492",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.kidssudoku",
      },
    ],
  },
  {
    title: "CalcSprint: Just Play",
    category: "Math game",
    period: "2026",
    icon: calcSprintIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://calcsprint.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/at/app/calcsprint-just-play/id6763547636",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.calcsprint",
      },
    ],
  },
  {
    title: "Kids Math: Count & Add",
    slug: "kids-math-count-add",
    category: "Kids math app",
    period: "2026",
    icon: kidsMathCountAddIcon,
    note: "Publisher & QA",
    summary:
      "Gentle preschool math app that helps children explore counting, adding, subtracting, and early number sense through picture-based play with no reading required.",
    cardSummary: "Gentle preschool math app with picture-based counting and sums for early learners.",
    impact: [
      "Publisher-side positioning, QA testing, and release readiness for a family-focused early math app designed around calm, no-pressure play.",
      "Prepared store-facing presentation, support structure, and launch materials around child-friendly UX, multilingual access, and a simple one-time unlock.",
    ],
    images: [
      { src: kidsMathCountAddScreen01, alt: "Kids Math: Count & Add home screen with colorful preschool learning paths." },
      { src: kidsMathCountAddScreen02, alt: "Kids Math: Count & Add gameplay screen showing picture-based answer choices." },
      { src: kidsMathCountAddScreen03, alt: "Kids Math: Count & Add progress screen with stars earned after completing tasks." },
      { src: kidsMathCountAddScreen04, alt: "Kids Math: Count & Add animal-themed math exercises for young children." },
      { src: kidsMathCountAddScreen05, alt: "Kids Math: Count & Add cute animal level selection screen for preschool players." },
    ],
    links: [
      {
        label: "Web",
        href: "https://calcsprint.com/kids/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/kids-math-count-add/id6784570701",
      },
      {
        label: "Privacy Policy",
        href: "https://calcsprint.com/kids/privacy-policy",
      },
      {
        label: "Terms of Use",
        href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
      },
    ],
  },
  {
    title: "Sudoku: Just Play",
    category: "Puzzle",
    period: "2026",
    icon: sudokuJustPlayIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://sudoku-play.org/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/app/id6763089363",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.justsudoku",
      },
    ],
  },
  {
    title: "SUDOKU: Daily Logic",
    category: "Puzzle",
    period: "2026",
    icon: sudokuByPuzzleFreeIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/sudoku-daily-logic/id6763001039",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.sudoku",
      },
    ],
  },
  {
    title: "Morse Code: Learn & Translate",
    slug: "morse-learn-translate",
    category: "Utility app",
    period: "2026",
    icon: morseIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://morsecodes.app/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/morse-learn-translate/id6764839522",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.morse",
      },
    ],
  },
  {
    title: "Colorful Hearts: Paint Fun",
    category: "Kids coloring app",
    period: "2026",
    icon: colorfulHeartsIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://colouringapp.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/colorful-hearts-paint-fun/id6764305398",
      },
    ],
  },
  {
    title: "Pixel Paint: Color & Relax",
    category: "Coloring app",
    period: "2026",
    icon: pixelPaintIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://pixelpaintapp.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/pixel-paint-color-relax/id6765738643",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.pixelcolor&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "Bead Art",
    category: "Creative app",
    period: "2026",
    icon: beadArtIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://beadart.app/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/bead-art/id6766010170",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.beadart",
      },
    ],
  },
  {
    title: "Goroda Online",
    category: "City game",
    period: "2026",
    icon: gorodaOnlineIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://goroda-na.ru/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B0-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id6769050447",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.goroda",
      },
    ],
  },
  {
    title: "HowLoud – Decibel Meter",
    category: "Utility app",
    period: "2026",
    icon: howLoudIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://pickheadphones.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/howloud-decibel-meter/id6767616413",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.decibelmeter&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "Headphone Sound Check",
    slug: "headphone-sound-check",
    category: "Utility app",
    period: "2026",
    icon: headphoneSoundCheckIcon,
    note: "Publisher & QA",
    summary:
      "Audio testing utility for quickly checking headphones, earbuds, speakers, stereo balance, microphone input, bass response, and spatial sound.",
    cardSummary: "Audio testing utility for headphones, earbuds, speakers, and microphones.",
    impact: [
      "Publisher-side positioning, QA testing, and release readiness for a practical headphone diagnostics app.",
      "Prepared store presentation, support links, and launch materials around real device checks and quick reporting.",
    ],
    images: [
      { src: headphoneSoundCheckScreen01, alt: "Headphone Sound Check home screen with available audio tests." },
      { src: headphoneSoundCheckScreen02, alt: "Headphone Sound Check left and right channel check screen." },
      { src: headphoneSoundCheckScreen03, alt: "Headphone Sound Check stereo sound test screen." },
      { src: headphoneSoundCheckScreen04, alt: "Headphone Sound Check spatial sound test screen." },
      { src: headphoneSoundCheckScreen05, alt: "Headphone Sound Check microphone check screen." },
      { src: headphoneSoundCheckScreen06, alt: "Headphone Sound Check results report screen." },
    ],
    links: [
      {
        label: "Web",
        href: "https://pickheadphones.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/headphone-sound-check/id6771039438",
      },
      {
        label: "Privacy Policy",
        href: "https://pickheadphones.com/privacy-policy/",
      },
    ],
  },
  {
    title: "Barista Coffee: CoffeeLine",
    slug: "coffeeline-barista",
    category: "Casual game",
    period: "2026",
    icon: coffeelineBaristaIcon,
    note: "Publisher & QA",
    summary:
      "Cozy barista arcade game built around satisfying pour-to-the-line play, short daily shifts, and a warm cafe rhythm.",
    cardSummary: "Cozy barista arcade game with precise pours, short daily shifts, and a calm cafe feel.",
    impact: [
      "Publisher-side positioning, QA testing, and release readiness for a cozy coffee-serving arcade game with light progression and premium upsell.",
      "Prepared store-facing presentation, support structure, and launch materials around the game's calm tone, pour precision, and daily-return loop.",
    ],
    images: [
      { src: coffeelineBaristaScreen01, alt: "Barista Coffee: CoffeeLine hero screen introducing the cozy cafe shift." },
      { src: coffeelineBaristaScreen02, alt: "Barista Coffee: CoffeeLine gameplay screen with two drink orders in queue." },
      { src: coffeelineBaristaScreen03, alt: "Barista Coffee: CoffeeLine close-up gameplay screen showing a precise coffee pour." },
      { src: coffeelineBaristaScreen04, alt: "Barista Coffee: CoffeeLine gameplay screen focused on racing the clock during service." },
      { src: coffeelineBaristaScreen05, alt: "Barista Coffee: CoffeeLine premium screen describing ad removal and unlimited daily play." },
    ],
    links: [
      {
        label: "Web",
        href: "https://coffeeline.app/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/coffeeline-barista/id6784132379",
      },
      {
        label: "Privacy Policy",
        href: "https://coffeeline.app/privacy",
      },
      {
        label: "Terms of Use",
        href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
      },
    ],
  },
  {
    title: "Wise Husband",
    category: "Relationship app",
    period: "2026",
    icon: wiseHusbandIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://wise-husband.com/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/wise-husband/id6767145321",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.wisehusband&pcampaignid=web_share",
      },
    ],
  },
  {
    title: "Slide Puzzle - 8, 15, 24, 35",
    category: "Puzzle app",
    period: "2026",
    icon: slidePuzzleIcon,
    note: "Publisher & QA",
    links: [
      {
        label: "Web",
        href: "https://slidepuzzle.app/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/slide-puzzle-8-15-24-35/id6770205599",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.slidepuzzle",
      },
    ],
  },
];

export const projects = [
  {
    name: "Garmin Connect IQ Watch Faces",
    category: "Wearable product / watch faces",
    period: "2026",
    role: "Publisher & Store Presentation",
    summary:
      "A growing collection of Garmin Connect IQ watch faces where I prepare store presentation, listing materials, screenshots, QA checks, and publishing through Garmin Connect IQ.",
    scope: [
      "Store presentation and listing structure",
      "Screenshot selection and upload-ready visual materials",
      "Store listing copy, screenshots, upload packages, and publishing in Garmin Connect IQ",
      "QA across simulator/device variants before release",
    ],
    tags: ["Garmin Connect IQ", "Watch faces", "Wearables", "Publishing"],
    impact: [
      "Prepared wearable releases for Connect IQ with clear store pages, screenshots, descriptions, QA checks, and upload-ready packages.",
    ],
    icon: garminWatchFacesCover,
    watchFaces: [
      {
        name: "Domestique",
        image: garminWatchFacesDomestiqueScreen,
        status: "Approved",
        rating: "5.0",
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Lumen",
        image: garminWatchFacesLumenScreen,
        status: "Approved",
        rating: "5.0",
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "1989 Sport LCD",
        image: garminWatchFaces1989SportLcdScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Luxury Chronometer",
        image: garminWatchFacesLuxuryChronometerScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Retro Digital LCD",
        image: garminWatchFacesRetroLcdScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Fill or Drain",
        image: garminWatchFacesFillDrainScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Weather Dial",
        image: garminWatchFacesWeatherDialScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Football 2026",
        image: garminWatchFacesFootball2026Screen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Lagun",
        image: garminWatchFacesLagunScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Memphis",
        image: garminWatchFacesMemphisScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Metric Rings",
        image: garminWatchFacesMetricRingsScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Progress Arcs",
        image: garminWatchFacesProgressArcsScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
      {
        name: "Zulu",
        image: garminWatchFacesZuluScreen,
        link: "https://apps.garmin.com/developer/dashboard?",
      },
    ],
    links: [
      {
        label: "WatchFaceKit",
        href: "https://watchfacekit.com/",
      },
      {
        label: "Connect IQ Dashboard",
        href: "https://apps.garmin.com/developer/dashboard?",
      },
    ],
    featured: true,
  },
  {
    name: "Block Puzzle Blast: FlowBlocks",
    slug: "flowblocks-puzzle-game",
    category: "Puzzle game / mobile product",
    period: "2026",
    role: "Creator & Product Lead",
    summary:
      "Original product concept and end-to-end direction for a mobile puzzle game built around smooth block play, clear visual identity, and a store-ready launch presence.",
    scope: [
      "Original game concept and product framing",
      "Gameplay feel, progression, and puzzle loop direction",
      "Visual identity, messaging, and store presentation",
      "Release preparation and launch packaging",
    ],
    tags: ["Original concept", "Game design", "Store launch"],
    impact: [
      "Turned an original puzzle concept into a polished launch-ready mobile product with a distinct visual identity and clear gameplay proposition.",
    ],
    icon: flowblocksIcon,
    images: [
      {
        src: flowblocksStore,
        alt: "Block Puzzle Blast: FlowBlocks gameplay screenshot about never getting stuck.",
      },
      {
        src: flowblocksScreen06,
        alt: "Block Puzzle Blast: FlowBlocks screenshot showing pick-it-up-anytime gameplay.",
      },
      {
        src: flowblocksScreen02,
        alt: "Block Puzzle Blast: FlowBlocks screenshot with the message Endless depth.",
      },
      {
        src: flowblocksScreen05,
        alt: "Block Puzzle Blast: FlowBlocks screenshot introducing special blocks.",
      },
      {
        src: flowblocksScreen01,
        alt: "Block Puzzle Blast: FlowBlocks screenshot with the message Find your flow.",
      },
      {
        src: flowblocksScreen04,
        alt: "Block Puzzle Blast: FlowBlocks screenshot with the message Beat your best.",
      },
    ],
    visualVariant: "flowblocks",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/flowblocks-puzzle-game/id6762732976",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.flowblocks&pli=1",
      },
    ],
    featured: true,
  },
  {
    name: "PuzzleFree.game",
    category: "Mobile app / web product",
    period: "2026",
    role: "Co-founder & Product Lead",
    summary:
      "End-to-end product ownership for a cross-platform puzzle product, from product direction and launch coordination to early growth and distribution setup.",
    scope: [
      "Product direction across web, iOS, and Android",
      "Roadmap, scope, and release coordination",
      "Early growth and distribution setup",
    ],
    workedOn: [
      "Product direction from concept to launch",
      "Roadmap, scope, and release coordination",
      "Cross-platform product (web, iOS, Android)",
      "Early growth setup: acquisition, app store presence, and content",
      "Aligning product, execution, and initial distribution",
    ],
    keyPoints: [
      "Co-founder ownership from concept to launch",
      "Product direction across web, iOS, and Android",
      "Roadmap, scope, and release coordination",
      "Early growth and distribution setup",
    ],
    impact: [
      "Clear path from concept to launch, with delivery and early growth aligned.",
    ],
    icon: puzzleFreeIcon,
    links: [
      {
        label: "Web",
        href: "https://puzzlefree.game/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/jigsaw-puzzles-by-puzzlefree/id6751572041",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.puzzlefree",
      },
    ],
    backdropImages: [
      {
        src: puzzleFreeDaily,
        alt: "PuzzleFree daily puzzle grid",
      },
      {
        src: puzzleFreeGrid,
        alt: "PuzzleFree puzzle cards overview",
      },
    ],
    images: [
      {
        src: puzzleFreeWeb,
        alt: "PuzzleFree web product puzzle library",
      },
      {
        src: puzzleFreeMobile,
        alt: "PuzzleFree mobile product interface",
      },
    ],
    featured: true,
  },
  {
    name: "Kids Jigsaw Puzzles: Toddler",
    category: "Kids mobile product",
    period: "2026",
    role: "Co-founder & Product Lead",
    summary:
      "Product ownership for a kid-focused puzzle experience built from the PuzzleFree product foundation, with direction across child-friendly content, mobile UX, launch, and distribution.",
    scope: [
      "Product direction for a children-focused puzzle app",
      "Content structure, puzzle categories, and kid-safe experience",
      "Release coordination and store presentation",
    ],
    tags: ["Kids product", "Mobile UX", "Content", "Launch"],
    impact: [
      "Extended the PuzzleFree product line into a clearer child-friendly experience with focused content and mobile-first positioning.",
    ],
    icon: puzzleFreeKidsIcon,
    links: [
      {
        label: "Web",
        href: "https://kids.puzzlefree.game/",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/jigsaw-kids-puzzles-puzzlefree/id6761406530",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.enidev.puzzlefreekids",
      },
    ],
    backdropImages: [
      {
        src: jigsawKidsPacks,
        alt: "Jigsaw Kids Puzzles pack library",
      },
      {
        src: jigsawKidsPlay,
        alt: "Jigsaw Kids Puzzles play screen",
      },
    ],
    images: [
      {
        src: jigsawKidsPuzzles,
        alt: "Jigsaw Kids Puzzles puzzle grid",
      },
      {
        src: jigsawKidsMobile,
        alt: "Jigsaw Kids Puzzles mobile category screen",
      },
    ],
    visualVariant: "kids",
  },
  {
    name: "WHMCS migration / optimization",
    category: "Platform migration / process optimization",
    period: "2019-2025",
    role: "Project Lead (Platform & Integrations)",
    summary:
      "A migration and optimization project focused on moving from a custom panel to WHMCS while improving implementation flow and operational modules.",
    scope: [
      "Platform migration: custom panel to WHMCS",
      "Payment gateway integrations: Stripe, PayPal, and related flows",
      "Module and workflow optimization",
      "Developer coordination and delivery",
    ],
    tags: ["WHMCS", "Payments", "Integrations", "Operations"],
    workedOn: [
      "Translated business needs into delivery scope",
      "Kept developers and delivery aligned",
    ],
    impact: [
      "Stronger operating base for platform services, integrations, and future improvements.",
    ],
    hideThumbnail: true,
    systemSummary: {
      from: "Custom panel",
      to: "WHMCS",
      items: ["Payments", "Modules", "Workflows"],
    },
  },
];

const proofPoints = ["Mobile apps", "SaaS", "Web products", "Launch work", "Growth loops"];

const contactMethods = [
  {
    label: "Location",
    text: "Based in Austria • EU and remote teams",
    icon: "pin",
  },
  {
    label: "Email",
    text: "Start the conversation",
    href: "mailto:nadyash.work@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    text: "Connect professionally",
    href: "https://www.linkedin.com/in/nadya-yashchuk/",
    icon: "linkedin",
  },
  {
    label: "Contra",
    text: "View freelance profile",
    href: "https://contra.com/nadzeya_yashchuk_by5wcspl/work?r=nadzeya_yashchuk_by5wcspl",
    icon: "briefcase",
  },
];

const developerProfiles = [
  {
    label: "Apple Developer",
    text: "Published iPhone and iPad apps",
    href: "https://apps.apple.com/us/iphone/search?term=Nadzeya%20Yashchuk",
    icon: "apple",
  },
  {
    label: "Google Play",
    text: "Android releases under my developer profile",
    href: "https://play.google.com/store/apps/developer?id=Nadzeya+Yashchuk",
    icon: "play",
  },
  {
    label: "Garmin Connect IQ",
    text: "Watch faces published in the Garmin catalog",
    href: "https://apps.garmin.com/developer/99d754d0-1b13-4e24-b3af-833f50bc1ad1/apps",
    icon: "watch",
  },
];

const productSignals = [
  "Roadmap keeps changing",
  "Decisions do not stick",
  "Team is busy, but not progressing",
  "Too many opinions slow delivery",
  "Work happens, but nothing ships",
];

const teamMembers = [
  {
    name: "Ivan Lukichev",
    partnerLabel: "Strategic partner",
    role: "Growth Strategy, Product Development & Strategic Backing",
    summary: "Supports search visibility, product growth, app development, and strategic backing across active products.",
    links: [
      {
        href: "https://lukichev.biz/",
        label: "Website",
      },
      {
        href: "https://github.com/ivanlukichev",
        label: "GitHub",
      },
    ],
    photo: teamIvanPhoto,
    photoClass: "team-mark--ivan",
  },
];

export function getPageSeo(pathname = "/") {
  if (pathname === "/") {
    return {
      title: "Nadya Yashchuk | Product & Project Lead in Austria",
      description:
        "Nadya Yashchuk is a Product & Project Lead based in Austria, working across mobile apps, SaaS, and web products.",
    };
  }

  if (pathname === "/impressum") {
    return {
      title: "Impressum / Legal Notice | Nadya Yashchuk",
      description: "Legal notice and business disclosure for nadzeyayashchuk.com.",
    };
  }

  if (pathname === "/privacy") {
    return {
      title: "Privacy Policy | Nadya Yashchuk",
      description: "Privacy policy for nadzeyayashchuk.com and related portfolio content.",
    };
  }

  if (pathname.startsWith("/apps/")) {
    const slug = pathname.replace(/^\/apps\//, "").replace(/\/$/, "");
    const app = storeLaunches.find((item) => getLaunchSlug(item) === slug);

    return {
      title: app ? `${app.title} | Nadya Yashchuk` : "App page | Nadya Yashchuk",
      description:
        app?.summary ||
        "Product publishing, QA testing, store presence, launch packaging, and release readiness.",
    };
  }

  if (pathname.startsWith("/work/")) {
    const slug = pathname.replace(/^\/work\//, "").replace(/\/$/, "");
    const project = projects.find((item) => getProjectSlug(item) === slug);

    return {
      title: project ? `${project.name} | Nadya Yashchuk` : "Work page | Nadya Yashchuk",
      description:
        project?.summary ||
        "Product leadership, launch direction, and structured execution across apps and web products.",
    };
  }

  if (pathname.startsWith("/games/")) {
    const game = gameLandings.find((item) => pathname === getGamePath(item) || pathname.startsWith(`${getGamePath(item)}/`));
    const legalName = game ? getGameLegalName(game) : "Game";

    if (pathname.endsWith("/privacy")) {
      return {
        title: `${legalName} Privacy Policy | Nadya Yashchuk`,
        description: `Privacy policy for ${legalName}.`,
      };
    }

    if (pathname.endsWith("/terms")) {
      return {
        title: `${legalName} Terms of Use | Nadya Yashchuk`,
        description: `Terms of use for ${legalName}.`,
      };
    }

    if (pathname.endsWith("/support")) {
      return {
        title: `${legalName} Support | Nadya Yashchuk`,
        description: `Support page for ${legalName}.`,
      };
    }

    return {
      title: game ? `${game.title} | Nadya Yashchuk` : "Game page | Nadya Yashchuk",
      description:
        game?.summary || "Game launch page with screenshots, store links, and legal information.",
    };
  }

  return {
    title: "Nadya Yashchuk | Product & Project Lead in Austria",
    description:
      "Nadya Yashchuk is a Product & Project Lead based in Austria, working across mobile apps, SaaS, and web products.",
  };
}

export default function App({ initialPath = "/" }) {
  const [path, setPath] = useState(() => (typeof window !== "undefined" ? window.location.pathname : initialPath));
  const launchSlug = path.startsWith("/apps/") ? path.replace(/^\/apps\//, "").replace(/\/$/, "") : "";
  const launchPage = launchSlug ? storeLaunches.find((item) => getLaunchSlug(item) === launchSlug) : null;
  const projectSlug = path.startsWith("/work/") ? path.replace(/^\/work\//, "").replace(/\/$/, "") : "";
  const projectPage = projectSlug ? projects.find((item) => getProjectSlug(item) === projectSlug) : null;
  const gamePage = gameLandings.find((game) => path === getGamePath(game) || path.startsWith(`${getGamePath(game)}/`));

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.14,
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      setPath(window.location.pathname);
      window.scrollTo({ top: 0 });
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  if (
    path === "/impressum" ||
    path === "/privacy" ||
    path.startsWith("/games/") ||
    path.startsWith("/apps/") ||
    path.startsWith("/work/")
  ) {
    return (
      <main>
        <Header path={path} />
        {path === "/impressum" ? <LegalNoticePage /> : null}
        {path === "/privacy" ? <PrivacyPolicyPage /> : null}
        {path.startsWith("/apps/") ? <AppLandingPage app={launchPage} /> : null}
        {path.startsWith("/work/") ? <WorkLandingPage project={projectPage} /> : null}
        {gamePage && path === getGamePath(gamePage) ? <GameLandingPage game={gamePage} /> : null}
        {gamePage && path === `${getGamePath(gamePage)}/privacy` ? (
          <GameLegalPage game={gamePage} type="privacy" />
        ) : null}
        {gamePage && path === `${getGamePath(gamePage)}/terms` ? <GameLegalPage game={gamePage} type="terms" /> : null}
        {gamePage && path === `${getGamePath(gamePage)}/support` ? <GameSupportPage game={gamePage} /> : null}
        {!gamePage && path.startsWith("/games/") ? (
          <GameComingSoonPage title="Game page not found" message="This game page is not available. Please return to the work section." />
        ) : null}
        <Footer />
        <ScrollTopButton />
      </main>
    );
  }

  return (
    <main>
      <Header path={path} />
      <Hero />
      <About />
      <Projects />
      <Help />
      <Team />
      <Contact />
      <Footer />
      <ScrollTopButton />
    </main>
  );
}

function Header({ path }) {
  const [activeHash, setActiveHash] = useState(() => (typeof window !== "undefined" ? window.location.hash : navItems[0].href));
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  const clickedHashRef = useRef(null);
  const clickedHashTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const isHomePath = path === "/";

  useEffect(() => {
    const updateActiveHash = () => {
      if (clickedHashRef.current) {
        setActiveHash(clickedHashRef.current);
        return;
      }

      const scrollBottom = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (documentHeight - scrollBottom < 8) {
        setActiveHash(navItems[navItems.length - 1].href);
        return;
      }

      const viewportHeight = window.innerHeight;
      const sectionVisibility = navItems
        .map((item) => {
          const section = document.querySelector(item.href);
          if (!section) {
            return null;
          }

          return {
            href: item.href,
            rect: section.getBoundingClientRect(),
          };
        })
        .filter(Boolean)
        .map(({ href, rect }) => {
          const visibleTop = Math.max(rect.top, 0);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / Math.min(rect.height, viewportHeight);
          const distanceFromAnchor = Math.abs(rect.top - 120);

          return {
            href,
            score: visibilityRatio * 1000 - distanceFromAnchor,
          };
        });

      const activeSection = sectionVisibility.sort((a, b) => b.score - a.score)[0];

      if (activeSection) {
        setActiveHash(activeSection.href);
        return;
      }

      setActiveHash(window.location.hash || navItems[0].href);
    };

    updateActiveHash();
    window.addEventListener("scroll", updateActiveHash, { passive: true });
    window.addEventListener("hashchange", updateActiveHash);
    window.addEventListener("resize", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", updateActiveHash);
      window.removeEventListener("hashchange", updateActiveHash);
      window.removeEventListener("resize", updateActiveHash);
      window.clearTimeout(clickedHashTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (href) => {
    clickedHashRef.current = href;
    setActiveHash(href);
    window.clearTimeout(clickedHashTimeoutRef.current);
    clickedHashTimeoutRef.current = window.setTimeout(() => {
      clickedHashRef.current = null;
    }, 900);
  };

  useEffect(() => {
    const updateIndicator = () => {
      const activeLink = Array.from(navRef.current?.querySelectorAll("a") || []).find(
        (link) => link.getAttribute("href") === activeHash,
      );

      if (!activeLink) {
        setIndicatorStyle({ opacity: 0 });
        return;
      }

      setIndicatorStyle({
        opacity: 1,
        transform: `translateX(${activeLink.offsetLeft}px)`,
        width: `${activeLink.offsetWidth}px`,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeHash]);

  return (
    <header className="site-header" aria-label="Primary navigation">
      <div className="header-inner">
        <a
          className="brand"
          href={isHomePath ? "#top" : "/"}
          aria-label="Nadya Yashchuk home"
        >
          <span>by</span>
          Nadya Yashchuk
        </a>
        <nav ref={navRef}>
          <span className="nav-indicator" style={indicatorStyle} aria-hidden="true" />
          {navItems.map((item) => (
            <a
              key={item.href}
              href={isHomePath ? item.href : `/${item.href}`}
              aria-current={activeHash === item.href ? "page" : undefined}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={isHomePath ? "#contact" : "/#contact"}>
          Say hello
        </a>
      </div>
    </header>
  );
}

function LegalNoticePage() {
  return (
    <section className="legal-page section">
      <div className="section-inner">
        <div className="legal-shell">
          <p className="eyebrow">Impressum</p>
          <h1>Impressum / Legal Notice</h1>
          <p className="legal-intro">
            Information according to Austrian legal disclosure requirements for this website.
          </p>

          <dl className="legal-list">
            {legalNotice.map((item) => (
              <div className="legal-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="legal-note">
            <h2>Responsible for Content</h2>
            <p>Nadzeya Yashchuk</p>
          </div>

          <a className="button secondary legal-back" href="/">
            Back to portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

function PrivacyPolicyPage() {
  return (
    <section className="legal-page section">
      <div className="section-inner">
        <div className="legal-shell legal-shell-wide">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="legal-intro">Last updated: May 25, 2026</p>

          <div className="privacy-content">
            <section>
              <h2>1. Controller</h2>
              <p>
                The controller responsible for the processing of personal data on this website is:
              </p>
              <address>
                <strong>{privacyContact.name}</strong>
                <br />
                {privacyContact.address}
                <br />
                Email:{" "}
                <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
              </address>
            </section>

            <section>
              <h2>2. Scope of this Privacy Policy</h2>
              <p>
                This Privacy Policy applies to the website operated under nadzeyayashchuk.com and to the
                information made available through this portfolio website. Separate privacy policies may apply to
                individual games, mobile apps, or third-party platforms linked from this website.
              </p>
            </section>

            <section>
              <h2>3. Access Data and Server Log Files</h2>
              <p>
                When you visit this website, technical access data may be processed automatically by the hosting
                provider in server log files. This may include the IP address, date and time of access, requested
                page or file, browser type and version, operating system, referrer URL, transferred data volume,
                and status codes.
              </p>
              <p>
                This processing is necessary to make the website available, maintain technical security, detect
                misuse, and ensure stable operation. The legal basis is the legitimate interest under Article
                6(1)(f) GDPR.
              </p>
            </section>

            <section>
              <h2>4. Contact by Email or Phone</h2>
              <p>
                If you contact me by email or phone, the personal data you provide, such as your name, email
                address, phone number, message content, and any related communication details, will be processed
                to respond to your request and handle the communication.
              </p>
              <p>
                Depending on the nature of your request, the legal basis is Article 6(1)(b) GDPR for pre-contractual
                or contractual communication, or Article 6(1)(f) GDPR for the legitimate interest in responding to
                inquiries.
              </p>
            </section>

            <section>
              <h2>5. Cookies, Analytics, and Tracking</h2>
              <p>
                This website does not currently use analytics tools, advertising trackers, or non-essential cookies
                intentionally placed by the website operator. If this changes, this Privacy Policy will be updated
                and, where legally required, consent will be requested before such technologies are used.
              </p>
            </section>

            <section>
              <h2>6. Links to Third-Party Websites and Stores</h2>
              <p>
                This website contains links to third-party websites and app stores, including Apple App Store,
                Google Play, LinkedIn, Contra, WKO, and project websites. When you open these links, the privacy
                policies and data processing practices of the respective providers apply. I have no control over
                their processing of personal data.
              </p>
            </section>

            <section>
              <h2>7. Recipients and Processors</h2>
              <p>
                Personal data may be processed by technical service providers that are necessary for operating this
                website, in particular hosting and infrastructure providers. Such providers process data only to the
                extent necessary for website operation and security.
              </p>
            </section>

            <section>
              <h2>8. Retention</h2>
              <p>
                Server log files are retained only for as long as necessary for technical operation, security, and
                troubleshooting. Communication data is retained for as long as necessary to process the request and
                to comply with applicable statutory retention obligations or to establish, exercise, or defend legal
                claims.
              </p>
            </section>

            <section>
              <h2>9. Your Rights under the GDPR</h2>
              <p>
                Subject to the legal requirements, you have the right to access, rectification, erasure, restriction
                of processing, data portability, and objection to processing based on legitimate interests. If
                processing is based on consent, you may withdraw that consent at any time with effect for the future.
              </p>
              <p>
                To exercise your rights, please contact{" "}
                <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>.
              </p>
            </section>

            <section>
              <h2>10. Right to Lodge a Complaint</h2>
              <p>
                You also have the right to lodge a complaint with a supervisory authority. In Austria, the competent
                authority is the Austrian Data Protection Authority:
              </p>
              <p>
                Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Vienna, Austria,{" "}
                <a href="https://www.dsb.gv.at/" target="_blank" rel="noreferrer">
                  www.dsb.gv.at
                </a>
              </p>
            </section>

            <section>
              <h2>11. Updates to this Privacy Policy</h2>
              <p>
                This Privacy Policy may be updated if the website, the technologies used, or legal requirements
                change. The current version is available on this page.
              </p>
            </section>
          </div>

          <a className="button secondary legal-back" href="/">
            Back to portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

function ScreenshotGallery({ title, images }) {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const activeImage = activeImageIndex !== null ? images[activeImageIndex] : null;

  useEffect(() => {
    if (!activeImage) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setActiveImageIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("has-lightbox");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("has-lightbox");
    };
  }, [activeImage, images.length]);

  if (!images.length) {
    return null;
  }

  return (
    <>
      <div className="game-screenshot-grid" aria-label={`${title} visuals`}>
        {images.map((image, index) => (
          <button
            className="game-screenshot-thumb"
            key={image.src}
            type="button"
            onClick={() => setActiveImageIndex(index)}
          >
            <img src={assetUrl(image.src)} alt={image.alt} />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot viewer`}
          onClick={() => setActiveImageIndex(null)}
        >
          <button className="lightbox-close" type="button" onClick={() => setActiveImageIndex(null)}>
            Close
          </button>
          <button
            className="lightbox-nav lightbox-nav-prev"
            type="button"
            aria-label="Previous screenshot"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImageIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
            }}
          >
            ‹
          </button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={assetUrl(activeImage.src)} alt={activeImage.alt} />
            <figcaption>
              {activeImageIndex + 1} / {images.length}
            </figcaption>
          </figure>
          <button
            className="lightbox-nav lightbox-nav-next"
            type="button"
            aria-label="Next screenshot"
            onClick={(event) => {
              event.stopPropagation();
              setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length);
            }}
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}

function WatchFaceCatalog({ faces }) {
  if (!faces?.length) {
    return null;
  }

  return (
    <section className="watch-face-section">
      <div className="watch-face-heading">
        <p className="eyebrow">Garmin Connect IQ</p>
        <h2>Watch face catalog</h2>
      </div>
      <div className="watch-face-grid" aria-label="Garmin watch face catalog">
        {faces.map((face) => (
          <article className="watch-face-card" key={face.name}>
            <div className="watch-face-media">
              <img src={assetUrl(face.image)} alt={`${face.name} watch face preview`} />
            </div>
            <div className="watch-face-copy">
              <h3>{face.name}</h3>
              <p>Nadzeya</p>
              <div className="watch-face-meta">
                {face.rating ? <span>Rating {face.rating}</span> : null}
                <span>Free</span>
              </div>
              <div className="watch-face-footer">
                <a href={face.link} target="_blank" rel="noreferrer">
                  Open
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GameLandingPage({ game }) {
  if (game.isDraft) {
    return <GameComingSoonPage game={game} />;
  }

  return (
    <section className="game-page section">
      <div className="section-inner">
        <div className="game-hero">
          <div className="game-icon game-icon-image" aria-hidden="true">
            {game.icon ? <img src={assetUrl(game.icon)} alt="" /> : <span>{game.iconLabel}</span>}
          </div>
          <div className="game-hero-copy">
            <p className="eyebrow">{game.category}</p>
            <h1>{game.title}</h1>
            <p className="role-line">{game.tagline}</p>
            <p>{game.summary}</p>
            <div className="game-actions">
              {game.storeLinks.map((link) => (
                <a className="button primary" href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <ScreenshotGallery title={game.title} images={game.images || []} />

        <div className="game-info-grid">
          <section className="game-info-panel">
            <h2>Highlights</h2>
            <ul>
              {game.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="game-info-panel">
            <h2>Links</h2>
            <div className="game-link-list">
              {[...game.storeLinks, ...game.legalLinks].map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function AppLandingPage({ app }) {
  if (!app) {
    return (
      <GameComingSoonPage
        title="App page not found"
        message="This app page is not available. Please return to the work section."
      />
    );
  }

  const summary =
    app.summary ||
    `${app.category} where I handled publishing, QA testing, store presence, launch packaging, and release readiness.`;
  const impact = app.impact || ["Handled publisher-side launch execution, QA testing, and store readiness."];
  const appLinks = app.links || [];

  return (
    <section className="game-page section">
      <div className="section-inner">
        <div className="game-hero">
          <div className="game-icon game-icon-image" aria-hidden="true">
            {app.icon ? <img src={assetUrl(app.icon)} alt="" /> : <span>{app.iconLabel}</span>}
          </div>
          <div className="game-hero-copy">
            <p className="eyebrow">{app.category}</p>
            <h1>{app.title}</h1>
            <p className="role-line">{app.note}</p>
            <p>{summary}</p>
            {appLinks.length ? (
              <div className="game-actions">
                {appLinks.map((link) => (
                  <a className="button primary" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <ScreenshotGallery title={app.title} images={app.images || []} />

        <div className="game-info-grid">
          <section className="game-info-panel">
            <h2>Role</h2>
            <ul>
              <li>{app.note}</li>
              {impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="game-info-panel">
            <h2>Links</h2>
            <div className="game-link-list">
              {appLinks.length ? (
                appLinks.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))
              ) : (
                <span className="game-link-note">Links will be added when available.</span>
              )}
              <a href="/#projects">Back to Work</a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function WorkLandingPage({ project }) {
  const details = project?.scope || project?.workedOn || project?.keyPoints || [];
  const images = project?.images || project?.backdropImages || [];

  if (!project) {
    return (
      <GameComingSoonPage
        title="Work page not found"
        message="This work page is not available. Please return to the work section."
      />
    );
  }

  return (
    <section className="game-page section">
      <div className="section-inner">
        <div className="game-hero">
          <div className="game-icon game-icon-image" aria-hidden="true">
            {project.icon ? <img src={assetUrl(project.icon)} alt="" /> : <span>{project.iconLabel}</span>}
          </div>
          <div className="game-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.name}</h1>
            <p className="role-line">{project.role}</p>
            <p>{project.summary}</p>
            {project.links?.length ? (
              <div className="game-actions">
                {project.links.map((link) => (
                  <a className="button primary" href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {project.watchFaces?.length ? null : <ScreenshotGallery title={project.name} images={images} />}

        <WatchFaceCatalog faces={project.watchFaces} />

        <div className="game-info-grid">
          <section className="game-info-panel">
            <h2>What I did</h2>
            <ul>
              {details.map((item) => (
                <li key={item}>{item}</li>
              ))}
              {(project.impact || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="game-info-panel">
            <h2>Links</h2>
            <div className="game-link-list">
              {project.links?.length ? (
                project.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))
              ) : (
                <span className="game-link-note">Public links will be added when available.</span>
              )}
              <a href="/#projects">Back to Work</a>
            </div>
          </section>
        </div>
      </div>

    </section>
  );
}

function GameLegalPage({ game, type }) {
  const isPrivacy = type === "privacy";
  const legalName = getGameLegalName(game);
  const title = isPrivacy ? `${legalName} Privacy Policy` : `${legalName} Terms of Use`;

  if (game.isDraft && !game.legalPublished) {
    return (
      <GameComingSoonPage
        game={game}
        title={title}
        message={`The final ${isPrivacy ? "privacy policy" : "terms of use"} will be published here before the game is released.`}
      />
    );
  }

  return (
    <section className="legal-page section">
      <div className="section-inner">
        <div className="legal-shell legal-shell-wide">
          <p className="eyebrow">{isPrivacy ? "Game Privacy" : "Game Terms"}</p>
          <h1>{title}</h1>
          {isPrivacy ? <GamePrivacyPolicyContent game={game} /> : <GameTermsContent game={game} />}
          <a className="button secondary legal-back" href={`/games/${game.slug}`}>
            Back to game page
          </a>
        </div>
      </div>
    </section>
  );
}

function GameComingSoonPage({ game, title = "Game page coming soon", message }) {
  return (
    <section className="legal-page section">
      <div className="section-inner">
        <div className="legal-shell">
          <p className="eyebrow">Coming soon</p>
          <h1>{title}</h1>
          <p className="legal-intro">
            {message ||
              "This game page is prepared, but it is not public yet. Final screenshots, store links, privacy policy, and terms will be added before release."}
          </p>
          <a className="button secondary legal-back" href="/">
            Back to portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

function GamePrivacyPolicyContent({ game }) {
  const legalName = getGameLegalName(game);

  if (game.slug === "tap-me-arrows-freedom") {
    return (
      <>
        <p className="legal-intro">Effective date: June 17, 2026</p>
        <div className="privacy-content">
          <section>
            <h2>1. Summary</h2>
            <ul>
              <li>We do not require an account and do not ask for your name, email, or other direct identifiers.</li>
              <li>Your progress, settings, and unlocked collection stay only on your device.</li>
              <li>The App shows ads through Google AdMob, which may process device and usage information.</li>
              <li>On Apple devices, the App asks for permission before any IDFA-based tracking.</li>
              <li>Optional Remove Ads subscriptions are processed by Apple, not by us.</li>
            </ul>
          </section>

          <section>
            <h2>2. Who Is Responsible</h2>
            <p>
              The publisher of {legalName} is <strong>Nadzeya Yashchuk</strong>. Contact:{" "}
              <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>.
            </p>
            <p>
              For the limited processing described in this policy, the Developer acts as the controller. Where ads
              are displayed, Google LLC and its AdMob services process advertising-related data under their own
              privacy terms.
            </p>
          </section>

          <section>
            <h2>3. Information Processed</h2>
            <h3>3.1 Stored only on your device</h3>
            <p>The following is stored locally using Apple UserDefaults and is not transmitted to us:</p>
            <ul>
              <li>level progress and completed levels;</li>
              <li>stars, achievements, or collection items unlocked;</li>
              <li>app settings such as sound on/off;</li>
              <li>local entitlement state showing whether ads were removed.</li>
            </ul>
            <p>This data is removed when you delete the App.</p>

            <h3>3.2 Google AdMob advertising data</h3>
            <p>To serve and measure ads, Google AdMob may automatically process:</p>
            <ul>
              <li>device advertising identifiers, including IDFA only if you consent through ATT;</li>
              <li>IP address and coarse IP-derived location;</li>
              <li>device information such as model, OS version, language, screen, and network type;</li>
              <li>ad interaction data such as shown, viewed, clicked, or rewarded ads;</li>
              <li>app identifiers and event timestamps.</li>
            </ul>
            <p>
              Google uses this information to deliver personalized ads where permitted, non-personalized ads where
              required, frequency capping, fraud prevention, and performance measurement. See{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                Google Privacy Policy
              </a>{" "}
              and{" "}
              <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
                How Google uses information from sites or apps that use our services
              </a>
              .
            </p>

            <h3>3.3 Apple purchase data</h3>
            <p>
              Optional Remove Ads subscriptions are processed through Apple App Store. Apple handles payment data, and
              we receive only anonymous confirmation that the entitlement is active. See{" "}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
                Apple Privacy Policy
              </a>
              .
            </p>

            <h3>3.4 What we do not do</h3>
            <ul>
              <li>We do not use third-party analytics, crash-reporting, or social-media SDKs.</li>
              <li>We do not collect contacts, photos, microphone, camera, or precise GPS location.</li>
              <li>We do not sell personal information for money.</li>
            </ul>
          </section>

          <section>
            <h2>4. App Tracking Transparency</h2>
            <p>
              On Apple devices, before any tracking that relies on IDFA, the App presents Apple&apos;s App Tracking
              Transparency prompt.
            </p>
            <ul>
              <li>If you allow tracking, AdMob may use IDFA for more relevant ads.</li>
              <li>If you decline, the App continues to work and only non-personalized or contextual ads are served.</li>
            </ul>
            <p>
              You can change this at any time in Settings → Privacy &amp; Security → Tracking on your device.
            </p>
          </section>

          <section>
            <h2>5. Legal Bases for Processing</h2>
            <p>Where GDPR or UK GDPR applies, the following legal bases are used:</p>
            <ul>
              <li>Consent for personalized advertising and IDFA-based tracking;</li>
              <li>Legitimate interests for non-personalized ads, frequency capping, and fraud prevention;</li>
              <li>Performance of a contract to deliver subscriptions you buy and provide the App.</li>
            </ul>
          </section>

          <section>
            <h2>6. How Information Is Used</h2>
            <ul>
              <li>to run the Game and remember progress and settings on your device;</li>
              <li>to display and measure advertising and cap ad frequency;</li>
              <li>to provide and validate Remove Ads subscriptions;</li>
              <li>to prevent fraud, abuse, and technical errors;</li>
              <li>to comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2>7. Sharing and Disclosure</h2>
            <p>We do not sell personal data. Data is shared only with:</p>
            <ul>
              <li>Google AdMob for advertising;</li>
              <li>Apple for purchases and subscription management;</li>
              <li>authorities or third parties where required by law or necessary to protect rights and security.</li>
            </ul>
          </section>

          <section>
            <h2>8. Retention</h2>
            <ul>
              <li>On-device data persists until you delete the App.</li>
              <li>Google and Apple retain their own collected data under their own policies.</li>
            </ul>
          </section>

          <section>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              The App is a general-audience game and is not directed to children under 13, or the equivalent minimum
              age in your country. It is not submitted to Apple&apos;s Kids category. Because it contains third-party
              advertising, it is not intended for young children.
            </p>
          </section>

          <section>
            <h2>10. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, object to
              processing, request portability, or withdraw consent. California residents may also have rights under
              CCPA/CPRA related to disclosure, deletion, correction, and opting out of sharing for cross-context
              behavioral advertising.
            </p>
            <p>
              To exercise rights, contact <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>. Some
              advertising and purchase-related requests may need to be directed to Google or Apple.
            </p>
          </section>

          <section>
            <h2>11. International Transfers</h2>
            <p>
              Google and Apple may process data outside your country, including in the United States, using safeguards
              described in their own privacy policies, such as Standard Contractual Clauses where applicable.
            </p>
          </section>

          <section>
            <h2>12. Security</h2>
            <p>
              We rely on the security of Apple&apos;s platform and the protections provided by Apple and Google as
              service providers. No method of transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2>13. Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. The latest version will be reflected by the Last
              updated date on this page and at this URL.
            </p>
          </section>

          <section>
            <h2>14. Contact</h2>
            <address>
              <strong>Nadzeya Yashchuk</strong>
              <br />
              Email: <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
              <br />
              Privacy Policy URL: https://nadzeyayashchuk.com/games/tap-me-arrows-freedom/privacy
            </address>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="legal-intro">Last updated: May 25, 2026</p>
      <div className="privacy-content">
        <section>
          <h2>1. Controller</h2>
          <p>The controller responsible for the processing of personal data in connection with {game.title} is:</p>
          <address>
            <strong>{privacyContact.name}</strong>
            <br />
            {privacyContact.address}
            <br />
            Email: <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
          </address>
        </section>

        <section>
          <h2>2. About the Game</h2>
          <p>
            {game.title} is a puzzle game. The game can be used offline, does not require account registration, and
            does not ask you to create a profile. The game is monetized through advertising provided by Google AdMob
            and may offer an optional in-app purchase to remove ads.
          </p>
          <p>
            The name of the game may be updated before release. This Privacy Policy will apply to the final game
            name once it is published.
          </p>
        </section>

        <section>
          <h2>3. Data We Do Not Collect Directly</h2>
          <p>
            We do not directly collect your name, email address, phone number, postal address, account login, photos,
            contacts, precise location, or user-generated content through the game. We do not use Firebase, custom
            analytics tools, or our own user account system in the game.
          </p>
        </section>

        <section>
          <h2>4. Advertising through Google AdMob</h2>
          <p>
            The game uses Google AdMob to display ads. Google and its advertising partners may process data such as
            device information, IP address, advertising identifiers, app interactions, approximate location derived
            from technical data, diagnostic information, and ad interaction data. This data may be used to deliver
            ads, limit ad frequency, prevent fraud and abuse, measure ad performance, and, where permitted, show
            personalized ads.
          </p>
          <p>
            Google&apos;s processing of data in advertising services is governed by Google&apos;s own terms and
            privacy documentation. You can learn more about how Google uses information from apps and sites that use
            its services at{" "}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">
              policies.google.com/technologies/partner-sites
            </a>
            .
          </p>
        </section>

        <section>
          <h2>5. Consent for Ads in the EEA, UK, and Switzerland</h2>
          <p>
            For users in the European Economic Area, the United Kingdom, and Switzerland, consent may be requested
            before personalized ads or legally regulated local storage and identifiers are used. Where required, the
            game will use a Google-certified consent management solution, such as Google&apos;s User Messaging
            Platform, to collect and manage ad consent choices.
          </p>
          <p>
            If you do not consent to personalized advertising, the game may still show non-personalized ads where
            available and legally permitted.
          </p>
        </section>

        <section>
          <h2>6. In-App Purchase to Remove Ads</h2>
          <p>
            The game may offer an optional in-app purchase that removes ads. Purchases are processed by the relevant
            app store provider, such as Apple App Store or Google Play. We do not receive your full payment card
            details. The app store may provide transaction-related information needed to confirm purchase status,
            restore purchases, provide the purchased feature, prevent fraud, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2>7. Offline Use</h2>
          <p>
            The game is available offline. When used offline, features that require a network connection, such as
            loading ads, completing in-app purchases, restoring purchases, or opening support and legal links, may
            not be available until the device is online again.
          </p>
        </section>

        <section>
          <h2>8. Legal Bases for Processing</h2>
          <p>
            Where the GDPR applies, the legal bases may include performance of a contract under Article 6(1)(b) GDPR
            for providing the game and purchased features, consent under Article 6(1)(a) GDPR for personalized ads
            or similar technologies where required, legitimate interests under Article 6(1)(f) GDPR for security,
            fraud prevention, basic operation, support, and non-personalized advertising, and legal obligations under
            Article 6(1)(c) GDPR where applicable.
          </p>
        </section>

        <section>
          <h2>9. Third-Party Providers</h2>
          <p>The game may interact with the following third-party providers:</p>
          <ul>
            <li>Google AdMob for advertising and ad measurement.</li>
            <li>Apple App Store for iOS app distribution and in-app purchases.</li>
            <li>Google Play for Android app distribution and in-app purchases.</li>
          </ul>
          <p>
            These providers may process personal data under their own privacy policies and terms. Their practices
            are outside our direct control.
          </p>
        </section>

        <section>
          <h2>10. Retention</h2>
          <p>
            We do not maintain our own user account database for the game. Data processed by third-party providers
            is retained according to their retention policies. Support emails are retained for as long as necessary
            to respond to the request, handle follow-up questions, comply with legal obligations, or establish,
            exercise, or defend legal claims.
          </p>
        </section>

        <section>
          <h2>11. Your Choices</h2>
          <p>
            You can limit ad tracking or reset advertising identifiers in your device settings where supported by
            your operating system. You can also manage consent choices through the consent message shown in the game
            where required. If you purchase the ad removal option, ads should no longer be shown in the game after
            the purchase is active and restored on the relevant platform.
          </p>
        </section>

        <section>
          <h2>12. Your GDPR Rights</h2>
          <p>
            Subject to legal requirements, you may have the right to access, rectification, erasure, restriction of
            processing, data portability, and objection. If processing is based on consent, you may withdraw that
            consent at any time with effect for the future.
          </p>
          <p>
            To exercise your rights, please contact{" "}
            <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>. For data processed directly by
            app stores or Google AdMob, you may also need to contact the relevant provider directly.
          </p>
        </section>

        <section>
          <h2>13. Children&apos;s Privacy</h2>
          <p>
            The game does not intentionally ask users to provide personal contact details or create an account. If
            the final release is configured or marketed as child-directed, the advertising setup and this Privacy
            Policy will be reviewed and updated before publication to reflect the applicable children&apos;s privacy
            and advertising requirements.
          </p>
        </section>

        <section>
          <h2>14. Right to Lodge a Complaint</h2>
          <p>
            You have the right to lodge a complaint with a supervisory authority. In Austria, the competent authority
            is the Austrian Data Protection Authority:
          </p>
          <p>
            Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Vienna, Austria,{" "}
            <a href="https://www.dsb.gv.at/" target="_blank" rel="noreferrer">
              www.dsb.gv.at
            </a>
          </p>
        </section>

        <section>
          <h2>15. Changes to this Privacy Policy</h2>
          <p>
            This Privacy Policy may be updated before or after release if the game name, features, SDKs,
            advertising setup, in-app purchase setup, store requirements, or legal requirements change. The current
            version will be available on this page.
          </p>
        </section>
      </div>
    </>
  );
}

function GameTermsContent({ game }) {
  const legalName = getGameLegalName(game);

  if (game.slug === "tap-me-arrows-freedom") {
    return (
      <>
        <p className="legal-intro">Effective date: June 17, 2026</p>
        <div className="privacy-content">
          <section>
            <h2>1. License</h2>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to download and use{" "}
              {legalName} on Apple-branded devices you own or control, as permitted by Apple&apos;s Usage Rules and
              Apple&apos;s standard Licensed Application End User License Agreement.
            </p>
          </section>

          <section>
            <h2>2. Restrictions</h2>
            <p>You agree not to:</p>
            <ul>
              <li>copy, modify, or create derivative works of the App;</li>
              <li>reverse engineer, decompile, or disassemble the App except where law permits;</li>
              <li>rent, lease, lend, sell, redistribute, or sublicense the App;</li>
              <li>remove or alter proprietary notices;</li>
              <li>use the App unlawfully or interfere with gameplay, ads, or purchases.</li>
            </ul>
          </section>

          <section>
            <h2>3. Advertising</h2>
            <p>
              The App is free to download and is supported by third-party advertising served through Google AdMob,
              including banner-style, interstitial, and optional rewarded ads. Rewarded ads are optional and grant
              in-game benefits only if you choose to watch them.
            </p>
          </section>

          <section>
            <h2>4. Subscriptions and Auto-Renewal</h2>
            <p>The App offers optional auto-renewable Remove Ads subscriptions.</p>
            <ul>
              <li>1 Month — billed monthly;</li>
              <li>6 Months — billed every six months;</li>
              <li>1 Year — billed yearly, with a 3-day free trial for eligible new subscribers.</li>
            </ul>
            <p>
              Prices are shown in the App at purchase. Payment is charged to your Apple ID account on confirmation.
              Subscriptions renew automatically unless canceled at least 24 hours before the end of the current period.
              Renewal is charged within 24 hours before the current period ends. You can manage or cancel
              subscriptions in your App Store account settings. Any unused part of a free trial is forfeited when you
              purchase the subscription where applicable.
            </p>
            <p>
              Billing, refunds, and subscription management are handled by Apple under{" "}
              <a href="https://www.apple.com/legal/internet-services/itunes/" target="_blank" rel="noreferrer">
                Apple Media Services Terms and Conditions
              </a>
              .
            </p>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              The App and its design, graphics, code, trademarks, and related content are owned by the Developer or
              its licensors and are protected by intellectual-property laws.
            </p>
          </section>

          <section>
            <h2>6. User Conduct and Eligibility</h2>
            <p>
              You must be old enough to form a binding contract and use the App under the laws of your country and at
              least the minimum age described in the Privacy Policy.
            </p>
          </section>

          <section>
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              To the maximum extent permitted by law, the App is provided as is and as available, without warranties of
              any kind, whether express or implied, including merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, the Developer is not liable for indirect, incidental, special,
              consequential, or punitive damages, or loss of data, profits, or goodwill arising out of your use of the
              App. Total aggregate liability shall not exceed the greater of the amount you paid in the twelve months
              before the claim or USD 10, except where such limitation is prohibited by law.
            </p>
          </section>

          <section>
            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless the Developer from claims, damages, or expenses arising from
              your misuse of the App or violation of these Terms.
            </p>
          </section>

          <section>
            <h2>10. Termination</h2>
            <p>
              This license remains effective until terminated. It terminates automatically if you breach these Terms.
              On termination, you must stop using and delete the App.
            </p>
          </section>

          <section>
            <h2>11. Apple-Specific Terms</h2>
            <ul>
              <li>These Terms are concluded between you and the Developer, not with Apple.</li>
              <li>The Developer, not Apple, is responsible for maintenance and support.</li>
              <li>
                Apple has no obligation to furnish maintenance or support services and may refund the purchase price, if
                any, for warranty failures.
              </li>
              <li>
                The Developer is responsible for product claims, legal compliance claims, privacy claims, and
                intellectual-property claims related to the App.
              </li>
              <li>
                Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against
                you.
              </li>
            </ul>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Austria, without regard to conflict-of-laws rules, except that
              mandatory consumer-protection laws of your country of residence continue to apply.
            </p>
          </section>

          <section>
            <h2>13. Changes</h2>
            <p>
              We may modify these Terms from time to time. The Last updated date reflects the current version, and
              continued use after changes take effect constitutes acceptance.
            </p>
          </section>

          <section>
            <h2>14. Contact</h2>
            <address>
              <strong>Nadzeya Yashchuk</strong>
              <br />
              Email: <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>
              <br />
              Terms URL: https://nadzeyayashchuk.com/games/tap-me-arrows-freedom/terms
            </address>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <p className="legal-intro">Last updated: May 25, 2026</p>
      <div className="privacy-content">
        <section>
          <h2>1. Agreement to these Terms</h2>
          <p>
            These Terms of Use apply to your download, access, and use of {game.title}, a puzzle game published by
            {privacyContact.name}. By installing, accessing, or using the game, you agree to these Terms. If you do
            not agree, please do not use the game.
          </p>
        </section>

        <section>
          <h2>2. About the Game</h2>
          <p>
            {game.title} is a puzzle game that can be used offline. The game does not require account registration.
            Some features, including ads, in-app purchases, purchase restoration, support links, and legal links,
            may require an internet connection.
          </p>
          <p>
            The name of the game may be updated before release. These Terms will apply to the final game name once
            it is published.
          </p>
        </section>

        <section>
          <h2>3. License to Use the Game</h2>
          <p>
            Subject to your compliance with these Terms and the applicable app store terms, you are granted a
            limited, personal, non-exclusive, non-transferable, revocable license to download and use the game on a
            device that you own or control, solely for personal and non-commercial entertainment purposes.
          </p>
        </section>

        <section>
          <h2>4. App Store Terms</h2>
          <p>
            If you download the game from Apple App Store or Google Play, your use of the game is also subject to
            the terms, policies, and rules of the relevant app store. In the event of a conflict between these Terms
            and mandatory app store rules, the applicable app store rules may apply to the extent required.
          </p>
        </section>

        <section>
          <h2>5. Advertising</h2>
          <p>
            The game may display advertising through Google AdMob. Ads may require an internet connection. Ad
            availability, format, frequency, and personalization may vary depending on your device, location,
            consent choices, ad provider availability, and applicable law.
          </p>
        </section>

        <section>
          <h2>6. In-App Purchase to Remove Ads</h2>
          <p>
            The game may offer an optional in-app purchase to remove ads. Purchases are processed by the app store
            provider from which you downloaded the game, such as Apple App Store or Google Play. Payment, billing,
            refunds, family sharing availability, purchase restoration, and related purchase issues are handled
            according to the rules of the relevant app store.
          </p>
          <p>
            After a valid remove-ads purchase is active and restored on the relevant platform, ads should no longer
            be shown in the game. Some store, consent, support, or legal screens may still use an internet
            connection.
          </p>
        </section>

        <section>
          <h2>7. Refunds</h2>
          <p>
            Refund requests for in-app purchases must be submitted through the app store provider that processed the
            purchase. We do not directly process payment card details and cannot independently issue app store
            refunds outside the mechanisms provided by Apple App Store or Google Play.
          </p>
        </section>

        <section>
          <h2>8. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>copy, modify, reverse engineer, decompile, or attempt to extract the source code of the game;</li>
            <li>use the game for unlawful, fraudulent, harmful, or abusive purposes;</li>
            <li>interfere with the operation, security, advertising, purchase, or store systems of the game;</li>
            <li>use bots, automation, exploits, or unauthorized tools to manipulate the game;</li>
            <li>remove copyright, trademark, or other proprietary notices from the game.</li>
          </ul>
        </section>

        <section>
          <h2>9. Intellectual Property</h2>
          <p>
            The game, including its design, code, gameplay elements, text, graphics, icons, audio, visual assets,
            and other content, is protected by intellectual property laws. Except for the limited license granted in
            these Terms, no rights are transferred to you.
          </p>
        </section>

        <section>
          <h2>10. Updates and Changes</h2>
          <p>
            The game may be updated, changed, interrupted, or discontinued at any time. Updates may add, modify, or
            remove features, levels, ads, purchase handling, compatibility, visual content, or technical
            functionality. Some updates may be required for continued use.
          </p>
        </section>

        <section>
          <h2>11. Availability and Offline Use</h2>
          <p>
            The game is provided as a mobile app and can be used offline, but uninterrupted or error-free operation
            is not guaranteed. Online features may be unavailable because of network issues, app store services,
            ad provider availability, device settings, operating system changes, maintenance, or other technical
            reasons.
          </p>
        </section>

        <section>
          <h2>12. Privacy</h2>
          <p>
            Information about data processing in connection with the game is available in the{" "}
            <a href={`/games/${game.slug}/privacy`}>{game.title} Privacy Policy</a>. By using the game, you
            acknowledge that personal data may be processed as described there.
          </p>
        </section>

        <section>
          <h2>13. No Warranty</h2>
          <p>
            To the maximum extent permitted by applicable law, the game is provided on an &quot;as is&quot; and
            &quot;as available&quot; basis without warranties of any kind. This does not limit any mandatory rights
            you may have under applicable consumer protection law.
          </p>
        </section>

        <section>
          <h2>14. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, we are not liable for indirect, incidental,
            consequential, special, or punitive damages, loss of data, loss of profits, device issues, service
            interruptions, ad provider behavior, store provider behavior, or inability to access online features.
            Nothing in these Terms limits liability where such limitation is not permitted by law.
          </p>
        </section>

        <section>
          <h2>15. Termination</h2>
          <p>
            Your right to use the game may terminate if you violate these Terms. After termination, you must stop
            using the game and delete it from your device if requested. Any provisions that by their nature should
            survive termination will continue to apply.
          </p>
        </section>

        <section>
          <h2>16. Changes to these Terms</h2>
          <p>
            These Terms may be updated before or after release if the game name, features, purchase model, platform
            requirements, app store rules, or legal requirements change. The current version will be available on
            this page.
          </p>
        </section>

        <section>
          <h2>17. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Austria, without prejudice to mandatory consumer protection
            rights that may apply in your country of residence.
          </p>
        </section>

        <section>
          <h2>18. Contact</h2>
          <p>
            Questions about these Terms can be sent to{" "}
            <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>.
          </p>
        </section>
      </div>
    </>
  );
}

function GameSupportPage({ game }) {
  if (game.isDraft && !game.supportPublished) {
    return (
      <GameComingSoonPage
        game={game}
        title={`${game.title} Support`}
        message="The support page will be published here before the game is released."
      />
    );
  }

  return (
    <section className="legal-page section">
      <div className="section-inner">
        <div className="legal-shell">
          <p className="eyebrow">Support</p>
          <h1>{game.title} Support</h1>
          <p className="legal-intro">
            Need help with {game.title}? Please contact{" "}
            <a href={`mailto:${privacyContact.email}`}>{privacyContact.email}</a>.
          </p>
          <a className="button secondary legal-back" href={`/games/${game.slug}`}>
            Back to game page
          </a>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="section-inner hero-inner">
        <div className="hero-content">
          <p className="template-kicker">Hello</p>
          <h1>
            <span>I&apos;m</span> Nadya Yashchuk
          </h1>
          <p className="role-line">Product & Project Lead based in Austria</p>
          <div className="hero-status" aria-label="Availability">
            <span aria-hidden="true" />
            Available for product & delivery clarity
          </div>
          <p className="hero-copy">
            I make product work feel calmer, clearer, and easier to move across
            mobile apps, SaaS, and web products from Austria, across EU and remote teams.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button primary" href="#projects">
              View work
              <IconArrow size={18} aria-hidden="true" />
            </a>
            <a className="button secondary" href="#contact">
              Contact me
            </a>
          </div>
          <div className="hero-proof-wrap">
            <span className="hero-proof-label">Usually involved in</span>
            <div className="hero-proof" aria-label="Product focus areas">
              {proofPoints.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Nadya Yashchuk portrait">
          <div className="hero-portrait">
            <img src={assetUrl(profilePhoto)} alt="Nadya Yashchuk" decoding="async" fetchPriority="high" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="I help product work start stronger, scale cleaner, and get back on track when execution drifts."
      intro="Based in Austria. Remote and EU-based teams."
    >
      <div className="about-grid">
        <div className="about-lead reveal">
          <p>
            I step in when direction is unclear, priorities are overloaded, or
            delivery keeps looping. I clarify ownership, structure the work, and
            move teams toward a real release — whether that means starting from
            scratch or resetting what's already stuck.
          </p>
          <p>
            My background is hands-on: product ownership across web, iOS, and
            Android, from idea to launch. I also support app store presentation
            and launch packaging when products need to show up better in the
            store.
          </p>
          <a className="nav-cta" href="#contact">
            Say hello
          </a>
        </div>
        <div className="signal-card reveal reveal-delay-1">
          <span className="signal-kicker">If this sounds familiar</span>
          <h3>We should talk</h3>
          <ul>
            {productSignals.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const whmcsProject = projects.find((project) => project.name === "WHMCS migration / optimization");
  const featuredProjects = projects.filter((project) => project.name !== "WHMCS migration / optimization");
  const getProjectCardSummary = (project) => project.cardSummary || getFirstSentence(project.summary);
  const getLaunchCardSummary = (item) =>
    item.cardSummary || getFirstSentence(item.summary) || `${item.category} publishing support.`;
  const draftGameItem = gameLandings
    .filter((game) => game.isDraft)
    .map((game) => ({
      name: game.title,
      category: game.category,
      period: "Coming soon",
      role: "Launch preparation",
      summary: "Upcoming game with store links, support, privacy, and terms prepared before release.",
      impact: ["Prepared legal and support structure before app release."],
      links: [
        {
          label: "Learn more",
          href: getGamePath(game),
        },
        ...game.legalLinks,
      ],
      icon: game.icon,
      iconLabel: game.iconLabel,
      type: "launch",
      isDraft: true,
    }));
  const workItems = [
    ...draftGameItem,
    ...featuredProjects.map((project) => ({
      ...project,
      summary: getProjectCardSummary(project),
      links: [
        {
          label: "Learn more",
          href: getProjectPath(project),
        },
        ...(project.links || []),
      ],
    })),
    ...storeLaunches.map((item) => ({
      name: item.title,
      category: item.category,
      period: item.period,
      role: item.note,
      summary: getLaunchCardSummary(item),
      impact: item.impact || ["Handled publisher-side launch execution, QA testing, and store readiness."],
      links:
        item.links?.some((link) => link.label === "Learn more")
          ? item.links
          : [
              {
                label: "Learn more",
                href: getLaunchPath(item),
              },
              ...(item.links || []),
            ],
      icon: item.icon,
      iconLabel: item.iconLabel,
      type: "launch",
    })),
    ...(whmcsProject
      ? [
          {
            ...whmcsProject,
            summary: getProjectCardSummary(whmcsProject),
            links: [
              {
                label: "Learn more",
                href: getProjectPath(whmcsProject),
              },
              ...(whmcsProject.links || []),
            ],
          },
        ]
      : []),
  ];

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Product work, launches, and store presence in one view."
      intro="A compact catalog of larger product work and smaller publishing launches, with the role made explicit on every card."
    >
      <div className="project-stack">
        {workItems.map((project, index) => (
          <article
            className={`project-card project-card-compact reveal ${project.featured ? "is-featured" : ""} ${
              project.type === "launch" ? "project-card-launch" : ""
            } ${project.hideThumbnail ? "project-card-no-thumb" : ""} ${project.isDraft ? "project-card-draft" : ""}`}
            key={project.name}
            role="link"
            tabIndex={0}
            aria-label={`Learn more about ${project.name}`}
            onClick={() => {
              window.location.href = project.links[0].href;
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.location.href = project.links[0].href;
              }
            }}
            style={{ "--reveal-delay": `${Math.min(index, 8) * 45}ms` }}
          >
            <ProjectThumbnail project={project} />
            <div className="project-content">
              <div className="project-heading-row">
                <span className="project-label">{project.category}</span>
                {project.period ? <span className="project-period">{project.period}</span> : null}
              </div>
              <h3>{project.name}</h3>
              {project.tags?.length ? (
                <div className="project-tags" aria-label={`${project.name} focus tags`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              ) : null}
              <p>{project.summary}</p>

              <div className="project-compact-meta">
                <span>{project.role}</span>
                <span>{project.impact[0]}</span>
              </div>
              {project.links?.length ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      href={link.href}
                      key={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectThumbnail({ project }) {
  if (project.hideThumbnail) {
    return null;
  }

  const thumbnail = project.images?.[0] || project.backdropImages?.[0];

  if (project.icon || project.iconLabel) {
    return (
      <figure className="project-thumb project-thumb-icon">
        {project.icon ? <img src={assetUrl(project.icon)} alt="" loading="lazy" decoding="async" /> : <span>{project.iconLabel}</span>}
      </figure>
    );
  }

  if (thumbnail) {
    return (
      <figure
        className={`project-thumb project-thumb-image ${project.visualVariant ? `project-thumb-${project.visualVariant}` : ""}`}
      >
        <img src={assetUrl(thumbnail.src)} alt={thumbnail.alt} loading="lazy" decoding="async" />
      </figure>
    );
  }

  if (project.systemSummary) {
    return (
      <div className="project-thumb project-thumb-summary" aria-hidden="true">
        <span>{project.systemSummary.from}</span>
        <IconArrow size={18} />
        <span>{project.systemSummary.to}</span>
      </div>
    );
  }

  return null;
}

function Help() {
  return (
    <Section
      id="help"
      eyebrow="What I help teams do"
      title="When product work gets messy, I help teams find the next right move."
      intro="I work best where priorities are overloaded, decisions are slow, or delivery needs someone steady enough to turn complexity into progress."
    >
      <div className="expertise-grid">
        {helpAreas.map((item, index) => (
          <article
            className="expertise-card"
            key={item.title}
          >
            <div className="expertise-card-inner reveal" style={{ "--reveal-delay": `${index * 70}ms` }}>
              <span className="service-icon" aria-hidden="true">
                <HelpIcon name={item.icon} size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function StoreLaunches() {
  return (
    <Section
      id="launches"
      eyebrow="Publishing & Store Launches"
      title="Additional mobile titles where I handled publishing, QA testing, and store presence."
      intro="Compact launch support across puzzle, kids, and utility apps — focused on QA testing, store presentation, listing packaging, and publisher-side execution."
    >
      <div className="launch-grid">
        {storeLaunches.map((item, index) => {
          const markLink = item.links?.find((link) => link.label === "Web" || link.label === "Learn more");

          return (
            <article className="launch-card reveal" key={item.title} style={{ "--reveal-delay": `${index * 60}ms` }}>
              {markLink ? (
                <a
                  className="launch-mark launch-mark-link"
                  href={markLink.href}
                  target={markLink.href.startsWith("http") ? "_blank" : undefined}
                  rel={markLink.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={`Open ${item.title} website`}
                >
                  {item.icon ? <img className={item.iconClass} src={assetUrl(item.icon)} alt="" /> : <span>{item.iconLabel}</span>}
                </a>
              ) : (
                <div className="launch-mark" aria-hidden="true">
                  {item.icon ? <img className={item.iconClass} src={assetUrl(item.icon)} alt="" /> : <span>{item.iconLabel}</span>}
                </div>
              )}
              <div className="launch-copy">
                <div className="launch-meta">
                  <span className="launch-category">{item.category}</span>
                  <span className="launch-period">{item.period}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                {item.links?.length ? (
                  <div className="launch-links">
                    {item.links.map((link) => (
                      <a
                        href={link.href}
                        key={`${item.title}-${link.label}`}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : item.comingSoon ? (
                  <div className="launch-links">
                    <span className="launch-soon">Coming soon</span>
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="section-inner">
        <div className="contact-inner reveal">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need someone to bring order to the product work?</h2>
            <p>
              If your roadmap is messy, a launch is coming, or the team needs
              clearer priorities, send me a note. Based in Austria, I work with both EU-based and remote teams.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:nadyash.work@gmail.com">
              Email me
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/nadya-yashchuk/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="contact-card-grid reveal reveal-delay-1" aria-label="Contact links">
          {contactMethods.map((method) =>
            method.href ? (
              <a
                className="contact-card"
                href={method.href}
                key={method.label}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-card-icon" aria-hidden="true">
                  <ContactIcon name={method.icon} size={22} />
                </span>
                <span>
                  <strong>{method.label}</strong>
                  <small>{method.text}</small>
                </span>
              </a>
            ) : (
              <div className="contact-card contact-card-static" key={method.label}>
                <span className="contact-card-icon" aria-hidden="true">
                  <ContactIcon name={method.icon} size={22} />
                </span>
                <span>
                  <strong>{method.label}</strong>
                  <small>{method.text}</small>
                </span>
              </div>
            ),
          )}
        </div>
        <div className="contact-profile-block reveal reveal-delay-2">
          <div className="contact-profile-heading">
            <p className="eyebrow">Developer profiles</p>
            <p>Public storefronts and publishing profiles where my released apps and watch faces are listed.</p>
          </div>
          <div className="contact-card-grid contact-card-grid-profiles" aria-label="Developer profile links">
            {developerProfiles.map((profile) => (
              <a className="contact-card" href={profile.href} key={profile.label} target="_blank" rel="noreferrer">
                <span className="contact-card-icon" aria-hidden="true">
                  <ContactIcon name={profile.icon} size={22} />
                </span>
                <span>
                  <strong>{profile.label}</strong>
                  <small>{profile.text}</small>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const isSinglePartner = teamMembers.length === 1;

  return (
    <Section
      id="team"
      eyebrow="Current collaborators"
      title="People I work closely with on active products."
      intro="The people I stay in close touch with as we build, grow, and support current products together."
    >
      <div className={`team-grid${isSinglePartner ? " team-grid-solo" : ""}`}>
        {teamMembers.map((member, index) => (
          <article
            className={`team-card reveal${member.partnerLabel ? " team-card-featured" : ""}`}
            key={member.name}
            style={{ "--reveal-delay": `${index * 70}ms` }}
          >
            <div className={`team-mark ${member.photoClass || ""}`} aria-hidden="true">
              <img src={assetUrl(member.photo)} alt="" />
            </div>
            <div className="team-copy">
              {member.partnerLabel ? <span className="team-badge">{member.partnerLabel}</span> : null}
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p>{member.summary}</p>
              <div className="team-links">
                {member.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-inner">
        <p>
          © {new Date().getFullYear()} <strong>Nadya Yashchuk.</strong> Product work with clearer direction.
        </p>
        <div className="footer-links">
          <a href="/impressum">Impressum / Legal Notice</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-top ${isVisible ? "is-visible" : ""}`}
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <IconArrowUp size={20} aria-hidden="true" />
    </button>
  );
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section className="section" id={id}>
      <div className="section-inner">
        <div className="section-heading reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectMedia({ project }) {
  if (project.systemSummary) {
    return (
      <div className="project-media project-media-summary" aria-label={`${project.name} system summary`}>
        <div className="summary-route" aria-hidden="true">
          <div className="summary-platform">{project.systemSummary.from}</div>
          <div className="summary-arrow" />
          <div className="summary-platform summary-platform-target">{project.systemSummary.to}</div>
        </div>
        <div className="summary-items" aria-hidden="true">
          {project.systemSummary.items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    );
  }

  if (project.images?.length) {
    const visualVariant = project.visualVariant ? `project-media-${project.visualVariant}` : "";

    return (
      <div
        className={`project-media project-media-images ${visualVariant} ${
          project.images.length === 1 ? "is-single" : ""
        }`}
      >
        {project.backdropImages?.slice(0, 2).map((image, index) => (
          <figure className={`project-image-backdrop project-image-backdrop-${index + 1}`} key={image.src}>
            <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
        {project.images.map((image, index) => (
          <figure
            className={index === 0 ? "project-image-main" : `project-image-side project-image-support-${index}`}
            key={image.src}
          >
            <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    );
  }

  return null;
}

function IconBase({ children, size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

function IconArrow(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function IconCheck(props) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
      <circle cx="12" cy="12" r="9" />
    </IconBase>
  );
}

function IconArrowUp(props) {
  return (
    <IconBase {...props}>
      <path d="m6 14 6-6 6 6" />
      <path d="M12 8v12" />
    </IconBase>
  );
}

function HelpIcon({ name, ...props }) {
  const icons = {
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    map: (
      <>
        <path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
        <path d="M9 3v15" />
        <path d="M15 6v15" />
      </>
    ),
    flow: (
      <>
        <rect x="3" y="4" width="7" height="6" rx="1.5" />
        <rect x="14" y="14" width="7" height="6" rx="1.5" />
        <path d="M10 7h3a3 3 0 0 1 3 3v4" />
        <path d="m14 12 2 2 2-2" />
      </>
    ),
    rocket: (
      <>
        <path d="M14 4c3.2.7 5.3 2.8 6 6l-6.5 6.5-4-4L14 4Z" />
        <path d="M9.5 12.5 5 13l2-4 4.5.5" />
        <path d="M13.5 16.5 13 21l4-2 0.5-4.5" />
        <circle cx="15" cy="9" r="1.5" />
      </>
    ),
    pulse: (
      <>
        <path d="M4 13h4l2-7 4 12 2-5h4" />
        <path d="M4 19h16" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
  };

  return <IconBase {...props}>{icons[name] || icons.compass}</IconBase>;
}

function ContactIcon({ name, ...props }) {
  const icons = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8v.01" />
        <path d="M12 16v-5" />
        <path d="M12 13a2 2 0 0 1 4 0v3" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5h6v2" />
        <path d="M3 12h18" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6-5.27-6-11a6 6 0 1 1 12 0c0 5.73-6 11-6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    apple: (
      <>
        <path d="M15.2 4.5c-.8.1-1.8.6-2.4 1.4-.6.7-1.1 1.8-1 2.8.9.1 1.9-.4 2.5-1.1.7-.8 1.1-1.8.9-3.1Z" />
        <path d="M18.4 12.8c0-2.1 1.7-3.2 1.8-3.3-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.7-3.2.7-.7 0-1.7-.7-2.8-.7-1.4 0-2.8.8-3.5 2-.8 1.4-.2 3.5.6 5 .8 1.5 1.8 3.1 3.1 3 .8 0 1.1-.5 2.1-.5s1.3.5 2.1.5c1.4 0 2.2-1.5 3-2.9.5-1 .8-1.9.9-1.9-.1 0-1-.4-1-.2Z" />
      </>
    ),
    play: (
      <>
        <path d="M7 5.5v13l10-6.5Z" />
        <path d="M7 5.5 14.8 10" />
        <path d="M7 18.5 14.8 14" />
      </>
    ),
    watch: (
      <>
        <rect x="8" y="3" width="8" height="4" rx="1.5" />
        <rect x="8" y="17" width="8" height="4" rx="1.5" />
        <rect x="5" y="6.5" width="14" height="11" rx="3" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
  };

  return <IconBase {...props}>{icons[name] || icons.mail}</IconBase>;
}
