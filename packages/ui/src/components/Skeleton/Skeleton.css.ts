import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

const pulse = keyframes({
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.5,
  },
  "100%": {
    opacity: 1,
  },
});

export const root = style({
  borderRadius: vars.radius.md,
  background: vars.color.surfaceSecondary,
  animation: `${pulse} ${vars.duration[500]} ${vars.timingFunction.inOut} infinite`,
});

export const circle = style({
  borderRadius: vars.radius.full,
});

