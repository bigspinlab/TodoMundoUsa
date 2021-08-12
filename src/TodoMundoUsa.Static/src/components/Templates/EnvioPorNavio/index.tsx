import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'
import ButtonLeadBox from '@/components/Elements/ButtonLeadBox'
import FlexNoWrapContainer from '@/components/Elements/FlexNoWrapContainer'

//import styles from './styles.module.scss'
const TemplateSendByShip: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Envio por Navio" />
				<FlexColumnContainer>
					<Text>
						<p></p>
						<p>
							Já há algum tempo, nós enviamos caixas de navio, com
							muito sucesso! <br />
							Normalmente, esse tipo de envio costuma ficar mais
							em conta do que o envio por transporte aéreo, porém,
							com algumas ressalvas.
						</p>
						<p>
							É muito importante que a caixa de navio seja super
							bem montada e organizada de maneira precisa!
							<br />
							Conte com nossa experiência!
						</p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
						<p>
							<strong>Leia com atenção como funciona</strong>. E
							qualquer dúvida, tô sempre por aqui!
						</p>
						<p></p>
						<p></p>
						<p></p>
						<p>
							É importante salientar que nessa modalidade,
							contratamos uma empresa transportadora que é
							responsável por seu envio!
						</p>

						<p></p>
						<p></p>
						<p></p>

						<p>
							Assim como no redirecionamento convencional, feito
							pelos Correios, nossa responsabilidade começa quando
							seus produtos chegam no nosso endereço, e termina
							quando o envio é realizado.
						</p>

						<p></p>
						<p></p>
						<p></p>

						<p>
							Nós <strong>NÃO temos responsabilidade</strong> com
							quaisquer eventuais problemas que possam ser gerados
							no trajeto da sua encomenda. Incluindo atrasos,
							extravios, furtos ou danos, assim como nas
							encomendas por aéreo.
						</p>

						<p></p>
						<p></p>
						<p></p>
						<p>
							Dependendo da transportadora usada, você poderá ter
							acesso a um número de rastreio.
						</p>

						<p></p>
						<p></p>
						<p></p>

						<p>
							Raramente o envio por navio será tributado. <br />
							Mas existem algumas regrinhas.
						</p>

						<p></p>
						<p></p>
						<ul>
							<li>
								<p>Só saem containers duas vezes por mês</p>
							</li>
							<li>
								<p>
									Todas as coisas precisam ser
									descaracterizadas, ou seja, etiquetas e
									embalagens precisam ser retirados;
								</p>
							</li>
							<li>
								<p>
									O valor do frete total da caixa independe do
									peso e do volume
								</p>
							</li>
							<li>
								<p>
									Produtos líquidos não podem ser enviados em
									grandes quantidades (mais de 8 em uma
									caixa);
								</p>
							</li>
							<li className="list-item-with-ul-inside">
								<p>
									<strong>NÃO são permitidos</strong> envios
									dos seguintes produtos;
								</p>

								<ul>
									<li>
										<p>
											<strong>Alimentos</strong>{' '}
										</p>
									</li>
									<li>
										<p>
											<strong>
												Muitos itens repetidos
											</strong>{' '}
										</p>
									</li>
									<li>
										<p>
											<strong>Peças automotivas</strong>{' '}
										</p>
									</li>
									<li>
										<p>
											<strong>
												Remédios ou Vitaminas
											</strong>{' '}
										</p>
									</li>
									<li>
										<p>
											<strong>Bebidas Alcoólicas</strong>{' '}
										</p>
									</li>
									<li>
										<p>
											<strong>Armas e munições</strong>{' '}
										</p>
									</li>
								</ul>
							</li>
							<li>
								<p>
									O valor do  frete depende da região do
									Brasil;
								</p>
							</li>
							<li>
								<p>
									Podemos colocar utensílios de casa,
									decoração, roupas, eletrônicos, celular, mas
									tudo descaracterizado;
								</p>
							</li>
							<li>
								<p>
									O preço do nosso trabalho varia de acordo
									com a modalidade que você escolher;
								</p>
							</li>
							<li>
								<p>
									O prazo para chegada da caixa em situações
									normais,  é de até 90 dias a contar pelo dia
									de despacho.
								</p>
							</li>
						</ul>
						<p></p>
						<p></p>
						<p></p>
						<p>Todas essas regras valem para as opções a seguir.</p>
					</Text>
				</FlexColumnContainer>
				<FlexNoWrapContainer>
					<ButtonLeadBox
						href="/formas-de-envio/navio/caixa-unica"
						leadText="Caixa Única"
					/>
					<ButtonLeadBox
						href="/formas-de-envio/navio/caixa-compartilhada"
						leadText="Caixa Compartilhada"
					/>
				</FlexNoWrapContainer>
			</Section>
		</>
	)
}

export default TemplateSendByShip
