import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/styles/globals.css'

const nunito = Nunito({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Nexus Commerce',
	description: 'A nossa plataforma de e-commerce',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${nunito.variable} antialiased`}>{children}</body>
		</html>
	)
}
