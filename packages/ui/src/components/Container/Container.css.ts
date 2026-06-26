import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
});

export const size = styleVariants({
  sm: { maxWidth: "640px" },
  md: { maxWidth: "768px" },
  lg: { maxWidth: "1024px" },
  xl: { maxWidth: "1280px" },
  "2xl": { maxWidth: "1536px" },
  fluid: { maxWidth: "100%" },
});

export const px = styleVariants({
  sm: { paddingLeft: vars.space[4], paddingRight: vars.space[4] },
  md: { paddingLeft: vars.space[6], paddingRight: vars.space[6] },
  lg: { paddingLeft: vars.space[8], paddingRight: vars.space[8] },
});
