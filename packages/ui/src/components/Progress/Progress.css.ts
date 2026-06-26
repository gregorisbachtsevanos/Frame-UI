import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  width: "100%",
  appearance: "none",
  WebkitAppearance: "none",
  borderRadius: vars.radius.full,
  overflow: "hidden",
  border: "none",
  background: vars.color.surfaceSecondary,

  selectors: {
    "&::-webkit-progress-bar": {
      background: vars.color.surfaceSecondary,
      borderRadius: vars.radius.full,
    },

    "&::-webkit-progress-value": {
      borderRadius: vars.radius.full,
      transition: `width ${vars.transition.normal}`,
    },

    "&::-moz-progress-bar": {
      borderRadius: vars.radius.full,
      transition: `width ${vars.transition.normal}`,
    },
  },
});

export const size = styleVariants({
  sm: {
    height: "4px",
  },

  md: {
    height: "8px",
  },

  lg: {
    height: "12px",
  },
});

export const color = styleVariants({
  primary: {
    selectors: {
      "&::-webkit-progress-value": {
        background: vars.color.primary,
      },

      "&::-moz-progress-bar": {
        background: vars.color.primary,
      },
    },
  },

  success: {
    selectors: {
      "&::-webkit-progress-value": {
        background: vars.color.success,
      },

      "&::-moz-progress-bar": {
        background: vars.color.success,
      },
    },
  },

  warning: {
    selectors: {
      "&::-webkit-progress-value": {
        background: vars.color.warning,
      },

      "&::-moz-progress-bar": {
        background: vars.color.warning,
      },
    },
  },

  danger: {
    selectors: {
      "&::-webkit-progress-value": {
        background: vars.color.danger,
      },

      "&::-moz-progress-bar": {
        background: vars.color.danger,
      },
    },
  },
});

