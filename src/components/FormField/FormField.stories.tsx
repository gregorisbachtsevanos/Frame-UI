import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../Input";

const meta = {
  title: "Forms/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    children: undefined
  }
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormField label="Email">
      <Input id="email" placeholder="name@company.com" />
    </FormField>
  )
};

export const WithHelpText: Story = {
  render: () => (
    <FormField label="Email" hint="We'll never share your email.">
      <Input id="email" placeholder="name@company.com" />
    </FormField>
  )
};

export const WithError: Story = {
  render: () => (
    <FormField label="Email" error="Please enter a valid address.">
      <Input id="email-error" variant="danger" placeholder="name@company.com" />
    </FormField>
  )
};
