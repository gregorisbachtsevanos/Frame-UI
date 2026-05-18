import { style } from "@vanilla-extract/css";
export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  minHeight: "40px",
  padding: "0 16px",
  borderRadius: "12px",
  border: "1px solid #1d4ed8",
  background: "linear-gradient(180deg, #3b82f6, #2563eb)",
  color: "#ffffff",
  fontWeight: 600,
  letterSpacing: "0.01em",
  boxShadow: "0 10px 24px rgba(37, 99, 235, 0.35)",
  cursor: "pointer",
});

