import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { RadioGroup } from "./RadioGroup";

const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    name: "example",
    value: "a",
    options: [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" }
    ]
  }
};
