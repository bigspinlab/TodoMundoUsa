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
							O envio por transporte aéreo, poderá ser realizado
							por transportadora ou pelos correios dos EUA. Em
							ambos os casos, você poderá verificar seu rastreio
							no site dos correios do Brasil.
						</p>
						<p></p>
						<p></p>
						<p>
							O limite de peso para envio por correios é de 30 kg!{' '}
							<br />
							Em caixas de até 2 kg, nossa taxa custa U$ 25.00.{' '}
							<br />
							Para quaisquer caixas acima desse peso, U$ 40.00.{' '}
							<br />
						</p>
						<p></p>
						<p></p>
						<p>
							<strong>
								Nós não cobramos pelas caixas que recebemos.
							</strong>{' '}
						</p>
						<p></p>
						<p></p>
						<p>
							O valor do frete será de acordo com o peso da sua
							encomenda. Por isso, só teremos como saber
							precisamente o valor, depois que todas suas
							encomendas forem conferidas e pesadas.
						</p>
						<p></p>
						<p></p>
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
							quaisquer eventuais problemas que possam ocorrer no
							trajeto da sua encomenda.
						</p>
						<p></p>
						<p></p>
						<p>
							Alguns produtos são proibidos nessa modalidade de
							envio!
						</p>

						<p></p>
						<ul>
							<li>
								Produtos em pó (talco, Whey Protein, colágeno.)
							</li>
							<li>Armas de brinquedos</li>
							<li>Temperos </li>
							<li>Cigarros e Charutos </li>
							<li>Alimentos </li>
							<li>Bebida Alcoólica</li>
						</ul>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateSendByAirPlane
