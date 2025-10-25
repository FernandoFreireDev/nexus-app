import CategoriesGrid from '@/components/categories-grid'
import FeaturesBar from '@/components/features-bar'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<HeroBanner />
				<FeaturesBar />
				<CategoriesGrid />
			</main>
		</>
	)
}
