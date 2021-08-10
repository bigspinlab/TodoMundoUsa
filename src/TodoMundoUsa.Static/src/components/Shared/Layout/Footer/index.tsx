import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrap}>
				<Link href="/">
					<a className={styles.footerBrand}>
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
				<div className={styles.footerList}>
					<Link href="/sobre-nos">
						<a>Sobre Nós</a>
					</Link>

					<Link href="/duvidas-frequentes/como-funciona-o-nosso-trabalho">
						<a>Dinâmica de Trabalho</a>
					</Link>
					<Link href="/termos-e-condicoes">
						<a>Termos e Condições</a>
					</Link>
				</div>
				<p>Todos os Direitos reservados ©Todo Mundo USA</p>
			</div>
		</footer>
	)
}

export default Footer
