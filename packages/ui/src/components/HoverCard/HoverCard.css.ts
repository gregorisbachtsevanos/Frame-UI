import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  padding: `${vars.space[3]} ${vars.space[4]}`,
  boxShadow: vars.shadow.md,
  transition: `all ${vars.transition.fast}`,
});

