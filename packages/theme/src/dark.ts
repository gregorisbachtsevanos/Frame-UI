import { createTheme } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

export const darkTheme = createTheme(vars, {
  color: {
    text: "#f8fafc",
    textMuted: "#cbd5e1",

    surface: "#0f172a",
    surfaceSecondary: "#1e293b",

    border: "#334155",
    borderStrong: "#475569",

    primary: "#60a5fa",
    primaryHover: "#93c5fd",

    focusRing: "#2563eb",
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
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.3)",
    md: "0 4px 20px rgba(0,0,0,0.4)",
  },

  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
  },
});
