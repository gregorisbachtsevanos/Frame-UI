import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "flex",
});

export const direction = styleVariants({
  row: { flexDirection: "row" },
  column: { flexDirection: "column" },
});

export const gap = styleVariants({
  xs: { gap: vars.space[1] },
  sm: { gap: vars.space[2] },
  md: { gap: vars.space[4] },
  lg: { gap: vars.space[6] },
  xl: { gap: vars.space[8] },
  "2xl": { gap: vars.space[12] },
});

export const align = styleVariants({
  start: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  end: { alignItems: "flex-end" },
  stretch: { alignItems: "stretch" },
  baseline: { alignItems: "baseline" },
});

export const justify = styleVariants({
  start: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  end: { justifyContent: "flex-end" },
  between: { justifyContent: "space-between" },
  around: { justifyContent: "space-around" },
  evenly: { justifyContent: "space-evenly" },
});
