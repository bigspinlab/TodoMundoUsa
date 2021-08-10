import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateSendByAirPlane from '@/components/Templates/EnvioPorAviao'

// all functions in pages of Next must have export default
const SendByAirPlane: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="seo-image-preview.png" />

			<TemplateSendByAirPlane />
		</>
	)
}

export default SendByAirPlane
