import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens.css";

export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: vars.zIndex.overlay,
  backgroundColor: "rgba(15, 23, 42, 0.5)",
  display: "grid",
  placeItems: "center",
  padding: vars.space[4]
});

export const content = recipe({
  base: {
    width: "100%",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: vars.radius.xl,
    backgroundColor: vars.color.background.default,
    border: `1px solid ${vars.color.border.subtle}`,
    boxShadow: vars.shadow.lg,
    color: vars.color.foreground.default,
    zIndex: vars.zIndex.modal
  },
  variants: {
    size: {
      sm: { maxWidth: "420px" },
      md: { maxWidth: "560px" },
      lg: { maxWidth: "720px" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space[3],
  padding: `${vars.space[4]} ${vars.space[4]} ${vars.space[2]}`
});

export const title = style({
  margin: 0,
  fontSize: vars.fontSize.xl,
  lineHeight: vars.lineHeight.tight
});

export const closeButton = style({
  border: 0,
  borderRadius: vars.radius.sm,
  backgroundColor: "transparent",
  color: vars.color.foreground.default,
  cursor: "pointer",
  padding: vars.space[1],
  selectors: {
    "&:hover": { backgroundColor: vars.color.background.hover },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 3px ${vars.color.border.focus}`
    }
  }
});

export const body = style({
  padding: `${vars.space[2]} ${vars.space[4]} ${vars.space[4]}`
});

export const footer = style({
  padding: `${vars.space[3]} ${vars.space[4]} ${vars.space[4]}`,
  borderTop: `1px solid ${vars.color.border.subtle}`,
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space[2]
});
