import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens.css";

export const text = recipe({
  base: {
    margin: 0,
    color: vars.color.foreground.default
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize.sm },
      md: { fontSize: vars.fontSize.md },
      lg: { fontSize: vars.fontSize.lg }
    },
    tone: {
      default: { color: vars.color.foreground.default },
      muted: { color: vars.color.foreground.disabled },
      accent: { color: vars.color.accent.default },
      danger: { color: vars.color.danger.default }
    }
  },
  defaultVariants: {
    size: "md",
    tone: "default"
  }
});

export const heading = recipe({
  base: {
    margin: 0,
    color: vars.color.foreground.default,
    fontWeight: vars.font.weight.semibold,
    lineHeight: vars.lineHeight.tight
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize.lg },
      md: { fontSize: vars.fontSize.xl },
      lg: { fontSize: vars.fontSize.xxl }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
