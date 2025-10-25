import {
	Book,
	Car,
	Dumbbell,
	Home,
	Shirt,
	Smartphone,
	Sparkles,
	Tag,
} from 'lucide-react'

const categories = [
	{
		name: 'Eletrônicos',
		icon: Smartphone,
		color: 'bg-blue-500',
		items: '12.5k',
	},
	{
		name: 'Moda',
		icon: Shirt,
		color: 'bg-pink-500',
		items: '8.2k',
	},
	{
		name: 'Casa & Jardim',
		icon: Home,
		color: 'bg-green-500',
		items: '6.1k',
	},
	{
		name: 'Esportes',
		icon: Dumbbell,
		color: 'bg-orange-500',
		items: '4.8k',
	},
	{
		name: 'Beleza',
		icon: Sparkles,
		color: 'bg-purple-500',
		items: '3.9k',
	},
	{
		name: 'Livros',
		icon: Book,
		color: 'bg-indigo-500',
		items: '2.7k',
	},
	{
		name: 'Automotivo',
		icon: Car,
		color: 'bg-red-500',
		items: '5.3k',
	},
	{
		name: 'Ofertas',
		icon: Tag,
		color: 'bg-yellow-500',
		items: '1.2k',
	},
]

const CategoriesGrid = () => {
	return (
		<section className="py-12 bg-gray-50 w-full">
			<div className="container mx-auto px-4 flex items-center flex-col">
				<div className="text-center mb-8">
					<h2 className="text-2xl md:text-3xl font-bold mb-2">
						Explore por Categoria
					</h2>
					<p className="text-muted-foreground">
						Encontre exatamente o que você procura
					</p>
				</div>

				<div className="flex items-center flex-wrap gap-4">
					{categories.map((category) => (
						<div
							key={category.name}
							className="p-6 w-40 h-40 text-center cursor-pointer hover:scale-110 transition-transform bg-white border rounded-xl hover:shadow-md"
						>
							<div
								className={`w-12 h-12 mx-auto mb-3  ${category.color} flex items-center justify-center rounded-full`}
							>
								<category.icon className="w-6 h-6 text-white" />
							</div>
							<h3 className="font-semibold text-sm mb-1">{category.name}</h3>
							<p className="text-xs text-muted-foreground">
								{category.items} itens
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CategoriesGrid
