import { CreditCard, Truck, Zap } from 'lucide-react'

export default function FeaturesBar() {
	return (
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
	)
}
