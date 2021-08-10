import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateTaxPage from '@/components/Templates/Tributacao'

// all functions in pages of Next must have export default
const TaxPage: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="seo-image-preview.png" />

			<TemplateTaxPage />
		</>
	)
}

export default TaxPage
