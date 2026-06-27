import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "fixed",
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  color: vars.color.text,
  boxShadow: vars.shadow.lg,
  zIndex: 999,
  overflow: "auto",
  padding: vars.space[4],
  transition: `all ${vars.transition.normal}`,
});

export const side = styleVariants({
  top: {
    top: 0,
    left: 0,
    right: 0,
    maxHeight: "50vh",
    width: "100%",
    borderRadius: `0 0 ${vars.radius.lg} ${vars.radius.lg}`,
  },

  bottom: {
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: "50vh",
    width: "100%",
    borderRadius: `${vars.radius.lg} ${vars.radius.lg} 0 0`,
  },

  left: {
    left: 0,
    top: 0,
    bottom: 0,
    maxWidth: "50vw",
    width: "320px",
    borderRadius: `0 ${vars.radius.lg} ${vars.radius.lg} 0`,
  },

  right: {
    right: 0,
    top: 0,
    bottom: 0,
    maxWidth: "50vw",
    width: "320px",
    borderRadius: `${vars.radius.lg} 0 0 ${vars.radius.lg}`,
  },
});

