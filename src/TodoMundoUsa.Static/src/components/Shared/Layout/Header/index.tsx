import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navItem } from './data'

import styles from './styles.module.scss'

interface NavProps {
	navItem?: [
		{
			href: string
			leadText: string
		}
	]
}

const Header: React.FC<NavProps> = () => {
	const [navActive, setNavActive] = useState(false)

	const handleToggleNavActive = () => {
		document.body.classList.toggle('no-scroll-hidden')
		setNavActive(!navActive)
	}

	function handleClickOnMenuItem() {
		document.body.classList.remove('no-scroll-hidden')
		setNavActive(!navActive)
	}

	return (
		<header className={styles.header}>
			<div className={styles.headerWrap}>
				<Link href="/">
					<a className={styles.headerBrand}>
						<figure>
							<Image
								className="img-full-height"
								width={64}
								height={64}
								src="/logo.svg"
								alt="Todo Mundo USA"
							/>
						</figure>
					</a>
				</Link>
				<button
					aria-label="Toggle Mobile Menu Button"
					type="button"
					className={`${styles.headerNavToggle} ${
						navActive ? styles.active : ''
					}`}
					onClick={handleToggleNavActive}
				>
					<div className={styles.headerNavHamburger}>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<span>&nbsp;</span>
						<strong>{!navActive ? 'Menu' : 'Fechar'}</strong>
					</div>
				</button>
				<nav
					className={`${styles.headerNav} ${
						navActive ? styles.active : ''
					}`}
				>
					<div className={styles.headerNavWrap}>
						<ul className={styles.headerNavList}>
							{navItem.map((item, index) => (
								<li
									onClick={handleClickOnMenuItem}
									className={styles.headerNavListItem}
									key={index}
								>
									<Link href={item.href}>
										<a>{item.leadText}</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
