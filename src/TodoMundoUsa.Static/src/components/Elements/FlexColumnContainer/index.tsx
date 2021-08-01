/* eslint-disable indent */
import React from 'react'
import styles from './styles.module.scss'

interface FlexColumnContainerProps {
	children: React.ReactNode
	centered?: boolean
	fullHeight?: boolean
}

const FlexColumnContainer: React.FC<FlexColumnContainerProps> = ({
	children,
	centered = false,
	fullHeight = false
}) => {
	return (
		<div
			className={`
			${styles.flexColumn}
			${
				centered
					? styles.flexColumnCentered
					: fullHeight
					? styles.flexColumnFullHeight
					: ''
			}`}
		>
			{children}
		</div>
	)
}

export default FlexColumnContainer
