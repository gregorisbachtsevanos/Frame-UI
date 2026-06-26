import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[2],
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  color: vars.color.text,
  border: `1px solid ${vars.color.border}`,
  padding: `${vars.space[2]} ${vars.space[3]}`,
  boxShadow: vars.shadow.md,
  transition: `all ${vars.transition.fast}`,
});

