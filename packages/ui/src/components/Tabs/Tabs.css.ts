import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  flexDirection: "column",
});

export const variant = styleVariants({
  line: {},

  enclosed: {
    borderRadius: vars.radius.lg,
    border: `1px solid ${vars.color.border}`,
    background: vars.color.surface,
    overflow: "hidden",
  },
});

export const tablist = style({
  display: "flex",
  alignItems: "flex-end",
  borderBottom: `1px solid ${vars.color.border}`,
  gap: vars.space[3],
  padding: `0 ${vars.space[4]}`,
});

export const tab = style({
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: `${vars.radius.md} ${vars.radius.md} 0 0`,
  background: "transparent",
  border: "none",
  color: vars.color.textSecondary,
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  borderBottom: `2px solid transparent`,
  marginBottom: "-1px",

  selectors: {
    "&:hover": {
      color: vars.color.text,
    },

    "&[aria-selected=true]": {
      color: vars.color.primary,
      borderBottomColor: vars.color.primary,
    },

    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "-2px",
    },
  },
});

export const panel = style({
  padding: vars.space[4],
  color: vars.color.text,
});

