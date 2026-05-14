import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const input = style({
  width: "100%",
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.background.default,
  padding: `${vars.space[3]} ${vars.space[4]}`,
  color: vars.color.foreground.default,
  transition: `border-color ${vars.transition.fast}, box-shadow ${vars.transition.fast}, background-color ${vars.transition.fast}`,
  fontSize: vars.fontSize.md,
  outline: "none",

  selectors: {
    "&::placeholder": {
      color: vars.color.foreground.disabled
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.border.focus,
      boxShadow: `0 0 0 3px ${vars.color.border.focus}`
    },
    "&:focus": {
      outline: "none",
      boxShadow: "none",
      borderColor: vars.color.border.subtle
    },
    "&:disabled": {
      backgroundColor: vars.color.background.disabled,
      color: vars.color.foreground.disabled,
      cursor: "not-allowed"
    }
  }
});

export const invalid = style({
  borderColor: vars.color.danger.default
});
