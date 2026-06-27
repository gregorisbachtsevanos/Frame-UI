import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "fixed",
  top: 0,
  height: "100vh",
  width: "320px",
  maxWidth: "90vw",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  color: vars.color.text,
  boxShadow: vars.shadow.lg,
  zIndex: 999,
  overflowY: "auto",
  padding: vars.space[4],
  transition: `transform ${vars.transition.normal}`,
});

export const side = styleVariants({
  left: {
    left: 0,
  },

  right: {
    right: 0,
  },
});

