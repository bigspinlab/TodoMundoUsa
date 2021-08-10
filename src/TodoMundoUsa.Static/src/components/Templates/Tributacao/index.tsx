import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateTaxPage: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Tributação" />
				<FlexColumnContainer>
					<Text>
						<p>
							Não é um bicho de sete cabeças!!! A tributação, na
							maior parte das vezes, existe, mas fazemos todo o
							procedimento para que o risco e o valor, caso sua
							encomenda seja taxada, sejam os menores possíveis.
						</p>
						<p></p>
						<p></p>
						<p>
							<strong>Enviamos como presente,</strong> de pessoa
							física para pessoa física,{' '}
							<strong>e faço pessoalmente</strong> a declaração
							dos produtos. Posso te dizer que de todo esse tempo
							que trabalho com isso, nunca vi não ter valido a
							pena!
						</p>

						<p></p>
						<p></p>
						<p>
							No site dos Correios, será gerado sua guia de
							pagamento do tributo, podendo ser paga por boleto,
							cartão de débito ou de crédito.
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateTaxPage
