import type { Metadata } from 'next'
import { DM_Sans, Josefin_Sans } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const DMSans = DM_Sans({ subsets: ['latin'], variable: '--font-DMSans' })
const JosefinSans = Josefin_Sans({
	subsets: ['latin'],
	variable: '--font-josefinSans',
})

export const metadata: Metadata = {
	title: 'Sheen',
	description: 'Home page of Sheen',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			className="bg-dev"
			lang="en"
		>
			<body className={`${DMSans.variable} ${JosefinSans.variable}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
		// inline SVG
	)
}
