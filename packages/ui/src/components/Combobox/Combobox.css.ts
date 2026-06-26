import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  width: "100%",
  fontFamily: vars.font.body,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover:not(:disabled)": {
      borderColor: vars.color.borderSecondary,
    },

    "&:focus": {
      outline: "none",
      borderColor: vars.color.primary,
      boxShadow: `0 0 0 3px ${vars.color.primaryLight}`,
    },

    "&::placeholder": {
      color: vars.color.textMuted,
    },

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const size = styleVariants({
  sm: {
    height: "28px",
    padding: `${vars.space[1]} ${vars.space[2]}`,
    fontSize: vars.fontSize.xs,
  },

  md: {
    height: "36px",
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.sm,
  },

  lg: {
    height: "44px",
    padding: `${vars.space[2]} ${vars.space[4]}`,
    fontSize: vars.fontSize.base,
  },
});

