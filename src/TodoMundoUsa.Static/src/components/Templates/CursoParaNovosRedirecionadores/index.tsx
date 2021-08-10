import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateNewResellersCourse: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Curso para novos Redirecionadores" />
				<FlexColumnContainer>
					<Text>
						<p>
							Mora nos EUA e quer aprender a fazer o que eu faço?
							Será super legal poder te ensinar e ser sua colega
							de trabalho!
						</p>
						<p></p>
						<p></p>
						<p>
							Para maiores informações sobre esse curso, favor me
							chamar no whatsapp!
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateNewResellersCourse
