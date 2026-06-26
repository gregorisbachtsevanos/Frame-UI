import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const root = style({
  position: "relative",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  overflow: "hidden",
  flexShrink: 0,

  background: vars.color.surfaceSecondary,
  color: vars.color.text,

  border: `2px solid ${vars.color.surface}`,
  boxShadow: vars.shadow.sm,

  fontWeight: 600,
  userSelect: "none",
});

export const size = styleVariants({
  xs: {
    width: "24px",
    height: "24px",
    fontSize: vars.fontSize.xs,
  },

  sm: {
    width: "32px",
    height: "32px",
    fontSize: vars.fontSize.sm,
  },

  md: {
    width: "44px",
    height: "44px",
    fontSize: vars.fontSize.base,
  },

  lg: {
    width: "56px",
    height: "56px",
    fontSize: vars.fontSize.lg,
  },

  xl: {
    width: "72px",
    height: "72px",
    fontSize: vars.fontSize.xl,
  },
});

export const shape = styleVariants({
  circle: {
    borderRadius: "999px",
  },

  rounded: {
    borderRadius: vars.radius.lg,
  },

  square: {
    borderRadius: vars.radius.sm,
  },
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const fallback = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",
});

export const status = styleVariants({
  online: {
    selectors: {
      "&::after": {
        content: "",
        position: "absolute",

        width: "10px",
        height: "10px",

        borderRadius: "999px",

        background: vars.color.success,

        border: `2px solid ${vars.color.surface}`,

        bottom: 1,
        right: 1,
      },
    },
  },

  offline: {
    selectors: {
      "&::after": {
        content: "",
        position: "absolute",

        width: "10px",
        height: "10px",

        borderRadius: "999px",

        background: vars.color.textMuted,

        border: `2px solid ${vars.color.surface}`,

        bottom: 1,
        right: 1,
      },
    },
  },

  busy: {
    selectors: {
      "&::after": {
        content: "",
        position: "absolute",

        width: "10px",
        height: "10px",

        borderRadius: "999px",

        background: vars.color.danger,

        border: `2px solid ${vars.color.surface}`,

        bottom: 1,
        right: 1,
      },
    },
  },

  none: {},
});
