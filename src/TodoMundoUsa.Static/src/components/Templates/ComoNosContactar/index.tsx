import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateHowToReachUs: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Como Nos Contactar" />
				<FlexColumnContainer>
					<Text>
						<p>
							Pensando sempre na comodidade e na desburocratização
							do processo de compra – afinal, comprar deve ser
							algo prazeroso, não é mesmo? O nosso procedimento é
							bem simples!
						</p>
						<p></p>
						<p></p>
						<p>
							Todo nosso processo é feito através do whatsapp, de
							forma rápida e precisa.
						</p>
						<p></p>
						<p></p>
						<p>Para tanto, algumas observações:</p>
						<ul>
							<li>
								<p>
									Nosso atendimento é sempre de Segunda a
									Sexta, de 13:00 às 19:00.
								</p>
							</li>
							<li>
								<p>
									Pedimos até 24 horas úteis para te
									responder, dentro do nosso horário de
									atendimento.
								</p>
							</li>
							<li>
								<p>
									Lembrando que todas as informações que você
									precisa estão nesse portal!
								</p>
							</li>
						</ul>

						<p>
							Ao entrar em contato pelo whatsapp, basta me passar
							seu primeiro e último nome e solicitar meu endereço.
							Eu te envio o endereço, com algumas regrinhas de
							preenchimento nos sites e prontinho! Só começar a
							comprar! Super fácil, né?
						</p>
						<p></p>
						<p></p>
						<p>
							Depois conversamos de acordo com suas compras,
							necessidades e minha experiência a melhor forma de
							envio para você!
						</p>
						<p></p>
						<p></p>
						<p></p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateHowToReachUs
