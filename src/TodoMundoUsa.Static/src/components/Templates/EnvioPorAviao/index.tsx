import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateSendByAirPlane: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Envio por Avião" />
				<FlexColumnContainer>
					<Text>
						<p>
							Assim como no envio por navio, nossa
							responsabilidade começa quando seus produtos chegam
							no nosso endereço, e termina quando o envio é
							realizado.
						</p>
						<p></p>
						<p></p>
						<p>
							Nós <strong>NÃO temos responsabilidade</strong> com
							quaisquer eventuais problemas que possam ser gerados
							no trajeto da sua encomenda. Incluindo atrasos,
							extravios, furtos ou danos, assim como nas
							encomendas por aéreo.
						</p>
						<p></p>
						<p></p>
						<p>
							Cobramos 40.00 dólares, por cada caixa enviada via
							Correios. Taxa fixa! Independente do volume da sua
							caixa.{' '}
							<strong>
								NÃO cobramos pelas caixas que recebemos.
							</strong>{' '}
							Por isso, você pode comprar em quantos sites quiser,
							que compactamos tudo em uma caixa só para te enviar!
						</p>
						<p></p>
						<p></p>
						<p>
							O limite de peso para envio por Correios  é de 30
							kg!
						</p>
						<p></p>
						<p></p>
						<p>
							Em relação ao frete, o valor será de acordo com o
							peso da sua encomenda. Por isso, só teremos como
							saber precisamente o valor depois que todas suas
							encomendas chegarem, forem conferidas e pesadas.
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateSendByAirPlane
