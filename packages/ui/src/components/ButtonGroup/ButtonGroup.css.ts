import { style, styleVariants, globalStyle } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  display: "inline-flex",
  alignItems: "center",

  borderRadius: vars.radius.md,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,

  boxShadow: vars.shadow.sm,

  overflow: "hidden",
});

export const size = styleVariants({
  sm: {
    gap: vars.space[1],
    padding: vars.space[1],
  },
  md: {
    gap: vars.space[2],
    padding: vars.space[2],
  },
  lg: {
    gap: vars.space[3],
    padding: vars.space[3],
  },
});

export const attached = style({});

/**
 * Applies "attached button" styling inside the group
 * Must use globalStyle because vanilla-extract does not allow
 * arbitrary element selectors inside `style()`
 */

globalStyle(`${root}.${attached} > button`, {
  gap: 0,
  borderRight: `1px solid ${vars.color.border}`,
  borderRadius: 0,
});

globalStyle(`${root}.${attached} > button:first-child`, {
  borderTopLeftRadius: vars.radius.md,
  borderBottomLeftRadius: vars.radius.md,
});

globalStyle(`${root}.${attached} > button:last-child`, {
  borderRight: "none",
  borderTopRightRadius: vars.radius.md,
  borderBottomRightRadius: vars.radius.md,
});
