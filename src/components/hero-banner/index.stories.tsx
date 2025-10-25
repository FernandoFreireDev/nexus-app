import type { Meta, StoryObj } from '@storybook/react'
import HeroBanner from '.'

const meta = {
	title: 'Components/HeroBanner',
	component: HeroBanner,
	tags: ['autodocs'],
} satisfies Meta<typeof HeroBanner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
