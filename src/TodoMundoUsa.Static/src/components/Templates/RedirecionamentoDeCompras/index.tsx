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
						O redirecionamento de compras nada mais é que você poder
						comprar em qualquer loja dos EUA e usar o meu endereço
						para entrega dos seus produtos.
					</p>
					<p></p>
					<p></p>
					<p>
						Eu recebo, reembalo, organizo de acordo com o padrão
						exigido, declaro e envio para você!
					</p>
					<p></p>
					<p></p>
					<p>
						Você pode comprar em quantos sites quiser, ou pode
						também contratar o serviço de compra assistida.
					</p>
					<p></p>
					<p></p>
					<p>Temos basicamente duas formas de envio. </p>
					<p></p>
					<p></p>
					<p>
						Por correios e por navio. Ambos estão separados por abas
						aqui neste portal.
					</p>
				</Text>
			</Section>
		</>
	)
}

export default TemplateShoppingRedirect
