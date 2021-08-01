import React from 'react'
import styles from './styles.module.scss'

interface ButtonCrossedProps {
	ariaLabel?: string
	handleClick?: () => void
}

const ButtonCrossed: React.FC<ButtonCrossedProps> = ({
	ariaLabel,
	handleClick
}) => {
	return (
		<button
			aria-label={ariaLabel}
			type="button"
			className={styles.buttonCrossed}
			onClick={() => handleClick()}
		>
			<div className={styles.buttonCrossedItem} />
		</button>
	)
}

export default ButtonCrossed
