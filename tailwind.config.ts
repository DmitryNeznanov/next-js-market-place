import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: {
					DEFAULT: '#000',
				},
				white: {
					DEFAULT: '#fff',
				},
				pink: {
					DEFAULT: '#ff00b8',
				},
				gray: {
					200: '#f5f5f5',
					DEFAULT: '#e1e1e1',
					800: '#767676',
				},
				red: {
					DEFAULT: '#ff3636',
				},
			},
		},
	},
	plugins: [],
}
export default config
