import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.md,
  fontWeight: 500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  border: `1px solid transparent`,
  whiteSpace: "nowrap",

  selectors: {
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },

    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "2px",
    },
  },
});

export const size = styleVariants({
  sm: {
    height: "28px",
    padding: `${vars.space[1]} ${vars.space[2]}`,
    fontSize: vars.fontSize.xs,
  },

  md: {
    height: "36px",
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.sm,
  },

  lg: {
    height: "44px",
    padding: `${vars.space[2]} ${vars.space[4]}`,
    fontSize: vars.fontSize.base,
  },
});

export const variant = styleVariants({
  default: {
    background: vars.color.surfaceSecondary,
    color: vars.color.text,
    border: `1px solid ${vars.color.border}`,

    selectors: {
      "&:hover": {
        background: vars.color.surfaceTertiary,
      },
    },
  },

  outline: {
    background: "transparent",
    color: vars.color.text,
    border: `1px solid ${vars.color.border}`,

    selectors: {
      "&:hover": {
        background: vars.color.surfaceSecondary,
      },
    },
  },
});

export const pressed = style({
  background: vars.color.primary,
  color: vars.color.textInverted,
  border: `1px solid ${vars.color.primary}`,

  selectors: {
    "&:hover": {
      background: vars.color.primaryHover,
    },
  },
});

