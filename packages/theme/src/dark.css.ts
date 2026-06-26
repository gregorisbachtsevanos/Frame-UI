import { createTheme } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

export const darkTheme = createTheme(vars, {
  // Semantic Colors (Dark Mode)
  color: {
    // Text colors
    text: "#f9fafb", // neutral-50
    textSecondary: "#e5e7eb", // neutral-200
    textMuted: "#9ca3af", // neutral-400
    textInverted: "#111827", // neutral-900

    // Surface colors
    surface: "#111827", // neutral-900
    surfaceSecondary: "#1f2937", // neutral-800
    surfaceTertiary: "#374151", // neutral-700

    // Border colors
    border: "#374151", // neutral-700
    borderSecondary: "#4b5563", // neutral-600
    borderStrong: "#6b7280", // neutral-500

    // Semantic colors
    primary: "#60a5fa", // blue-400
    primaryHover: "#93c5fd", // blue-300
    primaryLight: "#1e3a8a", // blue-900

    secondary: "#c084fc", // violet-400
    secondaryHover: "#d8b4fe", // violet-300
    secondaryLight: "#581c87", // violet-900

    success: "#4ade80", // green-400
    successHover: "#86efac", // green-300
    successLight: "#145231", // green-900

    warning: "#fbbf24", // amber-400
    warningHover: "#fcd34d", // amber-300
    warningLight: "#78350f", // amber-900

    danger: "#f87171", // red-400
    dangerHover: "#fca5a5", // red-300
    dangerLight: "#7f1d1d", // red-900

    info: "#22d3ee", // cyan-400
    infoHover: "#67e8f9", // cyan-300
    infoLight: "#164e63", // cyan-900

    // Focus and interaction
    focus: "#2563eb", // blue-600
    focusRing: "#2563eb", // blue-600
    disabled: "#4b5563", // neutral-600
    disabledText: "#6b7280", // neutral-500

    // Overlay
    overlay: "rgba(0, 0, 0, 0.8)",
  },

  // Space remains the same
  space: {
    0: "0",
    0.5: "2px",
    1: "4px",
    1.5: "6px",
    2: "8px",
    2.5: "10px",
    3: "12px",
    3.5: "14px",
    4: "16px",
    5: "20px",
    6: "24px",
    7: "28px",
    8: "32px",
    9: "36px",
    10: "40px",
    12: "48px",
    14: "56px",
    16: "64px",
    20: "80px",
    24: "96px",
  },

  // Radius remains the same
  radius: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    "2xl": "16px",
    "3xl": "20px",
    full: "9999px",
  },

  // Font remains the same
  font: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Fira Code", "Courier New", monospace',
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
  },

  fontWeight: {
    thin: "100",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Dark mode shadows are stronger
  shadow: {
    none: "none",
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.2)",
  },

  transition: {
    fast: "150ms ease-out",
    normal: "250ms ease-out",
    slow: "350ms ease-out",
    slower: "500ms ease-out",
  },

  duration: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
  },

  timingFunction: {
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  size: {
    full: "100%",
    screen: "100vw",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
});
