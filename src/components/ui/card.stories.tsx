import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './card'

const meta = {
	title: 'UI/Card',
	component: Card,
	tags: ['autodocs'],
	args: {
		className: 'w-[380px]',
	},
	render: (args) => (
		<Card {...args}>
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>Deploy your new project in one-click.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>
					This is the content area of the card. You can put any elements you
					want here.
				</p>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Deploy</Button>
			</CardFooter>
		</Card>
	),
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
