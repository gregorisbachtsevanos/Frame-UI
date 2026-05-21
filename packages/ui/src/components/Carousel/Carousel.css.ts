import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  width: "100%",
});

export const viewport = style({
  overflow: "hidden",
  width: "100%",
});

export const track = style({
  display: "flex",
  gap: "12px",
  overflowX: "auto",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  padding: "4px",

  selectors: {
    "&::-webkit-scrollbar": { display: "none" },
  },
});

export const item = style({
  flex: "0 0 auto",
  scrollSnapAlign: "start",
});

export const nav = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "36px",
  height: "36px",
  borderRadius: "999px",
  border: "1px solid #e2e8f0",
  background: "#fff",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  boxShadow: "0 6px 18px rgba(15,23,42,0.12)",
  zIndex: 10,
});

export const prev = style({ left: "8px" });
export const next = style({ right: "8px" });
