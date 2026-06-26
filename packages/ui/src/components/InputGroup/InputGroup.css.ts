import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: 0,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:focus-within": {
      borderColor: vars.color.primary,
      boxShadow: `0 0 0 3px ${vars.color.primaryLight}`,
    },

    "& > input": {
      border: "none",
      background: "transparent",
      padding: `${vars.space[2]} ${vars.space[3]}`,
      flex: 1,
    },

    "& > input:first-child": {
      paddingLeft: vars.space[3],
    },

    "& > input:last-child": {
      paddingRight: vars.space[3],
    },
  },
});

