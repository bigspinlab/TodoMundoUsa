import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateAssistedPurchase from '@/components/Templates/ComprasAssistidas'

// all functions in pages of Next must have export default
const AssistedPurchase: React.FC = () => {
	return (
		<>
			<SEO title="Compra Assistida" image="seo-image-preview.png" />

			<TemplateAssistedPurchase />
		</>
	)
}

export default AssistedPurchase
