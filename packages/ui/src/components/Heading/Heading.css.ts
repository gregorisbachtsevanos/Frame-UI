import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  fontFamily: vars.font.body,
  color: vars.color.text,
  margin: 0,
  lineHeight: vars.lineHeight.tight,
});

export const variant = styleVariants({
  h1: {
    fontSize: vars.fontSize["4xl"],
    fontWeight: vars.fontWeight.bold,
    letterSpacing: "-0.025em",
  },
  h2: {
    fontSize: vars.fontSize["3xl"],
    fontWeight: vars.fontWeight.bold,
    letterSpacing: "-0.025em",
  },
  h3: {
    fontSize: vars.fontSize["2xl"],
    fontWeight: vars.fontWeight.bold,
  },
  h4: {
    fontSize: vars.fontSize.xl,
    fontWeight: vars.fontWeight.semibold,
  },
  h5: {
    fontSize: vars.fontSize.lg,
    fontWeight: vars.fontWeight.semibold,
  },
  h6: {
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.semibold,
  },
});

export const weight = styleVariants({
  normal: { fontWeight: vars.fontWeight.normal },
  semibold: { fontWeight: vars.fontWeight.semibold },
  bold: { fontWeight: vars.fontWeight.bold },
});

export const tracking = styleVariants({
  tight: { letterSpacing: "-0.025em" },
  normal: { letterSpacing: "0" },
  wide: { letterSpacing: "0.025em" },
});
