import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateSendByShip from '@/components/Templates/EnvioPorNavio'

// all functions in pages of Next must have export default
const SendByShip: React.FC = () => {
	return (
		<>
			<SEO
				title="Envio por Navio"
				image="/seo-image-preview.png"
				description="Já há algum tempo, nós enviamos caixas de navio, com muito sucesso! Normalmente, esse tipo de envio costuma ficar mais em conta do que o envio por transporte aéreo, porém, com algumas ressalvas."
			/>

			<TemplateSendByShip />
		</>
	)
}

export default SendByShip
