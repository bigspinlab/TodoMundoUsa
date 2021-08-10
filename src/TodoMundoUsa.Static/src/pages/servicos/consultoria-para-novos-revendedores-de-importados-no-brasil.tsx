import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateConsultancyNewResellersBrazil from '@/components/Templates/ConsultoriaParaNovosRevendedoresDeImportadosNoBrasil'

// all functions in pages of Next must have export default
const ConsultancyNewResellersBrazil: React.FC = () => {
	return (
		<>
			<SEO
				title="Consultoria para Novos Revendedores de Importados no Brasil"
				image="seo-image-preview.png"
			/>

			<TemplateConsultancyNewResellersBrazil />
		</>
	)
}

export default ConsultancyNewResellersBrazil
