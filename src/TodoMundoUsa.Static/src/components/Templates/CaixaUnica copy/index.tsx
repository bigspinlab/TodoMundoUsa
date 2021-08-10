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
						<p>Olá! Tudo bem?</p>
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
						<p>
							<strong>Leia com atenção como funciona</strong>. E
							qualquer dúvida, tô sempre por aqui! 😉
						</p>
						<p>
							Envio por Navio: É importante salientar que nessa
							modalidade, contratamos uma empresa transportadora
							que é responsável por seu envio!
						</p>

						<p>
							Assim como no redirecionamento convencional, feito
							pelos Correios, nossa responsabilidade começa quando
							seus produtos chegam no nosso endereço, e termina
							quando o envio é realizado.
						</p>
						<p>
							Nós NÃO temos responsabilidade com quaisquer
							eventuais problemas que possam ser gerados no
							trajeto da sua encomenda. Incluindo atrasos,
							extravios, furtos ou danos, assim como nas
							encomendas por aereo.
						</p>
						<p>
							Nós NÃO temos responsabilidade com quaisquer
							eventuais problemas que possam ser gerados no
							trajeto da sua encomenda. Incluindo atrasos,
							extravios, furtos ou danos, assim como nas
							encomendas por aereo.
						</p>

						<p>Raramente o envio por navio será tributado.</p>
						<p>Mas existem algumas regrinhas.</p>
						<ul>
							<li>Só saem containers duas vezes por mês</li>
							<li>
								Todas as coisas precisam ser descaracterizadas,
								ou seja, etiquetas e embalagens precisam ser
								retirados;
							</li>
							<li>
								O valor do frete total da caixa independe do
								peso e do volume
							</li>
							<li>
								Produtos líquidos não podem ser enviados em
								grandes quantidades (mais de 8 em uma caixa);
							</li>
							<li>
								NÃO são permitidos envios dos seguintes
								produtos;
								<ul>
									<li>Alimentos</li>
									<li>Muitos itens repetidos</li>
									<li>Peças automotivas</li>
									<li>Remédios ou Vitaminas</li>
									<li>Bebidas Alcoólicas</li>
									<li>Armas e munições</li>
								</ul>
							</li>
							<li>
								O valor do  frete depende da região do Brasil;
							</li>
							<li>
								Podemos colocar utensílios de casa, decoração,
								roupas, eletrônicos, celular, mas tudo
								descaracterizado;
							</li>
							<li>
								O preço do nosso trabalho varia de acordo com a
								modalidade que você escolher;
							</li>
							<li>
								O prazo para chegada da caixa em situações
								normais,  é de até 90 dias a contar pelo dia de
								despacho.
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
