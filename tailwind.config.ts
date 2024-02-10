import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				mobile: '320px',
				desktop: '1440px',
			},
			colors: {
				primary: 'rgb(var(--color-primary) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				gray: {
					DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
					light: 'rgb(var(--color-light-gray) / <alpha-value>)',
				},
				error: 'rgba(var(--color-error) / <alpha-value>)',
				dev: '#FFB6B6',
			},
			fontFamily: {
				josefinSans: ['var(--font-josefinSans)'],
				DMSans: ['var(--font-DMSans)'],
			},
			fontSize: {
				heading1: ['4.25rem', { fontWeight: '700', lineHeight: '4.25rem' }],
				heading2: ['2rem', { fontWeight: '700', lineHeight: '2.2rem' }],
				heading3: ['1.5rem', { fontWeight: '700', lineHeight: '1.5rem' }],
				base: [
					'1rem',
					{
						lineHeight: '1.5625rem',
						fontWeight: '400',
					},
				],
				md: ['.875rem', { fontWeight: '400' }],
				xl: ['1.25rem', { fontWeight: '400' }],
			},
			listStyleImage: {
				dot: "url('/public/shapes/dot.svg')",
				'dot-dark': "url('/public/shapes/dot-dark.svg')",
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '2rem',
					lg: '4rem',
					xl: '5rem',
					desktop: '6.25rem',
				},
			},
		},
	},
	plugins: [],
}
export default config
