import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateOnlineShopping: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Compras Online" />
				<FlexColumnContainer>
					<Text>
						<p>
							Se você não tem cartão internacional ou o site daqui
							não aceita seu cartão, fazemos sua compra online.
							Cobramos uma taxa de 20 dólares por site para
							efetuarmos sua compra, até 350 dólares por site. A
							partir de 350 dólares, nossa taxa passa a ser 25
							dólares.
						</p>
						<p></p>
						<p></p>
						<p>
							Para tal, você deposita o valor da sua compra 48
							horas antes da mesma ser finalizada.
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateOnlineShopping
