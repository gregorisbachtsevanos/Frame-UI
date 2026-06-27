import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  padding: vars.space[3],
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover": {
      background: vars.color.surfaceSecondary,
      borderColor: vars.color.borderSecondary,
    },

    "&:focus-within": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "2px",
    },
  },
});

