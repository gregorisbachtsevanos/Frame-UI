import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[2],
  cursor: "pointer",
});

export const size = styleVariants({
  sm: { fontSize: vars.fontSize.sm },
  md: { fontSize: vars.fontSize.base },
  lg: { fontSize: vars.fontSize.lg },
});

export const input = style({
  appearance: "none",
  width: "1.25em",
  height: "1.25em",
  borderRadius: vars.radius.sm,
  border: `2px solid ${vars.color.border}`,
  backgroundColor: vars.color.surface,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:checked": {
      backgroundColor: vars.color.primary,
      borderColor: vars.color.primary,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3E%3Cpath d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 11-1.06-1.06l7.25-7.25a.75.75 0 011.06 0z'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "100%",
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 3px ${vars.color.primaryLight}`,
    },
  },
});

export const label = style({
  cursor: "pointer",
});

export const disabled = style({
  opacity: 0.5,
  cursor: "not-allowed",

  selectors: {
    "&": {
      color: vars.color.textMuted,
    },
  },
});

