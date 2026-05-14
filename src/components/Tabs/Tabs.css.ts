import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens.css";

export const tabsRoot = style({
  display: "grid",
  gap: vars.space[3]
});

export const tabList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[2],
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  paddingBottom: vars.space[2]
});

export const tabButton = recipe({
  base: {
    border: 0,
    borderRadius: vars.radius.md,
    cursor: "pointer",
    transition: `background-color ${vars.transition.fast}, color ${vars.transition.fast}`,
    selectors: {
      "&:focus-visible": {
        outline: "none",
        boxShadow: `0 0 0 3px ${vars.color.border.focus}`
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: vars.color.foreground.disabled
      }
    }
  },
  variants: {
    size: {
      sm: { fontSize: vars.fontSize.sm, padding: `${vars.space[1]} ${vars.space[2]}` },
      md: { fontSize: vars.fontSize.sm, padding: `${vars.space[2]} ${vars.space[3]}` },
      lg: { fontSize: vars.fontSize.md, padding: `${vars.space[2]} ${vars.space[4]}` }
    },
    variant: {
      primary: {},
      secondary: {},
      ghost: {},
      danger: {}
    },
    active: {
      true: {
        backgroundColor: vars.color.primary.default,
        color: "#ffffff"
      },
      false: {
        backgroundColor: vars.color.muted.default,
        color: vars.color.foreground.default,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: vars.color.muted.hover
          }
        }
      }
    }
  },
  compoundVariants: [
    {
      variants: { variant: "danger", active: true },
      style: { backgroundColor: vars.color.danger.default }
    },
    {
      variants: { variant: "secondary", active: true },
      style: {
        backgroundColor: vars.color.secondary.active,
        color: vars.color.foreground.default
      }
    },
    {
      variants: { variant: "ghost", active: true },
      style: {
        backgroundColor: "transparent",
        boxShadow: `inset 0 -2px 0 ${vars.color.primary.default}`,
        color: vars.color.primary.default
      }
    }
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
    active: false
  }
});

export const tabPanel = style({
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.border.subtle}`,
  backgroundColor: vars.color.background.default,
  padding: vars.space[4]
});
