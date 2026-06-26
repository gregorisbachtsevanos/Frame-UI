export const duration = {
  75: "75ms",
  100: "100ms",
  150: "150ms",
  200: "200ms",
  300: "300ms",
  500: "500ms",
  700: "700ms",
  1000: "1000ms",
};

export const timingFunctions = {
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeInQuad: "cubic-bezier(0.11, 0, 0.5, 0)",
  easeOutQuad: "cubic-bezier(0.5, 1, 0.89, 1)",
  easeInOutQuad: "cubic-bezier(0.45, 0, 0.55, 1)",
  easeInCubic: "cubic-bezier(0.32, 0, 0.67, 0)",
  easeOutCubic: "cubic-bezier(0.33, 1, 0.68, 1)",
  easeInOutCubic: "cubic-bezier(0.65, 0, 0.35, 1)",
  easeInQuart: "cubic-bezier(0.5, 0, 0.75, 0)",
  easeOutQuart: "cubic-bezier(0.25, 1, 0.5, 1)",
  easeInOutQuart: "cubic-bezier(0.76, 0, 0.24, 1)",
  easeInQuint: "cubic-bezier(0.64, 0, 0.78, 0)",
  easeOutQuint: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeInOutQuint: "cubic-bezier(0.83, 0, 0.17, 1)",
};

export const keyframes = {
  fadeIn: {
    from: { opacity: "0" },
    to: { opacity: "1" },
  },
  fadeOut: {
    from: { opacity: "1" },
    to: { opacity: "0" },
  },
  slideInUp: {
    from: { transform: "translateY(10px)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },
  slideInDown: {
    from: { transform: "translateY(-10px)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },
  slideInLeft: {
    from: { transform: "translateX(-10px)", opacity: "0" },
    to: { transform: "translateX(0)", opacity: "1" },
  },
  slideInRight: {
    from: { transform: "translateX(10px)", opacity: "0" },
    to: { transform: "translateX(0)", opacity: "1" },
  },
  slideOutUp: {
    from: { transform: "translateY(0)", opacity: "1" },
    to: { transform: "translateY(-10px)", opacity: "0" },
  },
  slideOutDown: {
    from: { transform: "translateY(0)", opacity: "1" },
    to: { transform: "translateY(10px)", opacity: "0" },
  },
  slideOutLeft: {
    from: { transform: "translateX(0)", opacity: "1" },
    to: { transform: "translateX(-10px)", opacity: "0" },
  },
  slideOutRight: {
    from: { transform: "translateX(0)", opacity: "1" },
    to: { transform: "translateX(10px)", opacity: "0" },
  },
  scaleIn: {
    from: { transform: "scale(0.95)", opacity: "0" },
    to: { transform: "scale(1)", opacity: "1" },
  },
  scaleOut: {
    from: { transform: "scale(1)", opacity: "1" },
    to: { transform: "scale(0.95)", opacity: "0" },
  },
  spin: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  pulse: {
    "0%, 100%": { opacity: "1" },
    "50%": { opacity: "0.5" },
  },
  bounce: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-25%)" },
  },
  shimmer: {
    "0%": { backgroundPosition: "-1000px 0" },
    "100%": { backgroundPosition: "1000px 0" },
  },
};

export const animations = {
  fadeIn: `fadeIn ${duration[300]} ${timingFunctions.out}`,
  fadeOut: `fadeOut ${duration[300]} ${timingFunctions.out}`,
  slideInUp: `slideInUp ${duration[300]} ${timingFunctions.out}`,
  slideInDown: `slideInDown ${duration[300]} ${timingFunctions.out}`,
  slideInLeft: `slideInLeft ${duration[300]} ${timingFunctions.out}`,
  slideInRight: `slideInRight ${duration[300]} ${timingFunctions.out}`,
  slideOutUp: `slideOutUp ${duration[300]} ${timingFunctions.out}`,
  slideOutDown: `slideOutDown ${duration[300]} ${timingFunctions.out}`,
  slideOutLeft: `slideOutLeft ${duration[300]} ${timingFunctions.out}`,
  slideOutRight: `slideOutRight ${duration[300]} ${timingFunctions.out}`,
  scaleIn: `scaleIn ${duration[300]} ${timingFunctions.out}`,
  scaleOut: `scaleOut ${duration[300]} ${timingFunctions.out}`,
  spin: `spin 1000ms linear infinite`,
  pulse: `pulse 2000ms ${timingFunctions.inOut} infinite`,
  bounce: `bounce 1000ms ${timingFunctions.inOut} infinite`,
  shimmer: `shimmer 2000ms linear infinite`,
};
