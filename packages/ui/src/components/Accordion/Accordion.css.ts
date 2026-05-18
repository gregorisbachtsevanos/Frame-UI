import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  overflow: "hidden",
  boxShadow: vars.shadow.sm,
});

export const trigger = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: vars.space.lg,

  background: "transparent",
  border: "none",

  color: vars.color.text,

  fontFamily: vars.font.body,
  fontSize: vars.fontSize.md,
  fontWeight: 600,

  cursor: "pointer",

  transition: vars.transition.fast,

  selectors: {
    "&:hover": {
      background: vars.color.surfaceSecondary,
    },

    "&:focus-visible": {
      outline: `3px solid ${vars.color.focusRing}`,
      outlineOffset: "-3px",
    },
  },
});

export const content = style({
  padding: vars.space.lg,
  paddingTop: 0,

  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.6,
});

export const icon = style({
  transition: vars.transition.normal,
});

export const iconOpen = style({
  transform: "rotate(180deg)",
});
