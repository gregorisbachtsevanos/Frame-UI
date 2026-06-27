import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: vars.color.overlay,
  backdropFilter: "blur(2px)",
  zIndex: 1000,
  padding: vars.space[4],
});

export const content = style({
  maxWidth: "600px",
  width: "100%",
  maxHeight: "90vh",
  overflow: "auto",
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  boxShadow: vars.shadow.lg,
  padding: vars.space[6],
});

export const title = style({
  fontSize: vars.fontSize.xl,
  fontWeight: 700,
  marginBottom: vars.space[4],
  color: vars.color.text,
});

