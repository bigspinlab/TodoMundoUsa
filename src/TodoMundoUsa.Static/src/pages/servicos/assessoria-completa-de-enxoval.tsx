import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateAdviceBabyOutFit from '@/components/Templates/AssessoriaCompletaDeEnxoval'

// all functions in pages of Next must have export default
const AdviceBabyOutFit: React.FC = () => {
	return (
		<>
			<SEO
				title="Assessoria Completa de Enxoval"
				image="seo-image-preview.png"
			/>

			<TemplateAdviceBabyOutFit />
		</>
	)
}

export default AdviceBabyOutFit
