import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens.css";

export const input = recipe({
  base: {
    width: "100%",
    border: `1px solid ${vars.color.border.subtle}`,
    borderRadius: vars.radius.md,
    backgroundColor: vars.color.background.default,
    color: vars.color.foreground.default,
    transition: `border-color ${vars.transition.fast}, box-shadow ${vars.transition.fast}, background-color ${vars.transition.fast}`,
    selectors: {
      "&::placeholder": {
        color: vars.color.foreground.disabled
      },
      "&:focus-visible": {
        outline: "none",
        borderColor: vars.color.border.focus,
        boxShadow: `0 0 0 3px ${vars.color.border.focus}`
      },
      "&:disabled": {
        backgroundColor: vars.color.background.disabled,
        color: vars.color.foreground.disabled,
        cursor: "not-allowed"
      }
    }
  },
  variants: {
    size: {
      sm: { minHeight: "32px", fontSize: vars.fontSize.sm, padding: `${vars.space[1]} ${vars.space[2]}` },
      md: { minHeight: "40px", fontSize: vars.fontSize.sm, padding: `${vars.space[2]} ${vars.space[3]}` },
      lg: { minHeight: "48px", fontSize: vars.fontSize.md, padding: `${vars.space[2]} ${vars.space[4]}` }
    },
    variant: {
      primary: {},
      secondary: { backgroundColor: vars.color.muted.default },
      ghost: {
        backgroundColor: "transparent"
      },
      danger: {
        borderColor: vars.color.danger.default,
        selectors: {
          "&:focus-visible": {
            borderColor: vars.color.danger.hover,
            boxShadow: `0 0 0 3px ${vars.color.danger.disabled}`
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});
