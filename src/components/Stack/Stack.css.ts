import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens.css";

export const stack = recipe({
  base: {
    display: "flex",
    minWidth: 0
  },
  variants: {
    direction: {
      horizontal: { flexDirection: "row" },
      vertical: { flexDirection: "column" }
    },
    gap: {
      sm: { gap: vars.space[2] },
      md: { gap: vars.space[3] },
      lg: { gap: vars.space[4] }
    },
    wrap: {
      true: { flexWrap: "wrap" },
      false: { flexWrap: "nowrap" }
    }
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    wrap: false
  }
});
