import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
	title: "Components/Breadcrumb",
	component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbItem href="#">Home</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem href="#">Library</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem current>Data</BreadcrumbItem>
		</Breadcrumb>
	),
};
