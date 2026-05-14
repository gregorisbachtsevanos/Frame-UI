import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens.css";

export const card = recipe({
  base: {
    border: `1px solid ${vars.color.border.subtle}`,
    borderRadius: vars.radius.lg,
    backgroundColor: vars.color.background.default,
    boxShadow: vars.shadow.sm,
    color: vars.color.foreground.default,
    overflow: "hidden"
  },
  variants: {
    size: {
      sm: { padding: vars.space[3] },
      md: { padding: vars.space[4] },
      lg: { padding: vars.space[5] }
    },
    variant: {
      primary: {},
      secondary: { backgroundColor: vars.color.muted.default },
      ghost: { boxShadow: "none", borderColor: vars.color.border.strong },
      danger: { borderColor: vars.color.danger.default }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});

export type CardRecipe = RecipeVariants<typeof card>;

export const cardHeader = style({
  marginBottom: vars.space[3],
  fontWeight: vars.font.weight.semibold,
  fontSize: vars.fontSize.lg
});

export const cardBody = style({
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.relaxed
});

export const cardFooter = style({
  marginTop: vars.space[4],
  paddingTop: vars.space[3],
  borderTop: `1px solid ${vars.color.border.subtle}`
});
