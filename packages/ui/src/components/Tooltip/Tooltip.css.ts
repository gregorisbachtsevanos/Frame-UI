import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",
  display: "inline-block",
});

export const trigger = style({
  borderBottom: `1px dashed ${vars.color.borderSecondary}`,
  color: vars.color.text,
  cursor: "help",
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover": {
      borderBottomColor: vars.color.primary,
    },
  },
});

export const content = style({
  position: "absolute",
  bottom: "calc(100% + 8px)",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 1000,
  minWidth: "200px",
  maxWidth: "300px",
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: vars.radius.md,
  background: vars.color.text,
  color: vars.color.surface,
  fontSize: vars.fontSize.sm,
  boxShadow: vars.shadow.lg,
  whiteSpace: "normal",
  wordWrap: "break-word",
});

