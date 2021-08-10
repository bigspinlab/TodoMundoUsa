import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHowDoIPay from '@/components/Templates/FormasDePagamento'

// all functions in pages of Next must have export default
const HowDoIPay: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="seo-image-preview.png" />

			<TemplateHowDoIPay />
		</>
	)
}

export default HowDoIPay
