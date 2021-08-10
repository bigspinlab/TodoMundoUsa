import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateMonthlyResellersPackage from '@/components/Templates/PacoteDeComprasMensalParaRevendedores'

// all functions in pages of Next must have export default
const MonthlyResellersPackage: React.FC = () => {
	return (
		<>
			<SEO
				title="Pacote de Compras Mensal para Revendedores"
				image="seo-image-preview.png"
				description="Esse serviço tem sido super utilizado pelos revendedores, porque conseguimos preços muito bons. Aqueles garimpos,  mesmo!"
			/>

			<TemplateMonthlyResellersPackage />
		</>
	)
}

export default MonthlyResellersPackage
