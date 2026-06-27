import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "24px",
  padding: `0 ${vars.space[2]}`,
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.border}`,
  background: `linear-gradient(180deg, ${vars.color.surface}, ${vars.color.surfaceSecondary})`,
  boxShadow: `0 1px 0 ${vars.color.border}`,
  fontSize: vars.fontSize.xs,
  fontWeight: 600,
  color: vars.color.text,
  fontFamily: vars.font.mono,
});

