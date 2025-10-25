import type { Meta, StoryObj } from '@storybook/react'
import FeaturesBar from '.'

const meta = {
	title: 'Components/FeaturesBar',
	component: FeaturesBar,
	tags: ['autodocs'],
} satisfies Meta<typeof FeaturesBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
