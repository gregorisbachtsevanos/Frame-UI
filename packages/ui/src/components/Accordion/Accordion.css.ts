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

  padding: `${vars.space[4]} ${vars.space[4]}`,

  background: "transparent",
  border: "none",

  color: vars.color.text,

  fontFamily: vars.font.body,
  fontSize: vars.fontSize.base,
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
  padding: `0 ${vars.space[4]} ${vars.space[4]}`,

  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.relaxed,
});

export const icon = style({
  transition: vars.transition.normal,
});

export const iconOpen = style({
  transform: "rotate(180deg)",
});
