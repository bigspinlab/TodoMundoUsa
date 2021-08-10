import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateTaxPage: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Tributação" />
				<FlexColumnContainer>
					<Text>
						<p>Como funciona tributação</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateTaxPage
