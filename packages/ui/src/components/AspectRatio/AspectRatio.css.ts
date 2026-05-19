import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",

  width: "100%",
  overflow: "hidden",

  borderRadius: vars.radius.lg,

  background: vars.color.surfaceSecondary,
  border: `1px solid ${vars.color.border}`,

  boxShadow: vars.shadow.sm,

  transition: vars.transition.fast,

  selectors: {
    "&:focus-within": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: 2,
    },
  },
});

export const content = style({
  position: "absolute",
  inset: 0,

  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: vars.color.textMuted,
  fontSize: vars.fontSize.sm,
});

export const media = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});
