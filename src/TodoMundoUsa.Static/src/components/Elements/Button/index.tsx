import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
	ariaLabel?: string
	handleClick?: () => void
	children: string
}

const Button: React.FC<ButtonProps> = ({
	ariaLabel,
	handleClick,
	children
}) => {
	return (
		<button
			aria-label={ariaLabel}
			type="button"
			className={styles.button}
			onClick={() => handleClick()}
		>
			{children}
		</button>
	)
}

export default Button
