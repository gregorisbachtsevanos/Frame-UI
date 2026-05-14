import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Foundation/Stack",
  component: Stack,
  tags: ["autodocs"],
  args: {
    direction: "horizontal",
    gap: "md",
    children: [
      <div key="1" style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }}>One</div>,
      <div key="2" style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }}>Two</div>,
      <div key="3" style={{ padding: 12, border: "1px solid #cbd5e1", borderRadius: 8 }}>Three</div>
    ]
  }
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
