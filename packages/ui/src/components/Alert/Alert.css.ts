import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.space.md,

  width: "100%",

  borderRadius: vars.radius.md,

  borderWidth: "1px",
  borderStyle: "solid",

  padding: vars.space.lg,

  fontFamily: vars.font.body,
  fontSize: vars.fontSize.sm,
  lineHeight: 1.5,

  boxShadow: vars.shadow.sm,
});

export const tones = styleVariants({
  info: {
    background: "#eff6ff",
    borderColor: "#bfdbfe",
    color: "#1e3a8a",
  },

  success: {
    background: "#ecfdf5",
    borderColor: "#86efac",
    color: "#166534",
  },

  warning: {
    background: "#fefce8",
    borderColor: "#fde047",
    color: "#854d0e",
  },

  danger: {
    background: "#fef2f2",
    borderColor: "#fca5a5",
    color: "#991b1b",
  },
});

export const icon = style({
  flexShrink: 0,
  marginTop: "2px",
});

export const content = style({
  flex: 1,
});
