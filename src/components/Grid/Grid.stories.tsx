import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta = {
  title: "Foundation/Grid",
  component: Grid,
  tags: ["autodocs"],
  args: {
    minColumnWidth: "180px",
    children: Array.from({ length: 4 }, (_, index) => (
      <div
        key={index}
        style={{
          padding: 12,
          border: "1px solid #cbd5e1",
          borderRadius: 8
        }}
      >
        Item {index + 1}
      </div>
    ))
  }
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
