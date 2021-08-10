import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateAboutUs: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Pacote de Compras mensal para Revendedores" />
				<FlexColumnContainer>
					<Text>
						<p>É um prazer poder te atender!</p>
						<p></p>
						<p></p>
						<p>
							Meu nome é Thaís Duarte, moro em Massachussets, sou
							personal shopper, especialista em enxoval de bebês e
							proprietária do Todo Mundo USA.
						</p>
						<p></p>
						Costumo dizer que nossa empresa é bem familiar. Meu
						marido, meu pai e minha mãe trabalham comigo desde o
						início! Durante esses anos, colecionamos clientes fiéis,
						muitos que inclusive se  tornaram amigos, várias
						alegrias e sonhos realizados!
						<p></p>
						<p></p>
						<p></p>
						<p>
							Trabalhamos de forma totalmente personalizada, com
							muita dedicação, pensando sempre em como
							proporcionar o melhor dos EUA pra você, de forma
							acessível e responsável.
						</p>
						<p></p>
						<p></p>
						<p>Conheça nosso Instagram! @todo.mundo.usa</p>
						<p></p>
						<p></p>
						<p>
							É lá onde nos comunicamos, compartilhamos ideias,
							trocamos experiências, dicas e, sobretudo, muitas
							compras!
						</p>
						<p></p>
						<p>
							Seja bem-vindo (a) sempre e obrigada por estar aqui!
						</p>
						<p>Com carinho,</p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateAboutUs
