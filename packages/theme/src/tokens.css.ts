import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#ffffff",
    text: "#0a0a0a",
    primary: "#2563eb",
  },
});
