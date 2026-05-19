import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",

  component: Alert,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    tone: {
      control: "select",

      options: ["info", "success", "warning", "danger"],
    },

    children: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    tone: "info",
    children: "This is an informational alert.",
  },
};

export const Success: Story = {
  args: {
    tone: "success",
    children: "Your changes were saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    tone: "warning",
    children: "Please review your configuration.",
  },
};

export const Danger: Story = {
  args: {
    tone: "danger",
    children: "Something went wrong while processing the request.",
  },
};
