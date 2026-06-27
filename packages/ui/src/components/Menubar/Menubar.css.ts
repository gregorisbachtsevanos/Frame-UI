import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  alignItems: "center",
  height: "48px",
  gap: 0,
  paddingLeft: vars.space[2],
  paddingRight: vars.space[2],
  borderBottom: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
});

globalStyle(`${root} button`, {
  padding: `${vars.space[2]} ${vars.space[3]}`,
  height: "100%",
  border: "none",
  background: "transparent",
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  borderBottom: "2px solid transparent",
});

globalStyle(`${root} button:hover`, {
  background: vars.color.surfaceSecondary,
});

globalStyle(`${root} button[aria-current=page]`, {
  borderBottomColor: vars.color.primary,
  color: vars.color.primary,
});
