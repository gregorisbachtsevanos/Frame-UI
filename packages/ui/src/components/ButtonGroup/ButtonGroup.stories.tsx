import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "../Button";

const meta: Meta<typeof ButtonGroup> = {
	title: "Components/ButtonGroup",
	component: ButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
	render: () => (
		<ButtonGroup>
			<Button>Left</Button>
			<Button>Middle</Button>
			<Button>Right</Button>
		</ButtonGroup>
	),
};
