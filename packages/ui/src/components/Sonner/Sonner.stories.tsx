import type { Meta, StoryObj } from "@storybook/react";
import { Sonner } from "./Sonner";

const meta: Meta<typeof Sonner> = {
  title: "Components/Sonner",
  component: Sonner,
};

export default meta;
type Story = StoryObj<typeof Sonner>;

export const Default: Story = {
  args: {
    children: "Notification area"
  },
};
