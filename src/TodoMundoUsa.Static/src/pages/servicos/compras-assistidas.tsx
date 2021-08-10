import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateAssistedPurchase from '@/components/Templates/ComprasAssistidas'

// all functions in pages of Next must have export default
const AssistedPurchase: React.FC = () => {
	return (
		<>
			<SEO
				title="Compra Assistida"
				image="seo-image-preview.png"
				description="Você pode optar por comprar na loja comigo! Nas compras assistidas, conversamos para entender as suas necessidades e desejos, te indico lojas com ótimos preços e vamos às compras!"
			/>

			<TemplateAssistedPurchase />
		</>
	)
}

export default AssistedPurchase
