import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",
  display: "inline-block",
});

export const trigger = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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

export const menu = style({
  position: "absolute",
  top: "calc(100% + 8px)",
  left: 0,
  zIndex: 1000,
  minWidth: "160px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  boxShadow: vars.shadow.lg,
  padding: `${vars.space[1]} 0`,
  listStyle: "none",
  margin: 0,
});

export const item = style({
  padding: 0,
  margin: 0,
});

export const itemButton = style({
  display: "block",
  width: "100%",
  padding: `${vars.space[2]} ${vars.space[3]}`,
  textAlign: "left",
  border: "none",
  background: "transparent",
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover": {
      background: vars.color.surfaceSecondary,
    },

    "&:focus-visible": {
      outline: "none",
      background: vars.color.surfaceSecondary,
    },
  },
});

