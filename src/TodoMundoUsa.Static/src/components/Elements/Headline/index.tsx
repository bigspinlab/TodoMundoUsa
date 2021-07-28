import React from 'react'
import styles from './styles.module.scss'

interface HeadlineProps {
	smallHeadline?: string
	mainHeadline?: string
}

const Headline: React.FC<HeadlineProps> = ({ smallHeadline, mainHeadline }) => {
	return (
		<>
			{smallHeadline && (
				<h2 className={styles.headlineSmall}>{smallHeadline}</h2>
			)}
			{mainHeadline && (
				<h2 className={styles.headlineMain}> {mainHeadline}</h2>
			)}
		</>
	)
}

export default Headline
