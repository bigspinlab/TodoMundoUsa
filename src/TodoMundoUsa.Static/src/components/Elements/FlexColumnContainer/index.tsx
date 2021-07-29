import React from 'react'
import styles from './styles.module.scss'

interface FlexColumnContainerProps {
	children: React.ReactNode
}

const FlexColumnContainer: React.FC<FlexColumnContainerProps> = ({
	children
}) => {
	return <div className={styles.flexColumn}>{children}</div>
}

export default FlexColumnContainer
