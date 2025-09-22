import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Heart } from 'lucide-react'

import { fn } from 'storybook/test'

import { Button } from '@/components/ui/button'

const meta = {
	title: 'Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		asChild: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		onClick: fn(),
	},
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: 'Botão Padrão',
		variant: 'default',
	},
}

export const Secondary: Story = {
	args: {
		children: 'Botão Secundário',
		variant: 'secondary',
	},
}

export const Destructive: Story = {
	args: {
		children: 'Botão de Perigo',
		variant: 'destructive',
	},
}

export const Outline: Story = {
	args: {
		children: 'Botão Contornado',
		variant: 'outline',
	},
}

export const Link: Story = {
	args: {
		children: 'Botão Link',
		variant: 'link',
	},
}

export const Circular: Story = {
	args: {
		children: <Heart />,
		variant: 'circle',
		'aria-label': 'Adicionar aos favoritos',
	},
}
