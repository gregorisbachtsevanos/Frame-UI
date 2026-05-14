import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens.css";

export const grid = recipe({
  base: {
    display: "grid",
    minWidth: 0
  },
  variants: {
    gap: {
      sm: { gap: vars.space[2] },
      md: { gap: vars.space[3] },
      lg: { gap: vars.space[4] }
    }
  },
  defaultVariants: {
    gap: "md"
  }
});
