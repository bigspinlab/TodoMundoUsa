import React from 'react'
import styles from './styles.module.scss'
interface SectionProps {
	noGrid?: boolean
	children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children, noGrid = false }) => {
	return (
		<section
			className={`${styles.section} ${noGrid && styles.sectionNoGrid}`}
		>
			<article className={styles.sectionWrap}>{children}</article>
		</section>
	)
}

export default Section
