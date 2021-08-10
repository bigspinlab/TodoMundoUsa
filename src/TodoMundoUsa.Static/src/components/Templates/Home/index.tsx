import React from 'react'
import ButtonImageBox from '@/components/Elements/ButtonImageBox'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import FlexNoWrapContainer from '@/components/Elements/FlexNoWrapContainer'

import Slider from '@/components/Modules/Slider'
import ButtonLeadBox from '@/components/Elements/ButtonLeadBox'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'
import { frequentlyAskedQuestions } from './data'

interface TemplateHomeProps {
	frequentlyAskedQuestions: [
		{
			href: string
			leadText: string
		}
	]
}

//import styles from './styles.module.scss'
const TemplateHome: React.FC<TemplateHomeProps> = () => {
	return (
		<>
			<Section>
				<Headline smallHeadline="Formas de envio" />
				<FlexNoWrapContainer>
					<ButtonImageBox
						buttonImage="/icon-airplane.svg"
						buttonText="avião"
						href="/formas-de-envio/aviao"
					/>
					<ButtonImageBox
						buttonImage="/icon-ship.svg"
						buttonText="navio"
						href="/formas-de-envio/navio"
					/>
				</FlexNoWrapContainer>
			</Section>

			<Section noGrid>
				<Headline
					paddingLeftForGrid
					smallHeadline="Saiba tudo sobre os nossos serviços!"
				/>
				<Slider />
			</Section>

			<Section>
				<Headline smallHeadline="Dúvidas frequentes" />
				<FlexColumnContainer>
					{frequentlyAskedQuestions.map((question, index) => (
						<ButtonLeadBox
							key={index}
							minHeightAuto
							href={question.href}
							leadText={question.leadText}
						/>
					))}
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateHome
