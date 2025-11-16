'use client'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useAppContext } from '@/context/app-context'

const ProductsGrid = () => {
	const { state, updateState } = useAppContext()

	const handleClick = useCallback(
		(name: string) => {
			updateState({
				userName: name,
			})
		},
		[updateState],
	)

	const products = useMemo(() => state.products, [state.products])

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
						<div
							key={product.id}
							className="product-card group border rounded-xl "
						>
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
										onClick={() => handleClick(product.name)}
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
