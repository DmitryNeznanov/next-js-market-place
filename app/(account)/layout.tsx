export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className="max-w-[26.875rem] md:max-w-[57rem] mx-auto flex flex-col md:flex-row md:gap-x-[6.4rem]">
			{children}
		</section>
	)
}
