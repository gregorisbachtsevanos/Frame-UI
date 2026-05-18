import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";
export const root = style({
  width: "26px",
  height: "26px",
  borderRadius: "999px",
  border: "3px solid #dbeafe",
  borderTopColor: vars.color.primary,
  boxSizing: "border-box",
});

