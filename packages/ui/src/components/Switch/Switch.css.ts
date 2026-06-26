import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[2],
  cursor: "pointer",

  selectors: {
    "&:focus-within": {
      outline: "none",
    },
  },
});

export const input = style({
  appearance: "none",
  WebkitAppearance: "none",
  width: "40px",
  height: "24px",
  borderRadius: vars.radius.full,
  border: `2px solid ${vars.color.border}`,
  background: vars.color.surfaceSecondary,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  position: "relative",
  padding: 0,

  selectors: {
    "&:checked": {
      background: vars.color.primary,
      borderColor: vars.color.primary,
    },

    "&:checked::after": {
      content: "",
      position: "absolute",
      right: "4px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "white",
    },

    "&:hover:not(:disabled)": {
      borderColor: vars.color.border,
    },

    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "2px",
    },

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

export const label = style({
  color: vars.color.text,
  fontSize: vars.fontSize.sm,
  fontWeight: 500,
});

