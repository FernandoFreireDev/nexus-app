'use client'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, CreditCard, Percent, Tag, Truck, Zap } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

const HeroBanner = () => {
	const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

	const featuredProducts = [
		{
			id: 1,
			name: 'iPhone 15 Pro',
			price: 'R$ 7.999',
			discount: '15% OFF',
			image: '/iphone-15-pro.jpg',
		},
		{
			id: 2,
			name: 'Gaming Laptop',
			price: 'R$ 5.499',
			discount: '20% OFF',
			image: '/gaming-laptop.jpg',
		},
		{
			id: 3,
			name: 'Smartwatch Fitness',
			price: 'R$ 1.299',
			discount: '25% OFF',
			image: '/smartwatch-fitness.jpg',
		},
		{
			id: 4,
			name: 'Smart TV 4K',
			price: 'R$ 2.999',
			discount: '30% OFF',
			image: '/smart-tv-4k.jpg',
		},
	]

	const categories = [
		{
			name: 'Eletrônicos',
			discount: 'Até 40% OFF',
			icon: '📱',
			color: 'from-blue-500 to-blue-600',
		},
		{
			name: 'Moda',
			discount: 'Até 50% OFF',
			icon: '👗',
			color: 'from-pink-500 to-pink-600',
		},
		{
			name: 'Casa',
			discount: 'Até 35% OFF',
			icon: '🏠',
			color: 'from-green-500 to-green-600',
		},
		{
			name: 'Esportes',
			discount: 'Até 45% OFF',
			icon: '⚽',
			color: 'from-orange-500 to-orange-600',
		},
	]

	return (
		<section className="relative">
			<Carousel
				opts={{ loop: true }}
				plugins={[plugin.current]}
				className="w-full"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{/* Slide 1: Main Banner */}
					<CarouselItem>
						<div className="bg-gradient-to-br from-green-700 to-green-500 text-white h-full flex justify-center gap-4 items-center px-4 py-4">
							<div className="space-y-6 flex-2 max-w-3xl">
								<h1 className="text-4xl md:text-5xl font-bold leading-tight">
									Sua loja online completa
								</h1>
								<p className="text-lg text-white/90">
									Milhões de produtos com os melhores preços, entrega rápida e
									segura. Descubra tudo o que você precisa em um só lugar.
								</p>
								<div className="flex flex-col sm:flex-row gap-4">
									<Button
										size="lg"
										variant="outline"
										className="border-white hover:bg-white hover:text-primary"
									>
										Explorar Produtos
										<ArrowRight className="ml-2 w-4 h-4" />
									</Button>
									<Button
										size="lg"
										variant="outline"
										className="border-white hover:bg-white hover:text-primary"
									>
										Baixar App
									</Button>
								</div>
							</div>
							<div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
								<div className="text-6xl">🛍️</div>
							</div>
						</div>
					</CarouselItem>

					{/* Slide 2: Featured Products */}
					<CarouselItem>
						<div className="bg-gradient-to-br from-purple-700 to-purple-500 text-white px-4 py-8">
							<div className="flex flex-col items-center">
								<div className="text-center mb-8">
									<div className="flex items-center justify-center gap-2 mb-4">
										<Tag className="w-8 h-8" />
										<h2 className="text-4xl md:text-5xl font-bold">
											Produtos em Destaque
										</h2>
									</div>
									<p className="text-lg text-white/90">
										Ofertas especiais por tempo limitado
									</p>
								</div>
								<div className="flex justify-between max-w-4xl gap-4">
									{featuredProducts.map((product) => (
										<Card
											key={product.id}
											className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:scale-105 transition-transform"
										>
											<div className="aspect-square relative">
												<Image
													src={product.image}
													alt={product.name}
													width={300}
													height={300}
													className="w-full h-full object-cover"
												/>
												<div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
													{product.discount}
												</div>
											</div>
											<div className="p-3 text-center">
												<h3 className="font-semibold text-sm mb-1">
													{product.name}
												</h3>
												<p className="text-lg font-bold">{product.price}</p>
											</div>
										</Card>
									))}
								</div>
							</div>
						</div>
					</CarouselItem>

					{/* Slide 3: Categories on Sale */}
					<CarouselItem>
						<div className="bg-gradient-to-br from-red-800 to-red-600 text-white h-full flex flex-col justify-center gap-4 items-center px-4 py-4">
							<div className="text-center mb-8">
								<div className="flex items-center justify-center gap-2 mb-4">
									<Percent className="w-8 h-8" />
									<h2 className="text-4xl md:text-5xl font-bold">
										Categorias em Promoção
									</h2>
								</div>
								<p className="text-lg text-white/90">
									Descontos imperdíveis em todas as categorias
								</p>
							</div>
							<div className="flex gap-8">
								{categories.map((category) => (
									<div key={category.name} className="group cursor-pointer">
										<div
											className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-center transform transition-all hover:scale-110 hover:shadow-2xl`}
										>
											<div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
												{category.icon}
											</div>
											<h3 className="font-bold text-xl mb-2">
												{category.name}
											</h3>
											<p className="text-sm font-semibold bg-white/20 rounded-full px-3 py-1 inline-block">
												{category.discount}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</CarouselItem>
				</CarouselContent>

				<CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
				<CarouselNext className="right-4 bg-white/80 hover:bg-white" />
			</Carousel>

			{/* Features bar */}
			<div className="bg-white border-b shadow-sm px-4 py-6">
				<div className="flex justify-between items-center max-w-6xl mx-auto">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
							<Truck className="w-5 h-5 text-primary" />
						</div>
						<div>
							<h3 className="font-semibold text-sm">Frete Grátis</h3>
							<p className="text-xs text-muted-foreground">
								Em compras acima de R$ 99
							</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
							<CreditCard className="w-5 h-5 text-primary" />
						</div>
						<div>
							<h3 className="font-semibold text-sm">Pague como quiser</h3>
							<p className="text-xs text-muted-foreground">
								Cartão, PIX, boleto em até 12x
							</p>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
							<Zap className="w-5 h-5 text-primary" />
						</div>
						<div>
							<h3 className="font-semibold text-sm">Entrega Rápida</h3>
							<p className="text-xs text-muted-foreground">
								Receba em até 2 dias úteis
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroBanner
