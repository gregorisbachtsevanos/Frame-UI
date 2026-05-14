import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens.css";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" }
});

export const button = recipe({
  base: {
    border: 0,
    borderRadius: vars.radius.md,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.space[2],
    cursor: "pointer",
    fontWeight: vars.font.weight.medium,
    transition: `background-color ${vars.transition.fast}, color ${vars.transition.fast}, box-shadow ${vars.transition.fast}`,
    selectors: {
      "&:disabled": {
        cursor: "not-allowed"
      },
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 3px ${vars.color.border.focus}`
      }
    }
  },
  variants: {
    size: {
      sm: { minHeight: "32px", padding: `${vars.space[1]} ${vars.space[3]}`, fontSize: vars.fontSize.sm },
      md: { minHeight: "40px", padding: `${vars.space[2]} ${vars.space[4]}`, fontSize: vars.fontSize.sm },
      lg: { minHeight: "48px", padding: `${vars.space[2]} ${vars.space[5]}`, fontSize: vars.fontSize.md }
    },
    variant: {
      primary: {
        backgroundColor: vars.color.primary.default,
        color: "#ffffff",
        selectors: {
          "&:hover:not(:disabled)": { backgroundColor: vars.color.primary.hover },
          "&:active:not(:disabled)": { backgroundColor: vars.color.primary.active },
          "&:disabled": { backgroundColor: vars.color.primary.disabled, color: "#f8fafc" }
        }
      },
      secondary: {
        backgroundColor: vars.color.secondary.default,
        color: vars.color.foreground.default,
        selectors: {
          "&:hover:not(:disabled)": { backgroundColor: vars.color.secondary.hover },
          "&:active:not(:disabled)": { backgroundColor: vars.color.secondary.active },
          "&:disabled": { backgroundColor: vars.color.secondary.disabled, color: vars.color.foreground.disabled }
        }
      },
      ghost: {
        backgroundColor: "transparent",
        color: vars.color.foreground.default,
        boxShadow: `inset 0 0 0 1px ${vars.color.border.subtle}`,
        selectors: {
          "&:hover:not(:disabled)": { backgroundColor: vars.color.background.hover },
          "&:active:not(:disabled)": { backgroundColor: vars.color.background.active },
          "&:disabled": { color: vars.color.foreground.disabled, boxShadow: `inset 0 0 0 1px ${vars.color.border.subtle}` }
        }
      },
      danger: {
        backgroundColor: vars.color.danger.default,
        color: "#ffffff",
        selectors: {
          "&:hover:not(:disabled)": { backgroundColor: vars.color.danger.hover },
          "&:active:not(:disabled)": { backgroundColor: vars.color.danger.active },
          "&:disabled": { backgroundColor: vars.color.danger.disabled, color: "#fff5f5" }
        }
      }
    },
    loading: {
      true: { pointerEvents: "none", opacity: 0.88 },
      false: {}
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary"
  }
});

export const spinner = style({
  width: "14px",
  height: "14px",
  borderRadius: "50%",
  border: "2px solid currentColor",
  borderTopColor: "transparent",
  animation: `${spin} 0.8s linear infinite`
});
