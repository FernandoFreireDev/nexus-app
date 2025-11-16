'use client'
import { useEffect, useMemo } from 'react'
import CategoriesGrid from '@/components/categories-grid'
import FeaturesBar from '@/components/features-bar'
import Footer from '@/components/footer'
import Header from '@/components/header'
import HeroBanner from '@/components/hero-banner'
import ProductsGrid from '@/components/products-grid'
import { useAppContext } from '@/context/app-context'

export default function Home() {
	const { state } = useAppContext()

	const userName = state.userName

	console.log({ userName })

	return (
		<>
			<Header />
			<main>
				<HeroBanner />
				<FeaturesBar />
				<CategoriesGrid />
				<ProductsGrid />
			</main>
			<Footer />
		</>
	)
}
