import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateSendByShip from '@/components/Templates/EnvioPorNavio'

// all functions in pages of Next must have export default
const SendByAirPlane: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="/seo-image-preview.png" />

			<TemplateSendByShip />
		</>
	)
}

export default SendByAirPlane
