import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Input } from './index'

const meta = {
	title: 'Input',
	component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		placeholder: 'Email',
	},
}
