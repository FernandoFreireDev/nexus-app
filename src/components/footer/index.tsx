import {
	Barcode,
	CreditCard,
	Facebook,
	Instagram,
	Mail,
	QrCode,
	Smartphone,
	Twitter,
	Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const Footer = () => {
	return (
		<footer className="bg-muted/30 border-t">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company info */}
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 bg-primary from-primary to-primary-hover rounded-lg flex items-center justify-center">
								<span className="text-white font-bold text-sm">N</span>
							</div>
							<h3 className="text-xl font-bold text-primary">Nexus Commerce</h3>
						</div>
						<p className="text-sm text-muted-foreground">
							Sua loja online completa com os melhores produtos e preços do
							mercado. Comprove a qualidade que você merece.
						</p>
						<div className="flex space-x-3">
							<Button variant="outline" size="sm">
								<Facebook className="w-4 h-4" />
							</Button>
							<Button variant="outline" size="sm">
								<Instagram className="w-4 h-4" />
							</Button>
							<Button variant="outline" size="sm">
								<Twitter className="w-4 h-4" />
							</Button>
							<Button variant="outline" size="sm">
								<Youtube className="w-4 h-4" />
							</Button>
						</div>
					</div>

					{/* Quick links */}
					<div className="space-y-4">
						<h4 className="font-semibold">Links Rápidos</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Todas as Categorias
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Ofertas do Dia
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Mais Vendidos
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Lançamentos
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Marcas
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer service */}
					<div className="space-y-4">
						<h4 className="font-semibold">Atendimento</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Central de Ajuda
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Meus Pedidos
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Trocas e Devoluções
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Fale Conosco
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-muted-foreground hover:text-primary transition-colors"
								>
									Política de Privacidade
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter */}
					<div className="space-y-4">
						<h4 className="font-semibold">Newsletter</h4>
						<p className="text-sm text-muted-foreground">
							Receba ofertas exclusivas e novidades em primeira mão
						</p>
						<div className="space-y-2">
							<Input
								type="email"
								placeholder="Seu e-mail"
								className="text-sm"
							/>
							<Button className="w-full" size="sm">
								<Mail className="w-4 h-4 mr-2" />
								Inscrever-se
							</Button>
						</div>
						<div className="flex items-center gap-2 pt-2">
							<Smartphone className="w-4 h-4 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">
								Baixe nosso app
							</span>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© 2024 Nexus Commerce. Todos os direitos reservados.
					</p>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-1">
							<CreditCard className="w-5 h-5" />
							<p>Crédito/Débito</p>
						</div>
						<div className="flex items-center gap-1">
							<QrCode className="w-5 h-5" />
							<p>PIX</p>
						</div>
						<div className="flex items-center gap-1">
							<Barcode className="w-5 h-5" />
							<p>Boleto</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
