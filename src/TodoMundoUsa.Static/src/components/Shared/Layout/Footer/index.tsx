import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrap}>
				<Link href="/">
					<a className={styles.footerBrand}>
						<figure>
							<img
								className="img-full-height"
								src="/logo.svg"
								alt="Todo Mundo USA"
							/>
						</figure>
					</a>
				</Link>
				<div className={styles.footerList}>
					<Link href="/">
						<a>Termos e Condições</a>
					</Link>
					<Link href="/">
						<a>Política de Privacidade</a>
					</Link>
					<Link href="/">
						<a>Política de Cookies</a>
					</Link>
				</div>
				<p>Todos os Direitos reservados ©Todo Mundo USA</p>
			</div>
		</footer>
	)
}

export default Footer
