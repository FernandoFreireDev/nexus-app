import { Heart, Search, ShoppingCart, User, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@/components/ui/input-group'

function TopBar() {
	return (
		<div className="flex justify-center items-center gap-4 w-full bg-primary text-primary-foreground p-2">
			<div className="flex-1 text-center">
				<p>
					🚚 Frete GRÁTIS em compras acima de R$ 99 | 📱 Baixe o app e ganhe 10%
					OFF
				</p>
			</div>

			<button
				type="button"
				className="text-primary-foreground hover:bg-accent/50 rounded-sm cursor-pointer"
			>
				<X />
			</button>
		</div>
	)
}

function Main() {
	return (
		<header className="flex justify-between items-center gap-4 w-full p-4 border-b-2">
			<Image
				src="/logo-horizontal-transparente.png"
				alt="Logo vertical da nexus commerce"
				width={150}
				height={150}
			/>
			<InputGroup className="flex-1 rounded-full">
				<InputGroupInput placeholder="Buscar produto, marca e muito mais..." />
				<InputGroupAddon align="inline-end">
					<InputGroupButton variant="ghost">
						<Search />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>

			<div className="flex justify-between items-center gap-1">
				<Button variant="ghost">
					<Heart />
					Favoritos
				</Button>
				<Button variant="ghost">
					<User /> Entrar
				</Button>
				<Button.Notification variant="ghost" count={9}>
					<ShoppingCart />
				</Button.Notification>
			</div>
		</header>
	)
}

function Categories() {
	const categories = [
		{
			title: 'Eletrônicos',
			href: '/',
		},
		{
			title: 'Moda',
			href: '/',
		},
		{
			title: 'Casa & Jardim',
			href: '/',
		},
		{
			title: 'Esportes',
			href: '/',
		},
		{
			title: 'Beleza',
			href: '/',
		},
		{
			title: 'Livros',
			href: '/',
		},
		{
			title: 'Ofertas',
			href: '/',
		},
	]

	return (
		<div className="flex justify-start items-center gap-4 py-2 px-4 bg-gray-100">
			{categories.map((category) => (
				<Link
					key={category.title}
					href={category.href}
					className="hover:text-primary font-medium"
				>
					{category.title}
				</Link>
			))}
		</div>
	)
}

export default function Header() {
	return (
		<>
			<TopBar />
			<Main />
			<Categories />
		</>
	)
}
