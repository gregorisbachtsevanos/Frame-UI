import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  overflow: "auto",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,

  selectors: {
    "&::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&::-webkit-scrollbar-thumb": {
      background: vars.color.border,
      borderRadius: vars.radius.full,
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: vars.color.borderSecondary,
    },
  },
});

