'use client'
import Autoplay from 'embla-carousel-autoplay'
import Fade from 'embla-carousel-fade'
import { ArrowRight, Percent, Tag } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselResettable,
} from '@/components/ui/carousel'

const AUTOPLAY_DELAY = 5000

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
	},
	{
		name: 'Moda',
		discount: 'Até 50% OFF',
		icon: '👗',
	},
	{
		name: 'Casa',
		discount: 'Até 35% OFF',
		icon: '🏠',
	},
	{
		name: 'Esportes',
		discount: 'Até 45% OFF',
		icon: '⚽',
	},
]

const HeroBanner = () => {
	return (
		<section className="relative">
			<Carousel
				opts={{ loop: true }}
				plugins={[
					Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
					Fade(),
				]}
				className="w-full"
			>
				<CarouselResettable autoPlayDelay={AUTOPLAY_DELAY}>
					<CarouselContent>
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
												className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden hover:scale-105 transition-transform hover:shadow-2xl"
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

						<CarouselItem>
							<div className="bg-gradient-to-br from-rose-700 to-rose-500 text-white h-full flex flex-col justify-center gap-4 items-center px-4 py-4">
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
												className={`bg-white/10 border-1 border-white/20  rounded-2xl p-8 text-center transform transition-all hover:scale-110 hover:shadow-2xl`}
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
				</CarouselResettable>
			</Carousel>
		</section>
	)
}

export default HeroBanner
