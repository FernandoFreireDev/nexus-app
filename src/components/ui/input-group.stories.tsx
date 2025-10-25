import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Search } from 'lucide-react'

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group'

const meta = {
	title: 'UI/InputGroup',
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
