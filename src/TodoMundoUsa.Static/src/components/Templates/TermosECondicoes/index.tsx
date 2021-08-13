import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateTermsAndConditions: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Nossos compromissos e responsabilidades" />
				<FlexColumnContainer>
					<Text>
						<p>
							Nosso maior compromisso é que sua experiência de
							comprar aqui, seja a mais incrível possível naquilo
							que tange os nossos serviços! É de suma importância
							para nós que você fique se sinta satisfeito(a) com o
							nosso trabalho.
						</p>
						<p></p>
						<p></p>
						<p>
							Para tanto, mudamos alguns padrões, sempre com o
							objetivo de melhorar sempre. Hoje, embalamos em
							plásticos zipados todo o conteúdo líquido da caixa e
							embalamos, em plásticos bolha o que, eventualmente,
							pode ser quebrado. Cabides são retirados para evitar
							o excesso de peso e volume e, quando autorizado,
							embalagens também.
						</p>
						<p></p>É importante também destacar que a nossa
						responsabilidade começa quando seus produtos chegam em
						nosso endereço e ela termina quando te envio o código de
						rastreios.
						<p></p>
						<p></p>
						<p></p>
						<p>
							Não é comum, mas na alfândega, sua caixa pode ser
							submetida a órgãos como a ANVISA, que poderá fazer
							uma inspeção mais específica do conteúdo, podendo
							ser até devolvida para o remetente. Em todo esse
							tempo de trabalho, tive apenas um caso.
						</p>
						<p></p>
						<p></p>
						<p>
							Ainda mais raro, pode acontecer uma apreensão pelos
							órgãos fiscalizadores, sem que haja opção de
							retirada da caixa. Ou furtos e extravios. Mesmo que
							sendo raro, trabalho de forma bem clara e
							transparente expondo os riscos, por menores que eles
							sejam.
						</p>
						<p></p>
						<p></p>
						<p>
							Não nos responsabilizamos por atrasos no transito da
							sua encomenda.
						</p>
						<p></p>
						<p>
							Todas essas regras também estão em vigência para os
							envios por navio.
						</p>
						<p>
							Temos um cuidado excessivo com seus pertences
							durante o tempo em que eles estão em nossas mãos. A
							partir do despacho, sua caixa passará por vários
							serviços distintos, os quais nós não temos controle
							e responsabilidade. Por isso, não nos
							responsabilizamos também por eventuais danos que
							possam ser causados no transporte.
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateTermsAndConditions
