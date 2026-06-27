import { style } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",
  width: "100%",
});

export const viewport = style({
  overflow: "hidden",
  width: "100%",
});

export const track = style({
  display: "flex",
  gap: vars.space[3],
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  padding: vars.space[1],

  selectors: {
    "&::-webkit-scrollbar": { display: "none" },
  },
});

export const item = style({
  flex: "0 0 auto",
  scrollSnapAlign: "start",
});

export const nav = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "36px",
  height: "36px",
  borderRadius: vars.radius.full,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  boxShadow: vars.shadow.md,
  zIndex: 10,
  transition: `all ${vars.transition.fast}`,

  selectors: {
    "&:hover": {
      background: vars.color.surfaceSecondary,
      boxShadow: vars.shadow.lg,
    },

    "&:focus-visible": {
      outline: `2px solid ${vars.color.focusRing}`,
      outlineOffset: "2px",
    },
  },
});

export const prev = style({ left: vars.space[2] });
export const next = style({ right: vars.space[2] });
