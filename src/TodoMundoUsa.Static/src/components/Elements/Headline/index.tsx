import React from 'react'
import styles from './styles.module.scss'

interface HeadlineProps {
	smallHeadline?: string
	mainHeadline?: string
	paddingLeftForGrid?: boolean
}

const Headline: React.FC<HeadlineProps> = ({
	smallHeadline,
	mainHeadline,
	paddingLeftForGrid
}) => {
	return (
		<>
			{smallHeadline && (
				<h2
					className={`${styles.headlineSmall} ${
						paddingLeftForGrid && styles.headlineGrid
					}`}
				>
					{smallHeadline}
				</h2>
			)}
			{mainHeadline && (
				<h2
					className={`${styles.headlineMain} ${
						paddingLeftForGrid && styles.headlineGrid
					}`}
				>
					{mainHeadline}
				</h2>
			)}
		</>
	)
}

export default Headline
