import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateAdviceBabyOutFit: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Assessoria Completa de Enxoval" />
				<FlexColumnContainer>
					<Text>
						<p>
							Além da nossa consultoria por videoconferência, que
							visa um enxoval prático e econômico, trabalhamos
							também com a Assessoria Completa de Enxoval que
							incluem:
						</p>
						<p></p>
						<p></p>
						<p></p>
						<ul>
							<li>
								<p>Consultoria Online</p>
							</li>
							<li>
								<p>Planejamento de Compras</p>
							</li>
							<li>
								<p>
									Compras em até 5 lojas dos itens da lista –
									2 físicas e 3 online
								</p>
							</li>
						</ul>
						<p></p>
						<p></p>
						<p>
							Nas lojas físicas, fazemos as compras por
							videoconferência, sendo 1 hora por loja.
						</p>
						<p></p>
						<p></p>
						<p>
							O nosso compromisso é fazer com que você economize e
							faça seu enxoval com qualidade e com o melhor custo
							benefício possível! Por isso, aplicamos cupons de
							descontos exclusivos e te indicamos as melhores
							lojas para o seu perfil.br
						</p>
						<p></p>
						<p></p>
						<p></p>
						<p>
							O custo desse serviço completo é de 180.00 dólares,
							não estando inclusa a taxa de envio nesse valor.
						</p>
						<p></p>
						<p>Juntos, conseguiremos fazer ótimas compras!</p>
						<p></p>
						<p>Será um prazer dividir esse momento com você!</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateAdviceBabyOutFit
