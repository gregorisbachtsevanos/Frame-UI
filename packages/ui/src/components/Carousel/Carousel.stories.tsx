import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta: Meta = {
  title: "Components/Carousel",
};

export default meta;

export const Products: StoryObj = {
  render: () => (
    <Carousel.Root>
      <Carousel.Previous />

      <Carousel.Viewport>
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 220,
              height: 260,
              background: "#f1f5f9",
              borderRadius: 12,
              padding: 12,
            }}
          >
            Product {i + 1}
          </div>
        ))}
      </Carousel.Viewport>

      <Carousel.Next />
    </Carousel.Root>
  ),
};
