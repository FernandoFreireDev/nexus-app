import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Heart, ShoppingCart } from 'lucide-react'
import type { ComponentProps } from 'react'

import { fn } from 'storybook/test'

import { Button, buttonVariants } from '@/components/ui/button'

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
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    rounded: {
      control: { type: 'radio' },
      options: ['default', 'full']
    },
    variant: {
      table: {
        disable: true
      }
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

type NotificationButtonProps = ComponentProps<typeof Button.Notification>

type Story = StoryObj<MetaProps | NotificationButtonProps>

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

export const Notification: Story = {
	args: {
		children: <ShoppingCart />,
		variant: 'ghost',
    count: 9
	},
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    hasIcon: {
      table: {
        disable: true
      }
    },
    count: {
      control: { type: 'number' }
    }
  },
  render: (args: Story['args']) => (
    <Button.Notification {...args} />
  )
}