import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  gap: vars.space[3],
});

export const orientation = styleVariants({
  vertical: {
    flexDirection: "column",
  },

  horizontal: {
    flexDirection: "row",
  },
});

