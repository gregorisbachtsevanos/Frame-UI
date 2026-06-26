import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
  gap: vars.space[2],
  fontFamily: "monospace",
  fontSize: vars.fontSize.lg,
  fontWeight: 600,
  letterSpacing: vars.space[3],
  textAlign: "center",

  selectors: {
    "&::placeholder": {
      color: vars.color.textMuted,
    },
  },
});

