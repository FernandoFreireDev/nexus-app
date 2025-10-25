import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import CategoriesGrid from '.'

const meta = {
	title: 'Components/CategoriesGrid',
	component: CategoriesGrid,
} satisfies Meta<typeof CategoriesGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
