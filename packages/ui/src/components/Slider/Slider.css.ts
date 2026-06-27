import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  width: "100%",
  appearance: "none",
  WebkitAppearance: "none",
  height: "6px",
  borderRadius: vars.radius.full,
  background: vars.color.surfaceSecondary,
  outline: "none",
  cursor: "pointer",

  selectors: {
    "&::-webkit-slider-thumb": {
      appearance: "none",
      WebkitAppearance: "none",
      width: "18px",
      height: "18px",
      borderRadius: vars.radius.full,
      background: vars.color.primary,
      border: `2px solid ${vars.color.surface}`,
      cursor: "pointer",
      boxShadow: vars.shadow.sm,
      transition: `all ${vars.transition.fast}`,
    },

    "&::-webkit-slider-thumb:hover": {
      boxShadow: vars.shadow.md,
      transform: "scale(1.1)",
    },

    "&::-moz-range-thumb": {
      width: "18px",
      height: "18px",
      borderRadius: vars.radius.full,
      background: vars.color.primary,
      border: `2px solid ${vars.color.surface}`,
      cursor: "pointer",
      boxShadow: vars.shadow.sm,
      transition: `all ${vars.transition.fast}`,
    },

    "&::-moz-range-thumb:hover": {
      boxShadow: vars.shadow.md,
      transform: "scale(1.1)",
    },

    "&::-moz-range-track": {
      background: "transparent",
      border: "none",
    },
  },
});

export const size = styleVariants({
  sm: {
    height: "4px",

    selectors: {
      "&::-webkit-slider-thumb": {
        width: "14px",
        height: "14px",
      },

      "&::-moz-range-thumb": {
        width: "14px",
        height: "14px",
      },
    },
  },

  md: {
    height: "6px",
  },

  lg: {
    height: "8px",

    selectors: {
      "&::-webkit-slider-thumb": {
        width: "22px",
        height: "22px",
      },

      "&::-moz-range-thumb": {
        width: "22px",
        height: "22px",
      },
    },
  },
});

