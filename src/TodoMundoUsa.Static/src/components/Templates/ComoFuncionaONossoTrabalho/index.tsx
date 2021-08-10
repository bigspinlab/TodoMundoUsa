import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateHowDoesItWork: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Como Funciona o Nosso Trabalho" />
				<FlexColumnContainer>
					<Text>
						<p>Como funciona</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateHowDoesItWork
