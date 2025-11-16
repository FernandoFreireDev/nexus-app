import { Heart, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const products = [
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
]

const ProductsGrid = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h2 className="text-2xl md:text-3xl font-bold mb-2">
							Produtos em Destaque
						</h2>
						<p className="text-muted-foreground">
							Os produtos mais populares e bem avaliados
						</p>
					</div>
					<Button variant="outline">Ver todos</Button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{products.map((product) => (
						<div key={product.id} className="product-card group border rounded-xl ">
							<div className="relative">
								{/* Product image */}
								<div className="aspect-square bg-muted mb-4 flex items-center justify-center relative overflow-hidden rounded-t-xl border-b">
									<Image
										src={product.image}
										alt={product.name}
										width={300}
										height={300}
										className="w-full h-full object-cover"
									/>

									{/* Badge */}
									<Badge
										className={`absolute top-2 left-2 text-white ${product.badgeColor}`}
									>
										{product.badge}
									</Badge>

									{/* Favorite button */}
									<Button
										size="sm"
										variant="secondary"
										className="absolute top-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
									>
										<Heart className="w-4 h-4" />
									</Button>

									{/* Quick add to cart */}
									<Button
										size="sm"
										className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
									>
										<ShoppingCart className="w-4 h-4 mr-2" />
										Comprar
									</Button>
								</div>

								{/* Product info */}
								<div className="space-y-2 px-4 pb-2">
									<h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
										{product.name}
									</h3>

									<div className="flex items-center gap-2">
										<div className="flex items-center gap-1">
											<Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
											<span className="text-xs text-muted-foreground">
												{product.rating} ({product.reviews})
											</span>
										</div>
									</div>

									<div className="space-y-1">
										{product.originalPrice && (
											<p className="text-xs text-muted-foreground line-through">
												R${' '}
												{product.originalPrice.toLocaleString('pt-BR', {
													minimumFractionDigits: 2,
												})}
											</p>
										)}
										<p className="text-lg font-bold text-primary">
											R${' '}
											{product.price.toLocaleString('pt-BR', {
												minimumFractionDigits: 2,
											})}
										</p>
										<p className="text-xs text-muted-foreground">
											ou 12x de R${' '}
											{(product.price / 12).toLocaleString('pt-BR', {
												minimumFractionDigits: 2,
											})}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ProductsGrid
