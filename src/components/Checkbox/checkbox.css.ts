import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
  cursor: "pointer",
  position: "relative",
  userSelect: "none"
});

export const input = style({
  position: "absolute",
  opacity: 0,
  width: 0,
  height: 0
});

export const box = style({
  width: "16px",
  height: "16px",
  border: `1px solid ${vars.color.border.subtle}`,
  borderRadius: vars.radius.sm,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: vars.color.background.default,
  transition: "all 0.2s ease",
  position: "relative",

  selectors: {
    [`${input}:checked + &`]: {
      background: vars.color.primary.default,
      borderColor: vars.color.primary.default
    },

    [`${input}:checked + &::after`]: {
      content: '"✓"',
      color: "white",
      fontSize: "12px",
      fontWeight: "bold"
    }
  }
});

export const label = style({
  fontSize: vars.fontSize.md,
  color: vars.color.foreground.default
});
