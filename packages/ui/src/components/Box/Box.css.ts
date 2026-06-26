import { styleVariants } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

export const gap = styleVariants({
  0: { gap: vars.space["0"] },
  1: { gap: vars.space["1"] },
  2: { gap: vars.space["2"] },
  3: { gap: vars.space["3"] },
  4: { gap: vars.space["4"] },
  6: { gap: vars.space["6"] },
  8: { gap: vars.space["8"] },
  12: { gap: vars.space["12"] },
  16: { gap: vars.space["16"] },
});

export const padding = styleVariants({
  0: { padding: vars.space["0"] },
  1: { padding: vars.space["1"] },
  2: { padding: vars.space["2"] },
  3: { padding: vars.space["3"] },
  4: { padding: vars.space["4"] },
  6: { padding: vars.space["6"] },
  8: { padding: vars.space["8"] },
  12: { padding: vars.space["12"] },
});

export const paddingY = styleVariants({
  0: { paddingTop: vars.space["0"], paddingBottom: vars.space["0"] },
  1: { paddingTop: vars.space["1"], paddingBottom: vars.space["1"] },
  2: { paddingTop: vars.space["2"], paddingBottom: vars.space["2"] },
  3: { paddingTop: vars.space["3"], paddingBottom: vars.space["3"] },
  4: { paddingTop: vars.space["4"], paddingBottom: vars.space["4"] },
  6: { paddingTop: vars.space["6"], paddingBottom: vars.space["6"] },
});

export const paddingX = styleVariants({
  0: { paddingLeft: vars.space["0"], paddingRight: vars.space["0"] },
  1: { paddingLeft: vars.space["1"], paddingRight: vars.space["1"] },
  2: { paddingLeft: vars.space["2"], paddingRight: vars.space["2"] },
  3: { paddingLeft: vars.space["3"], paddingRight: vars.space["3"] },
  4: { paddingLeft: vars.space["4"], paddingRight: vars.space["4"] },
  6: { paddingLeft: vars.space["6"], paddingRight: vars.space["6"] },
});

export const margin = styleVariants({
  0: { margin: vars.space["0"] },
  1: { margin: vars.space["1"] },
  2: { margin: vars.space["2"] },
  3: { margin: vars.space["3"] },
  4: { margin: vars.space["4"] },
  6: { margin: vars.space["6"] },
  8: { margin: vars.space["8"] },
  auto: { margin: "auto" },
});

export const marginY = styleVariants({
  0: { marginTop: vars.space["0"], marginBottom: vars.space["0"] },
  1: { marginTop: vars.space["1"], marginBottom: vars.space["1"] },
  2: { marginTop: vars.space["2"], marginBottom: vars.space["2"] },
  3: { marginTop: vars.space["3"], marginBottom: vars.space["3"] },
  4: { marginTop: vars.space["4"], marginBottom: vars.space["4"] },
  6: { marginTop: vars.space["6"], marginBottom: vars.space["6"] },
});

export const marginX = styleVariants({
  0: { marginLeft: vars.space["0"], marginRight: vars.space["0"] },
  1: { marginLeft: vars.space["1"], marginRight: vars.space["1"] },
  2: { marginLeft: vars.space["2"], marginRight: vars.space["2"] },
  3: { marginLeft: vars.space["3"], marginRight: vars.space["3"] },
  4: { marginLeft: vars.space["4"], marginRight: vars.space["4"] },
  6: { marginLeft: vars.space["6"], marginRight: vars.space["6"] },
  auto: { marginLeft: "auto", marginRight: "auto" },
});

export const radius = styleVariants({
  none: { borderRadius: vars.radius.none },
  xs: { borderRadius: vars.radius.xs },
  sm: { borderRadius: vars.radius.sm },
  md: { borderRadius: vars.radius.md },
  lg: { borderRadius: vars.radius.lg },
  xl: { borderRadius: vars.radius.xl },
  full: { borderRadius: vars.radius.full },
});

export const shadow = styleVariants({
  none: { boxShadow: vars.shadow.none },
  xs: { boxShadow: vars.shadow.xs },
  sm: { boxShadow: vars.shadow.sm },
  base: { boxShadow: vars.shadow.base },
  md: { boxShadow: vars.shadow.md },
  lg: { boxShadow: vars.shadow.lg },
  xl: { boxShadow: vars.shadow.xl },
  "2xl": { boxShadow: vars.shadow["2xl"] },
});
