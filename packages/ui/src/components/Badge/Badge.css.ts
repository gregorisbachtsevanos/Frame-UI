import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space.sm,

  whiteSpace: "nowrap",
  verticalAlign: "middle",

  borderRadius: "999px",

  fontWeight: 700,
  letterSpacing: "0.02em",

  border: "1px solid transparent",

  transition: vars.transition.fast,

  userSelect: "none",
});

export const size = styleVariants({
  sm: {
    minHeight: "20px",
    padding: "0 8px",
    fontSize: vars.fontSize.xs,
  },

  md: {
    minHeight: "24px",
    padding: "0 10px",
    fontSize: vars.fontSize.sm,
  },

  lg: {
    minHeight: "30px",
    padding: "0 14px",
    fontSize: vars.fontSize.md,
  },
});

export const tone = styleVariants({
  neutral: {
    background: vars.color.surfaceSecondary,
    color: vars.color.textMuted,
    borderColor: vars.color.border,
  },

  primary: {
    background: vars.color.primary,
    color: vars.color.primary,
    borderColor: vars.color.primaryHover,
  },

  success: {
    background: "#ecfdf5",
    color: "#047857",
    borderColor: "#a7f3d0",
  },

  warning: {
    background: "#fffbeb",
    color: "#b45309",
    borderColor: "#fde68a",
  },

  danger: {
    background: "#fef2f2",
    color: "#b91c1c",
    borderColor: "#fecaca",
  },
});

export const solid = styleVariants({
  true: {},

  false: {},
});

export const solidTone = styleVariants({
  neutral: {
    background: vars.color.text,
    color: "#ffffff",
    borderColor: vars.color.text,
  },

  primary: {
    background: vars.color.primary,
    color: "#ffffff",
    borderColor: vars.color.primary,
  },

  success: {
    background: "#10b981",
    color: "#ffffff",
    borderColor: "#10b981",
  },

  warning: {
    background: "#f59e0b",
    color: "#ffffff",
    borderColor: "#f59e0b",
  },

  danger: {
    background: "#991b1b",
    color: "#ffffff",
    borderColor: "#991b1b",
  },
});
