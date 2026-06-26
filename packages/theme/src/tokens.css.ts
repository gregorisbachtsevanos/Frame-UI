import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  // Semantic Colors (Light Mode)
  color: {
    // Text colors
    text: "#111827", // neutral-900
    textSecondary: "#374151", // neutral-700
    textMuted: "#6b7280", // neutral-500
    textInverted: "#ffffff", // white

    // Surface colors
    surface: "#ffffff", // white
    surfaceSecondary: "#f9fafb", // neutral-50
    surfaceTertiary: "#f3f4f6", // neutral-100

    // Border colors
    border: "#e5e7eb", // neutral-200
    borderSecondary: "#d1d5db", // neutral-300
    borderStrong: "#9ca3af", // neutral-400

    // Semantic colors
    primary: "#2563eb", // blue-600
    primaryHover: "#1d4ed8", // blue-700
    primaryLight: "#dbeafe", // blue-100

    secondary: "#9333ea", // violet-600
    secondaryHover: "#7e22ce", // violet-700
    secondaryLight: "#f3e8ff", // violet-100

    success: "#16a34a", // green-600
    successHover: "#15803d", // green-700
    successLight: "#dcfce7", // green-100

    warning: "#d97706", // amber-600
    warningHover: "#b45309", // amber-700
    warningLight: "#fef3c7", // amber-100

    danger: "#dc2626", // red-600
    dangerHover: "#b91c1c", // red-700
    dangerLight: "#fee2e2", // red-100

    info: "#0891b2", // cyan-600
    infoHover: "#0e7490", // cyan-700
    infoLight: "#cff9fe", // cyan-100

    // Focus and interaction
    focus: "#93c5fd", // blue-300
    focusRing: "#93c5fd", // blue-300
    disabled: "#d1d5db", // neutral-300
    disabledText: "#9ca3af", // neutral-400

    // Overlay
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  // Spacing system
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

  // Border radius
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

  // Typography
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

  // Shadows
  shadow: {
    none: "none",
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
  },

  // Transitions and animations
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

  // Sizing
  size: {
    full: "100%",
    screen: "100vw",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
});
