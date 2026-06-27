import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.text,
  overflow: "hidden",
  userSelect: "none",

  selectors: {
    "&::after": {
      content: "",
      position: "absolute",
      right: 0,
      bottom: 0,
      width: "20px",
      height: "20px",
      background: "linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)",
      cursor: "nwse-resize",
    },
  },
});

