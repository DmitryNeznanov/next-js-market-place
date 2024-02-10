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
			lang="en"
			className="bg-background"
		>
			<body className={`${DMSans.variable} ${JosefinSans.variable}`}>
				<Header />
				<main className="container mt-[6.5rem] mb-[6.2rem] md:mt-[7rem] md:mb-[8rem] xl:mt-[8rem] xl:mb-[11.5rem] bg-background">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
