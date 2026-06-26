import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  borderRadius: vars.radius.md,
  borderWidth: "1px",
  borderStyle: "solid",
  padding: vars.space[4],
  fontFamily: vars.font.body,
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.relaxed,
});

export const type = styleVariants({
  info: {
    backgroundColor: vars.color.infoLight,
    borderColor: vars.color.info,
    color: vars.color.info,
  },
  success: {
    backgroundColor: vars.color.successLight,
    borderColor: vars.color.success,
    color: vars.color.success,
  },
  warning: {
    backgroundColor: vars.color.warningLight,
    borderColor: vars.color.warning,
    color: vars.color.warning,
  },
  error: {
    backgroundColor: vars.color.dangerLight,
    borderColor: vars.color.danger,
    color: vars.color.danger,
  },
});

export const container = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.space[3],
  width: "100%",
});

export const icon = style({
  flexShrink: 0,
  marginTop: vars.space[0.5],
  fontSize: "1.25em",
  fontWeight: vars.fontWeight.bold,
});

export const content = style({
  flex: 1,
});

export const title = style({
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space[1],
});

export const message = style({
  opacity: 0.9,
});

export const closeButton = style({
  flexShrink: 0,
  background: "none",
  border: "none",
  fontSize: "1.5em",
  cursor: "pointer",
  color: "inherit",
  opacity: 0.6,
  transition: `opacity ${vars.transition.fast}`,
  padding: 0,

  selectors: {
    "&:hover": {
      opacity: 1,
    },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.focus}`,
      outlineOffset: "2px",
    },
  },
});
