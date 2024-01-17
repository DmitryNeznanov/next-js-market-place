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
				black: 'rgba(6, 6, 6, 1)',
				white: 'rgba(251, 251, 251, 1)',
				accent: {
					'400': 'rgba(255, 92, 209, 1)',
					DEFAULT: 'rgba(255, 0, 184, 1)',
				},
				gray: {
					'100': 'rgba(245, 245, 245, 1)',
					'200': 'rgba(225, 225, 225, 1)',
					DEFAULT: 'rgba(159, 159, 159, 1)',
					'600': 'rgba(118, 118, 118, 1)',
					'700': 'rgba(82, 82, 82, 1)',
					'800': 'rgba(37, 37, 37, 1)',
				},
				error: 'rgba(255, 54, 54, 1)',
				// error: '#ff3636',
				// primary: 'rgb(var(--color-primary) / <alpha-value>)',
				// background: 'rgb(var(--color-background) / <alpha-value>)',
				// accent: 'rgb(var(--color-accent) / <alpha-value>)',
				// gray: {
				// 	dark: 'rgb(var(--color-dark-gray) / <alpha-value>)',
				// 	DEFAULT: 'rgb(var(--color-gray) / <alpha-value>)',
				// 	light: 'rgb(var(--color-light-gray) / <alpha-value>)',
				// },
				// error: '#ff3636',
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
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					md: '2rem',
					lg: '4rem',
					desktop: '6.25rem',
				},
			},
		},
	},
	plugins: [],
}
export default config
