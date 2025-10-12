import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Heart } from 'lucide-react'
import type { ComponentProps } from 'react'

import { fn } from 'storybook/test'

import { Button } from '@/components/ui/button'

type MetaProps = ComponentProps<typeof Button> & { hasIcon?: boolean }

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
    hasIcon: {
      constrol: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    rounded: {
      control: { type: 'radio' },
      options: ['default', 'full']
    }
	},
	args: {
		onClick: fn(),
    hasIcon: false,
    size: 'default',
    rounded: 'default'
	},
  render: (args) => {
		const { hasIcon, children, ...rest } = args

		return (
			<Button {...rest}>
				{hasIcon && <Heart />}
				{children}
			</Button>
		)
	},
} satisfies Meta<MetaProps>

export default meta

type Story = StoryObj<MetaProps>

export const Default: Story = {
	args: {
		children: 'Botão Padrão',
		variant: 'default',
    size: 'default'
	},
}

export const Secondary: Story = {
	args: {
		children: 'Botão Secundário',
		variant: 'secondary',
	},
}

export const Ghost: Story = {
	args: {
		children: 'Botão Fantasma',
		variant: 'ghost',
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