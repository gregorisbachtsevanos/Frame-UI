import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#111111",
    secondary: "#666666",
    background: "#ffffff",
  },

  space: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },

  radius: {
    md: "8px",
  },
});
