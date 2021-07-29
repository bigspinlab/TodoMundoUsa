import React from 'react'
import styles from './styles.module.scss'
interface SectionProps {
	children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ children }) => {
	return (
		<section className={styles.section}>
			<article className={styles.sectionWrap}>{children}</article>
		</section>
	)
}

export default Section
