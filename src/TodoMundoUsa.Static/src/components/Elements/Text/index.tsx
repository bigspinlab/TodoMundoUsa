import React from 'react'
import styles from './styles.module.scss'

interface TextProps {
	children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ children }) => {
	return <div className={styles.text}>{children}</div>
}

export default Text
