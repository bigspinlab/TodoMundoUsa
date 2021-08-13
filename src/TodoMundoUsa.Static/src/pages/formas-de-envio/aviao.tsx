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
				description="O envio por transporte aéreo, poderá ser realizado
				por transportadora ou pelos correios dos EUA. Em
				ambos os casos, você poderá verificar seu rastreio
				no site dos correios do Brasil."
			/>

			<TemplateSendByAirPlane />
		</>
	)
}

export default SendByAirPlane
