import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space[2],
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  borderRadius: vars.radius.full,
  fontWeight: vars.fontWeight.semibold,
  border: "1px solid transparent",
  transition: vars.transition.fast,
  userSelect: "none",
});

export const size = styleVariants({
  sm: {
    minHeight: "20px",
    padding: `0 ${vars.space[2]}`,
    fontSize: vars.fontSize.xs,
  },
  md: {
    minHeight: "24px",
    padding: `0 ${vars.space[2.5]}`,
    fontSize: vars.fontSize.sm,
  },
  lg: {
    minHeight: "30px",
    padding: `0 ${vars.space[3]}`,
    fontSize: vars.fontSize.base,
  },
});

export const tone = styleVariants({
  neutral: {
    backgroundColor: vars.color.surfaceSecondary,
    color: vars.color.textMuted,
    borderColor: vars.color.border,
  },
  primary: {
    backgroundColor: vars.color.primaryLight,
    color: vars.color.primary,
    borderColor: vars.color.primary,
  },
  success: {
    backgroundColor: vars.color.successLight,
    color: vars.color.success,
    borderColor: vars.color.success,
  },
  warning: {
    backgroundColor: vars.color.warningLight,
    color: vars.color.warning,
    borderColor: vars.color.warning,
  },
  danger: {
    backgroundColor: vars.color.dangerLight,
    color: vars.color.danger,
    borderColor: vars.color.danger,
  },
});

export const solid = styleVariants({
  true: {},
  false: {},
});

export const solidTone = styleVariants({
  neutral: {
    backgroundColor: vars.color.text,
    color: vars.color.textInverted,
    borderColor: vars.color.text,
  },
  primary: {
    backgroundColor: vars.color.primary,
    color: vars.color.textInverted,
    borderColor: vars.color.primary,
  },
  success: {
    backgroundColor: vars.color.success,
    color: vars.color.textInverted,
    borderColor: vars.color.success,
  },
  warning: {
    backgroundColor: vars.color.warning,
    color: vars.color.textInverted,
    borderColor: vars.color.warning,
  },
  danger: {
    backgroundColor: vars.color.danger,
    color: vars.color.textInverted,
    borderColor: vars.color.danger,
  },
});
