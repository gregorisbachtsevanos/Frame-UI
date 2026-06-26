import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  border: "none",
  margin: 0,
  backgroundColor: vars.color.border,
});

export const orientation = styleVariants({
  horizontal: {
    height: "1px",
    width: "100%",
  },
  vertical: {
    width: "1px",
    height: "100%",
  },
});

export const variant = styleVariants({
  solid: {
    backgroundImage: "none",
  },
  dashed: {
    backgroundImage: `repeating-linear-gradient(90deg, ${vars.color.border} 0, ${vars.color.border} 6px, transparent 6px, transparent 12px)`,
    backgroundColor: "transparent",
  },
  dotted: {
    backgroundImage: `radial-gradient(circle, ${vars.color.border} 1px, transparent 1px)`,
    backgroundSize: "4px 100%",
    backgroundColor: "transparent",
  },
});
