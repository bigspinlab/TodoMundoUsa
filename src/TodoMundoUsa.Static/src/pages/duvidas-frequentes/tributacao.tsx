import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateTaxPage from '@/components/Templates/Tributacao'

// all functions in pages of Next must have export default
const TaxPage: React.FC = () => {
	return (
		<>
			<SEO
				title="Tributação"
				image="seo-image-preview.png"
				description="Não é um bicho de sete cabeças!!! A tributação, na maior parte das vezes, existe, mas fazemos todo o procedimento para que o risco e o valor, caso sua encomenda seja taxada, sejam os menores possíveis."
			/>

			<TemplateTaxPage />
		</>
	)
}

export default TaxPage
