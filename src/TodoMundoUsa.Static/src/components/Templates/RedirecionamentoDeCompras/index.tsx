import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'

//import styles from './styles.module.scss'
const TemplateShoppingRedirect: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Redirecionamento de compras" />
				<Text>
					<p>
						No redirecionamento de compras, você compra em qualquer
						site dos EUA e usa o meu endereço para entrega. Eu
						recebo, reembalo, organizo de acordo com o padrão
						exigido, declaro e envio pra você!
					</p>
					<p></p>
					<p></p>
					<p>
						Cobramos 40.00 dólares, por cada caixa enviada via
						Correios. Taxa fixa! Independente do volume da sua
						caixa. NÃO cobramos pelas caixas que recebemos. Por
						isso, você pode comprar em quantos sites quiser, que
						compactamos tudo em uma caixa só para te enviar!
					</p>
					<p></p>
					<p></p>
					<p>
						Por navio, o envio é um pouquinho diferente. Temos uma
						aba só para entender esse tipo de envio.
					</p>
					<p></p>
					<p></p>
					<p>O limite de peso para envio por Correios  é de 30 kg!</p>
					<p></p>
					<p></p>
					<p>
						Em relação ao frete, o valor será de acordo com o peso
						da sua encomenda. Por isso, só teremos como saber
						precisamente o valor depois que todas suas encomendas
						chegarem, forem conferidas e pesadas. Falaremos mais
						sobre as conferências na aba de nossa dinâmica de
						trabalho.
					</p>
				</Text>
			</Section>
		</>
	)
}

export default TemplateShoppingRedirect
