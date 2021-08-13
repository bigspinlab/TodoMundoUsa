import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateHowDoesItWork: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Nossa dinâmica de Trabalho" />
				<FlexColumnContainer>
					<Text>
						<p>
							Para que a gente consiga atender bem nosso volume,
							priorizamos a organização. Então usamos algumas
							regrinhas:
						</p>
						<p></p>
						<p></p>
						<ul>
							<li>
								<p>
									Nossas caixas são despachadas às terças,
									quartas e quintas;
								</p>
							</li>
							<li>
								<p>
									Depois de você ter verificado seus rastreios
									nos sites americanos e constatar que todos
									seus produtos já chegaram em nosso endereço,
									você me avisa pelo whatsapp. É de sua
									responsabilidade nos avisar que todos os
									seus produtos já foram entregues. Após esse
									aviso, você será colocado no nosso
									cronograma de conferência e montagem. As
									montagens e pesagens sempre acontecerão às
									segundas, sextas e aos sábados.
								</p>
							</li>
							<li>
								<p>
									Após a montagem da sua caixa, com o seu
									aval, sua caixa será pesada. Os valores do
									frete e da taxa de envio serão repassados e
									você terá até 24 horas para realizar o
									pagamento dentro daquela cotação do dólar.
									Após esse prazo, é necessário solicitar o
									recálculo;
								</p>
							</li>
							<li>
								<p>
									Sua caixa terá armazenamento gratuito por 60
									dias a serem contados a partir da chegada da
									sua primeira caixa no meu endereço. A partir
									desse prazo, será cobrada uma taxa de 5.00
									dólares por semana de armazenamento.
								</p>
							</li>
							<li>
								<p>
									Passado um prazo de 5 meses de
									armazenamento, sua caixa será desfeita e os
									produtos serão descartados, podendo ocorrer
									sem aviso e sem prévia autorização;
								</p>
							</li>
							<li>
								<p>
									Após o pagamento, seu dinheiro demora até 48
									horas úteis para chegar aqui (se tiver sido
									realizado por depósito ou transferência
									bancária em minha conta no Brasil). Só após
									esse prazo, sua caixa será enviada.
								</p>
							</li>
						</ul>
					</Text>
				</FlexColumnContainer>
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

export default TemplateHowDoesItWork
