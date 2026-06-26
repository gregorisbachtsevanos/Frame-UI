import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const overlay = style({
  position: "fixed",
  inset: 0,
  background: vars.color.overlay,
  backdropFilter: "blur(4px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space[6],
  zIndex: 1000,
});

export const root = style({
  width: "100%",
  maxWidth: "480px",

  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,

  boxShadow: vars.shadow.lg,

  padding: vars.space[6],

  display: "flex",
  flexDirection: "column",
  gap: vars.space[4],
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[3],
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
  gap: vars.space[3],
});

export const button = style({
  border: "none",
  borderRadius: vars.radius.md,
  padding: `${vars.space[2]} ${vars.space[4]}`,
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
    background: vars.color.danger,
    color: vars.color.textInverted,

    selectors: {
      "&:hover": {
        background: vars.color.dangerHover,
      },
    },
  },
});
