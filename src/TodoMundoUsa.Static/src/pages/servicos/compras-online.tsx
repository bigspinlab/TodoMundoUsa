import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateOnlineShopping from '@/components/Templates/ComprasOnline'

// all functions in pages of Next must have export default
const OnlineShopping: React.FC = () => {
	return (
		<>
			<SEO
				title="Compras Online"
				image="seo-image-preview.png"
				description="Se você não tem cartão internacional ou o site daqui não aceita seu cartão, fazemos sua compra online. "
			/>

			<TemplateOnlineShopping />
		</>
	)
}

export default OnlineShopping
