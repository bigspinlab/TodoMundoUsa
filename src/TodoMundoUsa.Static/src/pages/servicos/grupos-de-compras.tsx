import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingGroup from '@/components/Templates/GruposDeCompras'

// all functions in pages of Next must have export default
const ShoppingGroup: React.FC = () => {
	return (
		<>
			<SEO
				title="Grupos de Compras"
				image="seo-image-preview.png"
				description="Sempre realizamos grupos de compras em outlets ou em lojas que valem super a pena!"
			/>

			<TemplateShoppingGroup />
		</>
	)
}

export default ShoppingGroup
