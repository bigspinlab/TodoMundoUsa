import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateOutFitConsultancy from '@/components/Templates/ConsultoriaEmEnxoval'

// all functions in pages of Next must have export default
const OutFitConsultancy: React.FC = () => {
	return (
		<>
			<SEO
				title="Consultoria em Enxoval"
				image="seo-image-preview.png"
				description="Te assessoramos na montagem do seu enxoval! Nossa consultoria tem como principal objetivo dar dicas de um enxoval super útil e econômico, independente do sexo do seu bebê."
			/>

			<TemplateOutFitConsultancy />
		</>
	)
}

export default OutFitConsultancy
