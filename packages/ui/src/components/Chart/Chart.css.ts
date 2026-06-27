import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  padding: vars.space[4],
  boxShadow: vars.shadow.sm,
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover": {
      boxShadow: vars.shadow.md,
    },
  },
});

