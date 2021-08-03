import React, { useState } from 'react'
import Image from 'next/image'
import Section from '@/components/Elements/Section'

import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

import styles from './styles.module.scss'
import FlexNoWrapContainer from '@/components/Elements/FlexNoWrapContainer'
import ButtonCrossed from '@/components/Elements/ButtonCrossed'

const CTAFixed: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false)

	function handleOpenModal() {
		document.body.classList.add('no-scroll-hidden')
		setModalOpen(!modalOpen)
	}

	function handleCloseModal() {
		document.body.classList.remove('no-scroll-hidden')
		setModalOpen(!modalOpen)
	}

	return (
		<aside
			className={`${styles.ctaAside} ${
				modalOpen ? styles.ctaAsideModalOpen : ''
			}`}
		>
			<button
				className={styles.ctaAsideButton}
				type="button"
				onClick={handleOpenModal}
			>
				<Image
					className="img-full-height"
					width={24}
					height={24}
					src="/icon-whatsapp.svg"
					alt="whatsapp button"
				/>
			</button>
			<div className={styles.ctaAsideRadialAnimation}></div>
			<div className={styles.ctaAsideModal}>
				<Section fullHeight noPaddingTopAndBottom>
					<FlexColumnContainer fullHeight>
						<FlexNoWrapContainer>
							<figure>
								<Image
									className="img-full-height"
									width={64}
									height={64}
									src="/logo.svg"
									alt="Todo Mundo USA"
								/>
							</figure>
							<ButtonCrossed
								ariaLabel="close button"
								handleClick={handleCloseModal}
							/>
						</FlexNoWrapContainer>
						<FlexColumnContainer fullHeight>
							<div className={styles.modalContent}>
								<p>
									Todo nosso processo é feito através do
									Whatsapp, de forma rápida e precisa.
								</p>
								<strong>
									Horário de atendimento: <br /> Segunda à
									Sexta, de 13:00 às 19:00hrs; <br /> Sábado
									de 13:00 às 15:00hrs.
								</strong>
								<FlexColumnContainer centered>
									<a
										href="https://wa.me/18572379352"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											className="img-full-height"
											width={60}
											height={60}
											src="/icon-whatsapp.svg"
											alt="whatsapp button"
										/>
									</a>
									<strong>
										Clique aqui para ser redirecionado para
										o nosso whatsapp
									</strong>
								</FlexColumnContainer>

								<p>
									Pedimos até 4 horas para te responder
									considerando o nosso horário de atendimento.
								</p>
							</div>
						</FlexColumnContainer>
					</FlexColumnContainer>
				</Section>
			</div>
		</aside>
	)
}

export default CTAFixed
