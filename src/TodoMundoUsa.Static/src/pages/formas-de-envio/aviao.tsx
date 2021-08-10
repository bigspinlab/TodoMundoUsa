import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateSendByAirPlane from '@/components/Templates/EnvioPorAviao'

// all functions in pages of Next must have export default
const SendByAirPlane: React.FC = () => {
	return (
		<>
			<SEO
				title="Envio por Avião"
				image="seo-image-preview.png"
				description="Você pode comprar em quantos sites quiser, que compactamos tudo em uma caixa só para te enviar!"
			/>

			<TemplateSendByAirPlane />
		</>
	)
}

export default SendByAirPlane
