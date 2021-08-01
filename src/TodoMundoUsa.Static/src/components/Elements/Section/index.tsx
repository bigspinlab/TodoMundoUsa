/* eslint-disable indent */
import React from 'react'
import styles from './styles.module.scss'
interface SectionProps {
	noGrid?: boolean
	children: React.ReactNode
	fullHeight?: boolean
}

const Section: React.FC<SectionProps> = ({
	children,
	noGrid = false,
	fullHeight = false
}) => {
	return (
		<section
			className={`${styles.section} ${
				noGrid
					? styles.sectionNoGrid
					: fullHeight
					? styles.sectionFullHeight
					: ''
			}`}
		>
			<article className={styles.sectionWrap}>{children}</article>
		</section>
	)
}

export default Section
