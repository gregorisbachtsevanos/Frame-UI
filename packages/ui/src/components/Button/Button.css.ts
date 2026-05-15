import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const button = style({
  padding: "10px 16px",
  borderRadius: "8px",

  background: vars.color.primary,
  color: vars.color.text,

  border: "none",
  cursor: "pointer",
});
