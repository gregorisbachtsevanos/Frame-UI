import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  width: "100%",
  fontFamily: vars.font.body,
  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  color: vars.color.text,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23374151' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 8px center",
  backgroundSize: "12px",
  paddingRight: vars.space[10],

  selectors: {
    "&:focus": {
      outline: "none",
      borderColor: vars.color.primary,
      boxShadow: `0 0 0 2px ${vars.color.primaryLight}`,
    },
  },
});

export const size = styleVariants({
  sm: {
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.sm,
    minHeight: vars.space[8],
  },
  md: {
    padding: `${vars.space[2]} ${vars.space[3]}`,
    fontSize: vars.fontSize.base,
    minHeight: vars.space[10],
  },
  lg: {
    padding: `${vars.space[3]} ${vars.space[4]}`,
    fontSize: vars.fontSize.lg,
    minHeight: vars.space[12],
  },
});

export const invalid = style({
  borderColor: vars.color.danger,

  selectors: {
    "&:focus": {
      boxShadow: `0 0 0 2px ${vars.color.dangerLight}`,
    },
  },
});

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed",
  backgroundColor: vars.color.surfaceSecondary,

  selectors: {
    "&:focus": {
      borderColor: vars.color.border,
      boxShadow: "none",
    },
  },
});

