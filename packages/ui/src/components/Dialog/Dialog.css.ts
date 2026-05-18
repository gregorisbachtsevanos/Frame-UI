import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";
export const root = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(2, 6, 23, 0.58)",
  backdropFilter: "blur(2px)",
});

