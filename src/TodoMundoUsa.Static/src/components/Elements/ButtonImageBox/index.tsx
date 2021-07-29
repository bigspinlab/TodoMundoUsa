import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
					<Image
						className="img-full-height"
						width={75}
						height={75}
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
