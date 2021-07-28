import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const Header: React.FC = () => {
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
							<img
								className="img-full-height"
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
							<li
								onClick={handleClickOnMenuItem}
								className={styles.headerNavListItem}
							>
								<Link href="/home">
									<a>nav item</a>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
