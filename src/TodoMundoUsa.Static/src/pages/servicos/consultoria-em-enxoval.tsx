import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateOutFitConsultancy from '@/components/Templates/ConsultoriaEmEnxoval'

// all functions in pages of Next must have export default
const OutFitConsultancy: React.FC = () => {
	return (
		<>
			<SEO title="Consultoria em Enxoval" image="seo-image-preview.png" />

			<TemplateOutFitConsultancy />
		</>
	)
}

export default OutFitConsultancy
