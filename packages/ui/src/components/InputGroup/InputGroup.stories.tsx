import type { Meta, StoryObj } from "@storybook/react";
import { InputGroup } from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  args: {
    children: "Input group"
  },
};
