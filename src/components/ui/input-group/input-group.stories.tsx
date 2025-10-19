import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Search } from 'lucide-react'

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from './index'

const meta = {
	title: 'Input Group',
	component: InputGroup,
	render: () => (
		<InputGroup>
			<InputGroupInput placeholder="Type to search..." />
			<InputGroupAddon align="inline-end">
				<InputGroupButton variant="ghost">
					<Search />
				</InputGroupButton>
			</InputGroupAddon>
		</InputGroup>
	),
} satisfies Meta<typeof InputGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {},
}
