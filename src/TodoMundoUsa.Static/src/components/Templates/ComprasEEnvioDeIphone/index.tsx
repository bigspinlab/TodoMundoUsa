import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateBuyIphone: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Compra e Envio de Iphone" />
				<FlexColumnContainer>
					<Text>
						<p>
							O envio de Iphones e alguns outros eletrônicos, como
							notebook e videogames, segue um padrão um pouco
							diferente.{' '}
							<strong>NÃO enviamos por correios,</strong> somente
							por navio. Uma unidade por caixa, totalmente
							descaracterizado. Indico que compre sempre direto no
							site da Apple.
						</p>
						<p></p>
						<p></p>
						<p>
							Para as compras assistidas de Iphone, a taxa também
							é diferente. O valor é de 60 dólares.
						</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateBuyIphone
