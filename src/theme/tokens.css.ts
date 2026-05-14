import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: { default: "", hover: "", active: "", disabled: "" },
    foreground: { default: "", hover: "", active: "", disabled: "" },
    primary: { default: "", hover: "", active: "", disabled: "" },
    secondary: { default: "", hover: "", active: "", disabled: "" },
    muted: { default: "", hover: "", active: "", disabled: "" },
    accent: { default: "", hover: "", active: "", disabled: "" },
    danger: { default: "", hover: "", active: "", disabled: "" },
    border: { subtle: "", strong: "", focus: "" }
  },
  space: {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    8: "",
    10: "",
    12: ""
  },
  radius: { sm: "", md: "", lg: "", xl: "" },
  shadow: { sm: "", md: "", lg: "" },
  font: { family: { base: "" }, weight: { regular: "", medium: "", semibold: "" } },
  fontSize: { xs: "", sm: "", md: "", lg: "", xl: "", xxl: "" },
  lineHeight: { tight: "", normal: "", relaxed: "" },
  transition: { fast: "", normal: "" },
  zIndex: { overlay: "", modal: "", popover: "", tooltip: "" }
});
