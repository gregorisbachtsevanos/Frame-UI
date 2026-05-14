// radio.css.ts
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
  cursor: "pointer",
  position: "relative"
});

export const input = style({
  position: "absolute",
  opacity: 0,
  pointerEvents: "none"
});

export const dot = style({
  width: "16px",
  height: "16px",
  borderRadius: "50%",
  border: `1px solid ${vars.color.border.subtle}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "border-color 0.2s ease"
});

export const inner = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: vars.color.primary.default,
  transform: "scale(0)",
  transition: "transform 0.2s ease"
});

export const checked = style({
  selectors: {
    [`${input}:checked + ${dot} &`]: {
      transform: "scale(1)"
    }
  }
});

export const checkedDot = style({
  selectors: {
    [`${input}:checked + &`]: {
      borderColor: vars.color.primary.default
    }
  }
});
