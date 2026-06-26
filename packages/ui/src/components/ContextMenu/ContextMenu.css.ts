import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "absolute",
  zIndex: 1000,
  minWidth: "160px",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  boxShadow: vars.shadow.lg,
  padding: `${vars.space[1]} 0`,
  color: vars.color.text,
});

