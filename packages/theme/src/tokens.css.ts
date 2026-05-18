import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    text: "#0f172a",
    textMuted: "#475569",

    surface: "#ffffff",
    surfaceSecondary: "#f8fafc",

    border: "#e2e8f0",
    borderStrong: "#cbd5e1",

    primary: "#2563eb",
    primaryHover: "#1d4ed8",

    focusRing: "#93c5fd",
  },

  space: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },

  font: {
    body: "Inter, sans-serif",
  },

  fontSize: {
    sm: "14px",
    md: "16px",
    lg: "18px",
  },

  shadow: {
    sm: "0 1px 2px rgba(15,23,42,0.06)",
    md: "0 2px 10px rgba(15,23,42,0.08)",
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
  },
});
