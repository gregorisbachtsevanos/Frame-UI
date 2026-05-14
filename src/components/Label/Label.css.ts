import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens.css";

export const label = style({
  display: "inline-flex",
  marginBottom: vars.space[1],
  fontSize: vars.fontSize.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.foreground.hover
});
