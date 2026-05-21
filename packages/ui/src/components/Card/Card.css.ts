import { style } from "@vanilla-extract/css";

export const root = style({
  borderRadius: "16px",
  border: "1px solid #e2e8f0",
  background: "linear-gradient(180deg, #ffffff, #f8fafc)",
  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)",
  overflow: "hidden",
});

export const header = style({
  padding: "16px 16px 0 16px",
  fontWeight: 600,
});

export const body = style({
  padding: "16px",
  fontSize: "14px",
  lineHeight: 1.5,
  color: "#0f172a",
});

export const footer = style({
  padding: "0 16px 16px 16px",
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
});
