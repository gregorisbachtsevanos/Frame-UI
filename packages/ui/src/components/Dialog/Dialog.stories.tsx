import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Open: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    title: "Dialog title",
    children: "Dialog content",
  },
};
