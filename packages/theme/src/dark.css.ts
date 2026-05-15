import { createTheme } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

export const darkTheme = createTheme(vars, {
  color: {
    background: "#0a0a0a",
    text: "#ffffff",
    primary: "#3b82f6",
  },
});
