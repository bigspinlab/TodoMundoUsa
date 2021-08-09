import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingRedirect from '@/components/Templates/RedirecionamentoDeCompras'

// all functions in pages of Next must have export default
const ShoppingRedirect: React.FC = () => {
	return (
		<>
			<SEO title="Redirecionamento" image="/seo-image-preview.png" />

			<TemplateShoppingRedirect />
		</>
	)
}

export default ShoppingRedirect
