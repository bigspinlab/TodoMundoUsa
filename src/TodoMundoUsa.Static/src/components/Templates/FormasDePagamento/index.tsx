import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateHowDoIPay: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Formas de Pagamento" />
				<FlexColumnContainer>
					<Text>
						<p>
							Você terá, basicamente, 3 (três) formas de
							pagamento. São elas:
						</p>
						<p></p>
						<p></p>
						<ul>
							<li>
								<p>
									Pagamento via depósito em conta da Caixa
									Econômica Federal no Brasil ou Nubank;
									<br />
									OBS: O cálculo da cotação do dólar será
									feito no dia, e é cobrada uma taxa, pelo
									agente financeiro que traz o seu dinheiro
									pra cá, de 4.00 dólares por operação.
								</p>
							</li>
							<li>
								<p>
									Pagamento via TransferWise – aplicativo de
									remessa de dinheiro
								</p>
							</li>
							<li>
								<p>
									Pagamento parcelado através do nosso
									convênio com a Parcelado USA
									<br />
									Através da empresa Parcelado USA, situada em
									Orlando, você poderá optar por pagar suas
									compras com seu cartão de crédito – sendo
									ele internacional ou não, em até 12x. <br />{' '}
									Eu enviarei um link para que você faça seu
									cadastro no site da Parcelado USA, de forma
									totalmente gratuita. A partir disso, você
									poderá parcelar tanto suas compras como
									nossos serviços.
								</p>
							</li>
						</ul>
						<p>
							{' '}
							Para entender melhor sobre essa modalidade, nos
							mande uma mensagem no whatsapp! Assim, já te
							encaminharemos o link com as explicações detalhadas.
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

export default TemplateHowDoIPay
