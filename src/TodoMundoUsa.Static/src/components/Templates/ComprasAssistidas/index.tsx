import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateAssistedPurchase: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Compras Assistidas" />
				<FlexColumnContainer>
					<Text>
						<p>Você pode optar por comprar na loja comigo!</p>
						<p></p>
						<p></p>
						<p>
							Nas compras assistidas, conversamos para entender as
							suas necessidades e desejos, te indico lojas físicas
							com ótimos preços e vamos às compras!
						</p>

						<p></p>
						<p></p>
						<p>
							Faço ao vivo com você, via videoconferência por
							Whatsapp ou Facetime.
						</p>
						<p></p>
						<p></p>
						<p>
							Nesse caso, o valor da taxa é de 30 dólares por hora
							e por loja.
						</p>
						<p></p>
						<p></p>
						<p></p>
						<p>
							Não tem hora fracionada e é um serviço à parte do
							redirecionamento.
						</p>
						<p></p>
						<p>
							Vale muito a pena, porque conseguimos preços que, às
							vezes, não existem nos sites. Podemos ir a lojas
							factory, onde têm várias marcas com precinhos
							incríveis!
						</p>
						<p></p>
						<p>
							Caso se interesse pela compra assistida, você poderá
							fazer o depósito do valor que pretende gastar em uma
							conta minha do Brasil.
						</p>
						<p></p>
						<p></p>
						<p>
							Você poderá também optar por fazer o pagamento
							através do Transferwise, ou ainda através do
							Parcelado USA – falaremos sobre formas de pagamento
							em outra aba.
						</p>
						<p></p>
						<p></p>
						<p>
							Se sua opção for depósito em conta no Brasil, seu
							dinheiro demorará até 72 horas para chegar aqui. A
							partir de então, agendamos a compra para um dia e
							horário que seja bom para ambos.
						</p>
						<p></p>
						<p></p>
						<p>Tenho certeza que você vai amar!</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateAssistedPurchase
