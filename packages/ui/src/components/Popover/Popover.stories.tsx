import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: "Open popover",
    content: "Popover content",
  },
};
