import type { Metadata } from 'next'
import { DM_Sans, Josefin_Sans } from 'next/font/google'
import './globals.css'

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
		<html lang="en">
			<body className={`${DMSans.variable} ${JosefinSans.variable}`}>
				{children}
			</body>
		</html>
	)
}
