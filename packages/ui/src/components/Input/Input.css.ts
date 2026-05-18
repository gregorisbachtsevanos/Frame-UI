import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";
export const root = style({
  width: "100%",
  minHeight: "42px",
  padding: "0 12px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  background: "#ffffff",
  color: vars.color.text,
  boxShadow: "inset 0 1px 1px rgba(2, 6, 23, 0.04)",
});

