import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingRedirect from '@/components/Templates/RedirecionamentoDeCompras'

// all functions in pages of Next must have export default
const ShoppingRedirect: React.FC = () => {
	return (
		<>
			<SEO
				title="Redirecionamento de Compras"
				image="seo-image-preview.png"
				description="No redirecionamento de compras, você compra em qualquer site dos EUA e usa o meu endereço para entrega. Eu recebo, reembalo, organizo de acordo com o padrão exigido, declaro e envio pra você!"
			/>

			<TemplateShoppingRedirect />
		</>
	)
}

export default ShoppingRedirect
