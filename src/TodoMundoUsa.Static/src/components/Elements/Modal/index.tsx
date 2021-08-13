import React from 'react'
import styles from './styles.module.scss'

interface ModalProps {
	children: React.ReactNode
	isShow: boolean
}

const Modal: React.FC<ModalProps> = ({ children, isShow = true }) => {
	return (
		<div className={`${styles.modal} ${isShow && styles.modalOpened}`}>
			{children}
		</div>
	)
}

export default Modal
