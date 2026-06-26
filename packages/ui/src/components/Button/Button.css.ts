import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space[2],
  border: "none",
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.semibold,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  outline: "none",

  selectors: {
    "&:hover:not(:disabled)": {
      transform: "translateY(-2px)",
    },
    "&:active:not(:disabled)": {
      transform: "translateY(0)",
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 3px ${vars.color.surface}, 0 0 0 6px ${vars.color.focusRing}`,
    },
  },
});

export const variant = styleVariants({
  primary: {
    backgroundColor: vars.color.primary,
    color: vars.color.textInverted,
    boxShadow: vars.shadow.md,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.primaryHover,
        boxShadow: vars.shadow.lg,
      },
    },
  },
  secondary: {
    backgroundColor: vars.color.secondary,
    color: vars.color.textInverted,
    boxShadow: vars.shadow.md,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.secondaryHover,
        boxShadow: vars.shadow.lg,
      },
    },
  },
  outline: {
    backgroundColor: "transparent",
    color: vars.color.primary,
    border: `2px solid ${vars.color.primary}`,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.primaryLight,
      },
    },
  },
  ghost: {
    backgroundColor: "transparent",
    color: vars.color.primary,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.primaryLight,
      },
    },
  },
  danger: {
    backgroundColor: vars.color.danger,
    color: vars.color.textInverted,
    boxShadow: vars.shadow.md,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.dangerHover,
        boxShadow: vars.shadow.lg,
      },
    },
  },
});

export const size = styleVariants({
  sm: {
    padding: `${vars.space[1]} ${vars.space[3]}`,
    fontSize: vars.fontSize.sm,
    minHeight: "32px",
  },
  md: {
    padding: `${vars.space[2]} ${vars.space[4]}`,
    fontSize: vars.fontSize.base,
    minHeight: "40px",
  },
  lg: {
    padding: `${vars.space[3]} ${vars.space[6]}`,
    fontSize: vars.fontSize.lg,
    minHeight: "48px",
  },
});

export const fullWidth = style({
  width: "100%",
});

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed",
  pointerEvents: "none",
});

export const loading = style({
  pointerEvents: "none",
});

export const spinner = style({
  display: "inline-block",
  width: "1em",
  height: "1em",
  marginRight: vars.space[2],
  border: "2px solid currentColor",
  borderRadius: "50%",
  borderTopColor: "transparent",
  animation: `${spin} 0.6s linear infinite`,
});

export const iconLeft = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: vars.space[1],
  fontSize: "1.2em",
});

export const iconRight = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: vars.space[1],
  fontSize: "1.2em",
});
