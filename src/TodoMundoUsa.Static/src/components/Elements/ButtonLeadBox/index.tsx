import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonLeadBoxProps {
	href: string
	leadText: string
}

const ButtonLeadBox: React.FC<ButtonLeadBoxProps> = ({ href, leadText }) => {
	return (
		<Link href={href}>
			<a className={styles.buttonLeadBox}>
				<h3>{leadText}</h3>
			</a>
		</Link>
	)
}

export default ButtonLeadBox
