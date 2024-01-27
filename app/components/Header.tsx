'use client'
import Search from './Search'
import HamburgerMenu from './HamburgerMenu'
import Navigation from './Navigation'
import { useEffect } from 'react'
export default function Header() {
	function toggleSearch() {
		const search = document.getElementById('search') as HTMLDivElement

		if (search.classList.contains('hidden')) {
			search.classList.toggle('hidden')
			search.classList.toggle('block')
		} else if (!search.classList.contains('hidden')) {
			search.classList.toggle('block')
			search.classList.toggle('hidden')
		}
	}
	function toggleHamburgerMenu() {
		const hamburgerMenu = document.getElementById(
			'hamburgerMenu'
		) as HTMLDivElement
		if (hamburgerMenu.classList.contains('hidden')) {
			hamburgerMenu.classList.toggle('hidden')
			hamburgerMenu.classList.toggle('block')
		} else if (!hamburgerMenu.classList.contains('hidden')) {
			hamburgerMenu.classList.toggle('block')
			hamburgerMenu.classList.toggle('hidden')
		}
	}
	return (
		<header>
			<HamburgerMenu
				toggleHamburgerMenu={toggleHamburgerMenu}
				toggleSearch={toggleSearch}
			/>
			<Search toggleSearch={toggleSearch} />
			<Navigation
				toggleSearch={toggleSearch}
				toggleHamburgerMenu={toggleHamburgerMenu}
			/>
		</header>
	)
}
