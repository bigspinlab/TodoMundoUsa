import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateMonthlyResellersPackage: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Pacote de Compras mensal para Revendedores" />
				<FlexColumnContainer>
					<Text>
						<p>
							Esse serviço tem sido super utilizado pelos
							revendedores, porque conseguimos preços muito bons.
							Aqueles garimpos,  mesmo!
						</p>
						<p></p>
						<p></p>
						<p>
							Vou em lojas todos os dias! Por isso, vejo promoções
							e novidades constantemente. E são justamente essas
							promoções que eu aproveito para comprar para os meus
							clientes!
						</p>
						<p></p>

						<p></p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateMonthlyResellersPackage
