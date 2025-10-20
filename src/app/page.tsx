import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import { Button } from '@/components/ui/button'

export default function Home() {
	return (
		<>
			<Header />
			<HeroBanner />
			<main>
				<h1>Nexus Commerce</h1>
				<Button>Get Started</Button>
			</main>
		</>
	)
}
