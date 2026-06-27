import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space[2],
  padding: vars.space[3],
});

globalStyle(`${root} button`, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "36px",
  height: "36px",
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
});

globalStyle(`${root} button:hover:not(:disabled)`, {
  background: vars.color.surfaceSecondary,
  borderColor: vars.color.borderSecondary,
});

globalStyle(`${root} button:disabled`, {
  opacity: 0.5,
  cursor: "not-allowed",
});

globalStyle(`${root} button[aria-current=page]`, {
  background: vars.color.primary,
  borderColor: vars.color.primary,
  color: vars.color.textInverted,
});
