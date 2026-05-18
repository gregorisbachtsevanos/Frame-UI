import type { Meta, StoryObj } from "@storybook/react";
import { Menubar } from "./Menubar";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  args: {
    children: "Menubar"
  },
};
