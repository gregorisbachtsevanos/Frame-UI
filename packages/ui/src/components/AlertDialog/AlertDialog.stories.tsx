import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,

  argTypes: {
    destructive: {
      control: "boolean",
    },

    title: {
      control: "text",
    },

    description: {
      control: "text",
    },

    confirmLabel: {
      control: "text",
    },

    cancelLabel: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    return <AlertDialog {...args} open={open} onOpenChange={setOpen} />;
  },

  args: {
    title: "Delete project",
    description:
      "This action cannot be undone. This will permanently delete your project and all associated data.",
    confirmLabel: "Delete",
    cancelLabel: "Cancel",
    destructive: true,
    onConfirm: () => {
      console.log("confirmed");
    },
  },
};

export const NonDestructive: Story = {
  args: {
    open: true,
    onOpenChange: () => {},
    title: "Publish changes",
    description: "Your changes will be visible to all users.",
    confirmLabel: "Publish",
    destructive: false,
    onConfirm: () => {},
  },
};
