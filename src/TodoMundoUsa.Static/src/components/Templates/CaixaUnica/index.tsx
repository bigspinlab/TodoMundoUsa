import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateSingleBoxSentByShip: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink href="/formas-de-envio/navio" />
				<Headline mainHeadline="Caixa Única" />
				<FlexColumnContainer>
					<Text>
						<ul>
							<li>
								<p>
									Trabalhamos com a caixa de 61x61x68cm de
									dimensão;
								</p>
							</li>
							<li>
								<p>
									O frete independe do peso e varia de acordo
									com a região do Brasil, entre U$280.00 e
									U$420.00
								</p>
							</li>
							<li>
								<p>
									O preço do nosso trabalho nesse caso, é de
									90.00 dólares, já incluindo o valor da caixa
									do tamanho especial e despacho;
								</p>
							</li>
							<li>
								<p>
									Nessa modalidade , não recomendamos o envio
									por revendedores.
								</p>
							</li>
						</ul>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateSingleBoxSentByShip
