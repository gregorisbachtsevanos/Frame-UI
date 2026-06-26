import { style, styleVariants, keyframes } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

const spin = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const root = style({
  borderRadius: vars.radius.full,
  boxSizing: "border-box",
  animation: `${spin} 1s linear infinite`,
});

export const size = styleVariants({
  sm: {
    width: "16px",
    height: "16px",
    borderWidth: "2px",
  },

  md: {
    width: "24px",
    height: "24px",
    borderWidth: "3px",
  },

  lg: {
    width: "32px",
    height: "32px",
    borderWidth: "4px",
  },
});

export const color = styleVariants({
  primary: {
    borderColor: vars.color.primaryLight,
    borderTopColor: vars.color.primary,
  },

  secondary: {
    borderColor: `${vars.color.secondary}33`,
    borderTopColor: vars.color.secondary,
  },

  success: {
    borderColor: `${vars.color.success}33`,
    borderTopColor: vars.color.success,
  },

  danger: {
    borderColor: `${vars.color.danger}33`,
    borderTopColor: vars.color.danger,
  },
});

