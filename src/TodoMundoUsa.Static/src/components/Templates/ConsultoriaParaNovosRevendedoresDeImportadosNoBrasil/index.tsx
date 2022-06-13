import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateConsultancyNewResellersBrazil: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Consultoria para Novos Revendedores de Importados no Brasil" />
				<FlexColumnContainer>
					<Text>
						<p>
							Nessa consultoria, batemos um papo por cerca de uma
							hora através de videoconferência no whatsapp ou
							facetime. Se você quer investir em produtos
							importados para empreender em um novo negócio ou
							para alavancar o que já existe, vou te ajudar a
							nortear esse caminho!
						</p>
						<p></p>
						<p></p>
						<p>
							Vamos falar sobre produtos, estoque, mídias sociais,
							sites e custos. Vou te assessorar e mostrar o que
							mais vende, as novidades do mercado e te ajudar a
							encontrar seu foco, sanando suas dúvidas e dando
							várias dicas de como enviar. Tenho certeza que será
							esclarecedor! O custo dessa consultoria é de 45.00
							doláres.
						</p>
						<p></p>
						<p></p>
						<p>Vamos juntos criar novas oportunidades!</p>
						<p></p>
						<p></p>
					</Text>
				</FlexColumnContainer>
			</Section>
		</>
	)
}

export default TemplateConsultancyNewResellersBrazil
