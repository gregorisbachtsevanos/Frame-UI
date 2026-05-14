import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Submit</Button>);
    expect(screen.getByRole("button", { name: "Submit" })).toBeTruthy();
  });

  it("uses default type=button for accessibility and form safety", () => {
    render(<Button>Default</Button>);
    expect(screen.getByRole("button", { name: "Default" }).getAttribute("type")).toBe(
      "button"
    );
  });
});
