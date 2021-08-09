import React from 'react'
import SEO from '@/components/Shared/SEO'
import Section from '@/components/Elements/Section'
import GoBackLink from '@/components/Elements/GoBackLink'
import Headline from '@/components/Elements/Headline'
import Text from '@/components/Elements/Text'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

// all functions in pages of Next must have export default
const BuyIphone: React.FC = () => {
	return (
		<>
			<SEO
				title="Compra de Iphone"
				image="https://via.placeholder.com/500"
			/>

			<Section>
				<GoBackLink />
				<Headline mainHeadline="Perguntas Frequentes" />
				<FlexColumnContainer>
					<Headline smallHeadline="Como comprar um Iphone" />
					<Text>
						<p>
							Esse ai é o nosso carro chefe! No redirecionamento
							de compras, você compra em qualquer site dos EUA e
							usa o meu endereço para entrega. Eu recebo,
							reembalo, organizo de acordo com o padrão exigido,
							declaro e envio pra você! Cobramos 40.00 dólares,
							por cada caixa enviada. Taxa fixa! Independente do
							volume da sua caixa. NÃO cobramos pelas caixas que
							recebemos. Por isso, você pode comprar em quantos
							sites quiser, que compactamos tudo em uma caixa só
							para te enviar! O limite de peso para envio é de 30
							kg! Em relação ao frete, o valor será de acordo com
							o peso da sua encomenda. Por isso, só teremos como
							saber precisamente o valor, depois que todas suas
							encomendas chegarem, forem conferidas e pesadas.
							Falaremos mais sobre as conferências no item: “nossa
							dinâmica de trabalho”.
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default BuyIphone
