'use client'

import { createContext, type ReactNode, useContext, useState } from 'react'
import deepMerge from '@/functions/deep-merge'

type TemplateState = {
	userName?: string
	products: {
		id: number
		name: string
		price: number
		originalPrice: number
		rating: number
		reviews: number
		image: string
		badge: string
		badgeColor: string
	}[]
}

interface AppState {
	state: TemplateState
	updateState: (updated: Partial<TemplateState>) => void
}

const AppContext = createContext<AppState>({} as AppState)

export function AppProvider({ children }: { children: ReactNode }) {
	const [state, setState] = useState<TemplateState>({
		products: [
			{
				id: 1,
				name: 'iPhone 15 Pro Max 256GB',
				price: 8999.99,
				originalPrice: 9999.99,
				rating: 4.8,
				reviews: 1245,
				image: '/iphone-15-pro.jpg',
				badge: 'Mais Vendido',
				badgeColor: 'bg-primary',
			},
			{
				id: 2,
				name: 'Notebook Gamer RTX 4060',
				price: 4299.9,
				originalPrice: 5199.9,
				rating: 4.6,
				reviews: 892,
				image: '/gaming-laptop.jpg',
				badge: 'Oferta',
				badgeColor: 'bg-red-500',
			},
			{
				id: 3,
				name: 'Smart TV 55" 4K QLED',
				price: 2199.99,
				originalPrice: 2799.99,
				rating: 4.7,
				reviews: 1567,
				image: '/smart-tv-4k.jpg',
				badge: '12x sem juros',
				badgeColor: 'bg-blue-500',
			},
			{
				id: 4,
				name: 'Tênis Nike Air Max',
				price: 459.9,
				originalPrice: 599.9,
				rating: 4.5,
				reviews: 423,
				image: '/nike-air-max.jpg',
				badge: 'Frete Grátis',
				badgeColor: 'bg-green-500',
			},
			{
				id: 5,
				name: 'Cafeteira Expresso Profissional',
				price: 899.99,
				originalPrice: 1299.99,
				rating: 4.9,
				reviews: 234,
				image: '/espresso-machine.jpg',
				badge: 'Novo',
				badgeColor: 'bg-purple-500',
			},
			{
				id: 6,
				name: 'Headphone Bluetooth Premium',
				price: 349.9,
				originalPrice: 449.9,
				rating: 4.4,
				reviews: 678,
				image: '/bluetooth-headphones.jpg',
				badge: 'Até 40% OFF',
				badgeColor: 'bg-orange-500',
			},
			{
				id: 7,
				name: 'Smartwatch Fitness Tracker',
				price: 299.99,
				originalPrice: 399.99,
				rating: 4.3,
				reviews: 1123,
				image: '/smartwatch-fitness.jpg',
				badge: 'Entrega hoje',
				badgeColor: 'bg-cyan-500',
			},
			{
				id: 8,
				name: 'Camera DSLR Profissional',
				price: 3299.99,
				originalPrice: 3899.99,
				rating: 4.8,
				reviews: 445,
				image: '/dslr-camera.jpg',
				badge: "Editor's Choice",
				badgeColor: 'bg-indigo-500',
			},
		],
	})

	function updateState(updated: Partial<TemplateState>) {
		setState((prev) => deepMerge(prev, updated))
	}

	return (
		<AppContext.Provider value={{ state, updateState }}>
			{children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	const ctx = useContext(AppContext)
	if (!ctx) {
		throw new Error('useApp deve ser usado dentro do <AppProvider>')
	}
	return ctx
}
