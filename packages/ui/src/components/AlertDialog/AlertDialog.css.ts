import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const overlay = style({
  position: "fixed",
  inset: 0,
  background: "rgba(15, 23, 42, 0.55)",
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space.xl,
  zIndex: 1000,
});

export const root = style({
  width: "100%",
  maxWidth: "480px",

  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,

  boxShadow: vars.shadow.md,

  padding: vars.space.xl,

  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 700,
  margin: 0,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  lineHeight: 1.5,
  margin: 0,
});

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space.lg,
});

export const button = style({
  border: "none",
  borderRadius: vars.radius.md,
  padding: `${vars.space.md} ${vars.space.xl}`,
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  cursor: "pointer",
  transition: vars.transition.fast,

  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: 2,
    },
  },
});

export const buttonTone = styleVariants({
  secondary: {
    background: vars.color.surfaceSecondary,
    color: vars.color.text,

    selectors: {
      "&:hover": {
        background: vars.color.border,
      },
    },
  },

  danger: {
    background: "#fca5a5",
    color: "#ffffff",

    selectors: {
      "&:hover": {
        background: "#991b1b",
      },
    },
  },
});
