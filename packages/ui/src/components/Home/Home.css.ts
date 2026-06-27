import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "@frame-ui/theme";

// Space token mappings for semantic sizes
// xl: 24 (96px), lg: 20 (80px), md: 12 (48px), sm: 6 (24px), xs: 4 (16px)

// Hero Section
export const heroSection = style({
  background: `linear-gradient(135deg, ${vars.color.primary} 0%, #1e40af 100%)`,
  color: "#ffffff",
  padding: `${vars.space[24]} ${vars.space[20]}`,
  borderRadius: vars.radius.lg,
  marginBottom: vars.space[24],
  textAlign: "center",
  minHeight: "400px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space[20]} ${vars.space[12]}`,
      minHeight: "300px",
    },
  },
});

export const heroTitle = style({
  fontSize: "48px",
  fontWeight: 700,
  marginBottom: vars.space[12],
  "@media": {
    "(max-width: 768px)": {
      fontSize: "32px",
    },
  },
});

export const heroSubtitle = style({
  fontSize: vars.fontSize.lg,
  opacity: 0.95,
  marginBottom: vars.space[20],
  maxWidth: "600px",
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.fontSize.base,
    },
  },
});

export const heroCTA = style({
  display: "flex",
  gap: vars.space[12],
  justifyContent: "center",
  flexWrap: "wrap",
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      width: "100%",
    },
  },
});

// Section Headers
export const sectionHeader = style({
  fontSize: "28px",
  fontWeight: 700,
  marginTop: vars.space[24],
  marginBottom: vars.space[20],
  color: vars.color.text,
  borderBottom: `2px solid ${vars.color.primary}`,
  paddingBottom: vars.space[12],
});

// Grid Layouts
export const grid = style({
  display: "grid",
  gap: vars.space[20],
  marginBottom: vars.space[24],
});

export const gridTwoColumns = style({
  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const gridThreeColumns = style({
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const gridFourColumns = style({
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

// Cards
export const card = style({
  padding: vars.space[20],
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  background: vars.color.surface,
  transition: `all ${vars.transition.normal}`,
  ":hover": {
    boxShadow: vars.shadow.md,
    borderColor: vars.color.primary,
    transform: "translateY(-2px)",
  },
});

export const cardHeader = style({
  fontSize: "18px",
  fontWeight: 600,
  marginBottom: vars.space[12],
  color: vars.color.text,
});

export const cardDescription = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  lineHeight: 1.6,
  marginBottom: vars.space[12],
});

export const cardLink = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[6],
  color: vars.color.primary,
  textDecoration: "none",
  fontWeight: 500,
  transition: `color ${vars.transition.fast}`,
  ":hover": {
    color: vars.color.primaryHover,
    textDecoration: "underline",
  },
});

// Category Cards
export const categoryCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const categoryIcon = style({
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: vars.radius.sm,
  background: `${vars.color.primary}20`,
  fontSize: "24px",
});

// Design Tokens
export const tokensContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[20],
});

export const tokenGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[12],
});

export const tokenGroupTitle = style({
  fontSize: "16px",
  fontWeight: 600,
  color: vars.color.text,
});

export const colorSwatch = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[12],
  padding: vars.space[12],
  borderRadius: vars.radius.sm,
  background: vars.color.surfaceSecondary,
});

export const colorBox = style({
  width: "48px",
  height: "48px",
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.border}`,
});

export const colorInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const colorName = style({
  fontSize: vars.fontSize.sm,
  fontWeight: 600,
  color: vars.color.text,
});

export const colorValue = style({
  fontSize: "11px",
  color: vars.color.textMuted,
  fontFamily: "monospace",
});

// Typography Samples
export const typographySamples = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[20],
});

export const typographySample = style({
  padding: vars.space[12],
  background: vars.color.surfaceSecondary,
  borderRadius: vars.radius.sm,
  borderLeft: `4px solid ${vars.color.primary}`,
});

export const typographyLabel = style({
  fontSize: "11px",
  fontWeight: 600,
  color: vars.color.textMuted,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginBottom: "4px",
});

// Quick Links
export const quickLinksContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: vars.space[12],
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const quickLinkItem = style({
  padding: vars.space[12],
  borderRadius: vars.radius.sm,
  background: vars.color.surfaceSecondary,
  border: `1px solid ${vars.color.border}`,
  textDecoration: "none",
  color: vars.color.primary,
  fontWeight: 500,
  transition: `all ${vars.transition.fast}`,
  cursor: "pointer",
  ":hover": {
    background: vars.color.primary,
    color: "#ffffff",
    borderColor: vars.color.primary,
  },
});

// Changelog Section
export const changelogItem = style({
  padding: vars.space[12],
  borderLeft: `3px solid ${vars.color.primary}`,
  borderRadius: vars.radius.sm,
  background: vars.color.surfaceSecondary,
});

export const changelogVersion = style({
  fontSize: "14px",
  fontWeight: 600,
  color: vars.color.text,
  marginBottom: "4px",
});

export const changelogDate = style({
  fontSize: "12px",
  color: vars.color.textMuted,
  marginBottom: vars.space[6],
});

export const changelogList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
});

export const changelogListItem = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textMuted,
  padding: "4px 0 4px 20px",
  position: "relative",
  ":before": {
    content: "→",
    position: "absolute",
    left: 0,
    color: vars.color.primary,
    fontWeight: "bold",
  },
});

// Container
export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: `${vars.space[24]} ${vars.space[20]}`,
  "@media": {
    "(max-width: 768px)": {
      padding: `${vars.space[20]} ${vars.space[12]}`,
    },
  },
});

// Dark Mode Support
globalStyle("[class*='darkTheme']", {
  vars: {
    [vars.color.text]: "#f1f5f9",
    [vars.color.textMuted]: "#cbd5e1",
    [vars.color.surface]: "#0f172a",
    [vars.color.surfaceSecondary]: "#1e293b",
    [vars.color.border]: "#334155",
    [vars.color.borderStrong]: "#475569",
  } as any,
});

export const badge = style({
  display: "inline-block",
  padding: `${vars.space[4]} ${vars.space[6]}`,
  background: `${vars.color.primary}20`,
  color: vars.color.primary,
  borderRadius: vars.radius.sm,
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase",
  marginRight: vars.space[6],
});

export const button = style({
  padding: `${vars.space[12]} ${vars.space[20]}`,
  borderRadius: vars.radius.md,
  border: "none",
  fontSize: vars.fontSize.base,
  fontWeight: 600,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: vars.space[6],
});

export const buttonPrimary = style({
  background: "#ffffff",
  color: vars.color.primary,
  ":hover": {
    opacity: 0.9,
  },
});

export const buttonSecondary = style({
  background: "transparent",
  color: "#ffffff",
  border: `2px solid #ffffff`,
  ":hover": {
    background: "#ffffff20",
  },
});
