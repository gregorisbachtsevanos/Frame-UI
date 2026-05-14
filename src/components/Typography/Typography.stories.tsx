import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Text } from "./Typography";

const meta = {
  title: "Foundation/Typography",
  component: Text,
  tags: ["autodocs"]
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 8 }}>
      <Heading size="lg">Design system heading</Heading>
      <Heading size="md">Section heading</Heading>
      <Text size="lg">Readable lead paragraph text</Text>
      <Text tone="muted">Secondary muted copy</Text>
      <Text tone="accent">Accent semantic text</Text>
      <Text tone="danger">Danger semantic text</Text>
    </div>
  )
};
