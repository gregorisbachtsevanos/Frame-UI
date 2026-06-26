import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",
  display: "inline-block",
});

export const trigger = style({
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover": {
      background: vars.color.surfaceSecondary,
    },

    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "2px",
    },
  },
});

export const content = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 1000,
  minWidth: "160px",
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  boxShadow: vars.shadow.lg,
  padding: vars.space[4],
  color: vars.color.text,
});

