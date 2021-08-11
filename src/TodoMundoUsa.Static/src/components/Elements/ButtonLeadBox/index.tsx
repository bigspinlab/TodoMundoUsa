import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

interface ButtonLeadBoxProps {
	href: string
	leadText: string
	minHeightAuto?: boolean
	hasArrowRight?: boolean
}

const ButtonLeadBox: React.FC<ButtonLeadBoxProps> = ({
	href,
	leadText,
	minHeightAuto = false,
	hasArrowRight = false
}) => {
	return (
		<Link href={href} passHref>
			<a
				className={`${styles.buttonLeadBox} ${
					minHeightAuto ? styles.buttonLeadBoxNoMinHeight : ''
				} ${hasArrowRight ? styles.buttonLeadBoxWithArrowRight : ''}`}
			>
				<h3>{leadText}</h3>
				{hasArrowRight && (
					<svg
						width="19"
						height="16"
						viewBox="0 0 19 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M17.8511 8.70709C18.2416 8.31656 18.2416 7.6834 17.8511 7.29287L11.4871 0.92891C11.0966 0.538386 10.4634 0.538386 10.0729 0.92891C9.68236 1.31943 9.68236 1.9526 10.0729 2.34312L15.7297 7.99998L10.0729 13.6568C9.68236 14.0474 9.68236 14.6805 10.0729 15.071C10.4634 15.4616 11.0966 15.4616 11.4871 15.071L17.8511 8.70709ZM0.143951 8.99998L17.144 8.99998L17.144 6.99998L0.143951 6.99998L0.143951 8.99998Z"
							fill="#164467"
						/>
					</svg>
				)}
			</a>
		</Link>
	)
}

export default ButtonLeadBox
