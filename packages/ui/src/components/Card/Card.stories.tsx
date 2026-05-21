import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    header: "Card title",
    children: "This is the main content of the card.",
  },
};

export const WithFooter: Story = {
  args: {
    header: "Settings",
    children: "Card content goes here.",
    footer: <Button>Save changes</Button>,
  },
};
