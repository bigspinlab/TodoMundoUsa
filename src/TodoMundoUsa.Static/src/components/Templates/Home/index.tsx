import React from 'react'
import ButtonImageBox from '@/components/Elements/ButtonImageBox'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import FlexNoWrapContainer from '@/components/Elements/FlexNoWrapContainer'

import Slider from '@/components/Modules/Slider'
import ButtonLeadBox from '@/components/Elements/ButtonLeadBox'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
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

			<Section noGrid>
				<Headline
					paddingLeftForGrid
					smallHeadline="Saiba tudo sobre os nossos serviços!"
				/>
				<Slider />
			</Section>

			<Section>
				<Headline smallHeadline="Perguntas frequentes" />
				<FlexColumnContainer>
					<ButtonLeadBox
						minHeightAuto
						href="/perguntas-frequentes/compra-iphone"
						leadText="Como faço para comprar um Iphone"
					/>
					<ButtonLeadBox
						minHeightAuto
						href="/"
						leadText="como faço para comprar online"
					/>
					<ButtonLeadBox
						minHeightAuto
						href="/"
						leadText="quero fazer meu enxoval"
					/>
					<ButtonLeadBox
						minHeightAuto
						href="/"
						leadText="como faço para"
					/>
					<ButtonLeadBox
						minHeightAuto
						href="/"
						leadText="como faço para"
					/>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateHome
