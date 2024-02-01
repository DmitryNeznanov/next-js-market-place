'use client'
import { useState, useEffect } from 'react'

export default function DarkModeSwitcher() {
	const [darkTheme, setDarkTheme] = useState<undefined | boolean>(undefined)

	function handleToggle(Event: React.ChangeEvent<HTMLInputElement>) {
		setDarkTheme(Event.target!.checked)
	}

	function storeUserSetPreference(pref: string) {
		localStorage.setItem('theme', pref)
	}

	useEffect(() => {
		const root = document.documentElement
		const initialColorValue = root.style.getPropertyValue(
			'--initial-color-mode'
		)
		setDarkTheme(initialColorValue === 'dark')
	}, [])

	useEffect(() => {
		const root = document.documentElement
		if (darkTheme !== undefined) {
			if (darkTheme) {
				root.setAttribute('data-theme', 'dark')
				storeUserSetPreference('dark')
				root.classList.add('dark')
			} else {
				root.removeAttribute('data-theme')
				storeUserSetPreference('light')
				root.classList.remove('dark')
			}
		}
	}, [darkTheme])

	return (
		<>
			{darkTheme !== undefined && (
				<input
					id="switcher"
					type="checkbox"
					checked={darkTheme}
					onChange={handleToggle}
				/>
			)}
		</>
	)
}
