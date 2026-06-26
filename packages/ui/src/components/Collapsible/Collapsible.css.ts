import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  flexDirection: "column",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  overflow: "hidden",
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: vars.space[4],
  background: "transparent",
  border: "none",
  color: vars.color.text,
  fontSize: vars.fontSize.base,
  fontWeight: 600,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  textAlign: "left",

  selectors: {
    "&:hover": {
      background: vars.color.surfaceSecondary,
    },

    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "-2px",
    },
  },
});

export const content = style({
  padding: `0 ${vars.space[4]} ${vars.space[4]}`,
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.relaxed,
});

