import React from 'react'
import ButtonImageBox from '@/components/Elements/ButtonImageBox'
import ButtonLeadBox from '@/components/Elements/ButtonLeadBox'
import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import FlexNoWrapContainer from '@/components/Elements/FlexNoWrapContainer'

import styles from './styles.module.scss'
const TemplateHome: React.FC = () => {
	return (
		<>
			<Section>
				<Headline smallHeadline="Formas de envio" />
				<FlexNoWrapContainer>
					<ButtonImageBox
						buttonImage="/icon-airplane.svg"
						buttonText="avião"
						href="/"
					/>
					<ButtonImageBox
						buttonImage="/icon-ship.svg"
						buttonText="navio"
						href="/"
					/>
				</FlexNoWrapContainer>
			</Section>

			<Section>
				<Headline smallHeadline="Saiba tudo sobre os nossos serviços!" />
				<ButtonLeadBox
					href="https://www.google.com"
					leadText="Google"
				/>
			</Section>
		</>
	)
}

export default TemplateHome
