import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingRedirect from '@/components/Templates/RedirecionamentoDeCompras'

// all functions in pages of Next must have export default
const MonthlyResellersPackage: React.FC = () => {
	return (
		<>
			<SEO
				title="Pacote de Compras Mensal para Revendedores"
				image="seo-image-preview.png"
			/>

			<TemplateShoppingRedirect />
		</>
	)
}

export default MonthlyResellersPackage
