import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonImageBoxProps {
	buttonImage: string
	buttonText: string
	href: string
}

const ButtonImageBox: React.FC<ButtonImageBoxProps> = ({
	buttonImage,
	buttonText,
	href
}) => {
	return (
		<Link href={href}>
			<a className={styles.buttonImageBox}>
				<figure>
					<img
						className="img-full-height"
						src={buttonImage}
						alt={buttonText}
					/>
					<figcaption>
						<h3 className={styles.buttonImageBoxHeading}>
							{buttonText}
						</h3>
					</figcaption>
				</figure>
			</a>
		</Link>
	)
}

export default ButtonImageBox
