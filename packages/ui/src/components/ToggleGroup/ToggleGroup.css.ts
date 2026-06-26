import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 0,
  borderRadius: vars.radius.md,
  backgroundColor: "transparent",

  selectors: {
    "& > button:not(:first-child)": {
      borderLeft: `1px solid ${vars.color.border}`,
    },

    "& > button:first-child": {
      borderRadius: `${vars.radius.md} 0 0 ${vars.radius.md}`,
    },

    "& > button:last-child": {
      borderRadius: `0 ${vars.radius.md} ${vars.radius.md} 0`,
    },

    "& > button:not(:first-child):not(:last-child)": {
      borderRadius: 0,
    },
  },
});

export const size = styleVariants({
  sm: {},
  md: {},
  lg: {},
});

