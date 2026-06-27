import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  width: "100%",
  borderCollapse: "collapse",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  overflow: "hidden",
  background: vars.color.surface,
  fontSize: vars.fontSize.sm,
  color: vars.color.text,
});

globalStyle(`${root} thead`, {
  background: vars.color.surfaceSecondary,
  borderBottom: `2px solid ${vars.color.border}`,
});

globalStyle(`${root} thead th`, {
  padding: `${vars.space[3]} ${vars.space[4]}`,
  textAlign: "left",
  fontWeight: 600,
  color: vars.color.text,
});

globalStyle(`${root} tbody tr`, {
  borderBottom: `1px solid ${vars.color.border}`,
  transition: `background ${vars.transition.fast}`,
});

globalStyle(`${root} tbody tr:hover`, {
  background: vars.color.surfaceSecondary,
});

globalStyle(`${root} tbody tr:last-child`, {
  borderBottom: "none",
});

globalStyle(`${root} td`, {
  padding: `${vars.space[3]} ${vars.space[4]}`,
});
