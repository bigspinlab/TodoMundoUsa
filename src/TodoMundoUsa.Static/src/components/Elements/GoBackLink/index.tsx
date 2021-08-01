import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

const GoBackLink: React.FC = () => {
	return (
		<Link href="/">
			<a className={styles.goBack}>Voltar</a>
		</Link>
	)
}

export default GoBackLink
