import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
  padding: vars.space[2],
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
});

globalStyle(`${root} a, ${root} button`, {
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: vars.radius.md,
  border: "none",
  background: "transparent",
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
});

globalStyle(`${root} a:hover, ${root} button:hover`, {
  background: vars.color.surfaceSecondary,
});

globalStyle(`${root} a:focus-visible, ${root} button:focus-visible`, {
  outline: `2px solid ${vars.color.focusRing}`,
  outlineOffset: "2px",
});

globalStyle(`${root} a[aria-current=page], ${root} button[aria-current=page]`, {
  background: vars.color.primaryLight,
  color: vars.color.primary,
});
