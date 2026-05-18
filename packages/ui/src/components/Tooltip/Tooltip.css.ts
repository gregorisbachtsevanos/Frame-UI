import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";
export const root = style({
  display: "inline-flex",
  alignItems: "center",
  borderBottom: "1px dashed #94a3b8",
  color: vars.color.text,
  cursor: "help",
});

