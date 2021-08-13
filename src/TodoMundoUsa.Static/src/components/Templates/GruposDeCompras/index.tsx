import React from 'react'

import Headline from '@/components/Elements/Headline'
import Section from '@/components/Elements/Section'
import Text from '@/components/Elements/Text'
import GoBackLink from '@/components/Elements/GoBackLink'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'

//import styles from './styles.module.scss'
const TemplateShoppingGroup: React.FC = () => {
	return (
		<>
			<Section>
				<GoBackLink />
				<Headline mainHeadline="Grupos de Compras" />
				<FlexColumnContainer>
					<Text>
						<p>
							Sempre realizamos grupos de compras em outlets ou em
							lojas que valem super a pena!
						</p>
						<p></p>
						<p></p>
						<p>
							Normalmente nossos grupos super dinâmicos e para dar
							atenção a todos, contamos com a participação de, no
							máximo, 5 pessoas.
						</p>
						<p></p>
						<p></p>
						<p>
							Os grupos são formados no whatsapp e as regras de
							funcionamento são passadas para os participantes
							antes das compras. O valor para participação varia
							de um grupo para o outro. Eles sempre são divulgados
							com antecedência no Instagram, por isso, fique
							sempre de olho!
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

export default TemplateShoppingGroup
