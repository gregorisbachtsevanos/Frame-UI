import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    border: "none",
    borderRadius: 8,
    padding: "12px 16px",
    cursor: "pointer",
    fontWeight: 600,
  },

  variants: {
    variant: {
      primary: {
        background: "#111",
        color: "#fff",
      },

      secondary: {
        background: "#e5e5e5",
        color: "#111",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
