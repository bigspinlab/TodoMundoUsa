import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHowToReachUs from '@/components/Templates/ComoNosContactar'

// all functions in pages of Next must have export default
const HowToReachUs: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="seo-image-preview.png" />

			<TemplateHowToReachUs />
		</>
	)
}

export default HowToReachUs
