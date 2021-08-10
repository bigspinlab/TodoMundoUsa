import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingRedirect from '@/components/Templates/RedirecionamentoDeCompras'

// all functions in pages of Next must have export default
const ConsultancyNewResellersBrasil: React.FC = () => {
	return (
		<>
			<SEO
				title="Consultoria para Novos Revendedores de Importados no Brasil"
				image="seo-image-preview.png"
			/>

			<TemplateShoppingRedirect />
		</>
	)
}

export default ConsultancyNewResellersBrasil
