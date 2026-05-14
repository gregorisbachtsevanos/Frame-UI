import { assignVars, createTheme, globalStyle, style } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

const lightValues = {
  color: {
    background: { default: "#ffffff", hover: "#f8fafc", active: "#f1f5f9", disabled: "#f8fafc" },
    foreground: { default: "#0f172a", hover: "#1e293b", active: "#020617", disabled: "#94a3b8" },
    primary: { default: "#2563eb", hover: "#1d4ed8", active: "#1e40af", disabled: "#93c5fd" },
    secondary: { default: "#e2e8f0", hover: "#cbd5e1", active: "#94a3b8", disabled: "#e2e8f0" },
    muted: { default: "#f1f5f9", hover: "#e2e8f0", active: "#cbd5e1", disabled: "#f8fafc" },
    accent: { default: "#0f766e", hover: "#0d9488", active: "#115e59", disabled: "#99f6e4" },
    danger: { default: "#dc2626", hover: "#b91c1c", active: "#991b1b", disabled: "#fecaca" },
    border: { subtle: "#e2e8f0", strong: "#cbd5e1", focus: "#60a5fa" }
  },
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px"
  },
  radius: { sm: "6px", md: "8px", lg: "10px", xl: "12px" },
  shadow: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.08)",
    md: "0 8px 24px rgba(15, 23, 42, 0.08)",
    lg: "0 18px 36px rgba(15, 23, 42, 0.14)"
  },
  font: {
    family: {
      base: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    },
    weight: { regular: "400", medium: "500", semibold: "600" }
  },
  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px", xl: "22px", xxl: "28px" },
  lineHeight: { tight: "1.2", normal: "1.45", relaxed: "1.6" },
  transition: { fast: "120ms ease", normal: "180ms ease" },
  zIndex: { overlay: "40", modal: "50", popover: "60", tooltip: "70" }
} as const;

const darkValues = {
  color: {
    background: { default: "#0f172a", hover: "#111c32", active: "#1e293b", disabled: "#0b1224" },
    foreground: { default: "#e2e8f0", hover: "#f8fafc", active: "#ffffff", disabled: "#64748b" },
    primary: { default: "#3b82f6", hover: "#60a5fa", active: "#2563eb", disabled: "#1e3a8a" },
    secondary: { default: "#334155", hover: "#475569", active: "#64748b", disabled: "#1f2937" },
    muted: { default: "#1e293b", hover: "#334155", active: "#475569", disabled: "#0f172a" },
    accent: { default: "#14b8a6", hover: "#2dd4bf", active: "#0f766e", disabled: "#134e4a" },
    danger: { default: "#ef4444", hover: "#f87171", active: "#dc2626", disabled: "#7f1d1d" },
    border: { subtle: "#334155", strong: "#475569", focus: "#3b82f6" }
  },
  space: lightValues.space,
  radius: lightValues.radius,
  shadow: {
    sm: "0 1px 2px rgba(2, 6, 23, 0.32)",
    md: "0 8px 24px rgba(2, 6, 23, 0.4)",
    lg: "0 18px 36px rgba(2, 6, 23, 0.52)"
  },
  font: lightValues.font,
  fontSize: lightValues.fontSize,
  lineHeight: lightValues.lineHeight,
  transition: lightValues.transition,
  zIndex: lightValues.zIndex
} as const;

export const lightTheme = createTheme(vars, lightValues);
export const darkTheme = createTheme(vars, darkValues);

export const themeRoot = style({
  minHeight: "100%",
  color: vars.color.foreground.default,
  backgroundColor: vars.color.background.default,
  fontFamily: vars.font.family.base,
  lineHeight: vars.lineHeight.normal
});

globalStyle(":root", {
  vars: assignVars(vars, lightValues),
  colorScheme: "light"
});

globalStyle("*", { boxSizing: "border-box" });
globalStyle("html, body, #root", { margin: 0, padding: 0, minHeight: "100%" });
globalStyle("body", {
  backgroundColor: vars.color.background.default,
  color: vars.color.foreground.default,
  fontFamily: vars.font.family.base,
  fontSize: vars.fontSize.md,
  lineHeight: vars.lineHeight.normal
});

globalStyle("button, input, select, textarea", {
  fontFamily: vars.font.family.base
});
