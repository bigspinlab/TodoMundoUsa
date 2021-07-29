import React from 'react'
import styles from './styles.module.scss'

interface FlexNoWrapContainerProps {
	children: React.ReactNode
}

const FlexNoWrapContainer: React.FC<FlexNoWrapContainerProps> = ({
	children
}) => {
	return <div className={styles.flexNoWrap}>{children}</div>
}

export default FlexNoWrapContainer
