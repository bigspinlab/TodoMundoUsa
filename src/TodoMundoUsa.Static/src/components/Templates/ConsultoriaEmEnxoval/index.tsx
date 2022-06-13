import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateOutFitConsultancy: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Consultoria em Enxoval" />
				<FlexColumnContainer>
					<Text>
						<p>
							Te assessoramos na montagem do seu enxoval! Nossa
							consultoria tem como principal objetivo dar dicas de
							um enxoval super útil e econômico, independente do
							sexo do seu bebê.
						</p>
						<p></p>
						<p></p>
						<p>
							Batemos um papo por meio de videoconferência, por
							mais ou menos uma hora. Vamos conversar para
							entender suas necessidades e expectativas. Te
							oriento em relação às quais são as peças ideais e
							suas quantidades de acordo com os tamanhos.
							Adaptamos também o enxoval à época do nascimento e à
							região que você mora.
						</p>
						<p></p>
						<p></p>
						<p>
							Apresento produtos incríveis que você só encontra
							aqui, relato o que vale a pena comprar nos EUA e
							quais são as novidades do mercado. Cadeirinhas,
							carrinhos e modelos de babá eletrônica também estão
							na consultoria!
						</p>
						<p></p>
						<p></p>
						<p>Essa consultoria tem o custo de 45.00 dólares.</p>
						<p></p>
						<p></p>
						<p>Será maravilhoso fazer parte desse momento!</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateOutFitConsultancy
