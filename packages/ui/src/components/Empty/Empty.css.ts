import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space[12]} ${vars.space[4]}`,
  textAlign: "center",
  color: vars.color.text,
});

export const icon = style({
  fontSize: "48px",
  marginBottom: vars.space[3],
  opacity: 0.5,
});

export const title = style({
  fontSize: vars.fontSize.lg,
  fontWeight: 600,
  marginBottom: vars.space[2],
  color: vars.color.text,
});

export const description = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textSecondary,
  marginBottom: vars.space[4],
  maxWidth: "400px",
});

export const action = style({
  marginTop: vars.space[4],
});

