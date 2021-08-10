import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateOnlineShopping from '@/components/Templates/ComprasOnline'

// all functions in pages of Next must have export default
const OnlineShopping: React.FC = () => {
	return (
		<>
			<SEO title="Compras Online" image="seo-image-preview.png" />

			<TemplateOnlineShopping />
		</>
	)
}

export default OnlineShopping
