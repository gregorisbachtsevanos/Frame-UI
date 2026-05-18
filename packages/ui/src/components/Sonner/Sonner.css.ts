import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";
export const root = style({
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  background: "#ffffff",
  color: vars.color.text,
  padding: "10px 12px",
  boxShadow: "0 2px 10px rgba(15, 23, 42, 0.04)",
});

