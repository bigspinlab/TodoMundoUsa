import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateSharedBoxSentByShip: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink href="/formas-de-envio/navio" />
				<Headline mainHeadline="Caixa Compartilhada" />
				<FlexColumnContainer>
					<Text>
						<ul>
							<li>
								<p>
									Nessa opção, a caixa também tem 61x61x68cm
									de dimensão;
								</p>
							</li>
							<li>
								<p>
									No caso da caixa Compartilhada de Navio, o
									que será divido sempre será o frete e se
									raramente houver, o tributo.
								</p>
							</li>
							<li>
								<p>
									A taxa do meu serviço de montagem e despacho
									é paga integralmente por cada integrante.
								</p>
							</li>
							<li>
								<p>
									A taxa do meu serviço de montagem e despacho
									é paga integralmente por cada integrante.
								</p>
							</li>
							<li>
								<p>
									A caixa seguirá para Minas Gerais e será
									recebida por um parceiro.
								</p>
							</li>
							<li>
								<p>
									Lá ela será separada, pesada e orçada para
									envio por transportadora, que sairá mais em
									conta que correio. Para separação,
									organização, pesagem e despacho da caixa,
									será pago ao nosso correspondente uma taxa
									de 50.00 reais, por participante.
								</p>
							</li>
							<li>
								<p>
									O valor do nosso trabalho nesse caso, é de
									80.00 dólares por participante, já incluindo
									o valor da caixa de tamanho especial e
									despacho;
								</p>
							</li>
						</ul>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateSharedBoxSentByShip
