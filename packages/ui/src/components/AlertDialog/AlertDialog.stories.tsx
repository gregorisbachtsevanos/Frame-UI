import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Open: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    title: "Delete item",
    description: "This action cannot be undone.",
    onConfirm: () => {},
  },
};
