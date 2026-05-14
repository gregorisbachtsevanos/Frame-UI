import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta = {
  title: "Foundation/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: "Flexible primitive container",
    style: {
      padding: "16px",
      border: "1px solid #cbd5e1",
      borderRadius: "8px"
    }
  }
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
