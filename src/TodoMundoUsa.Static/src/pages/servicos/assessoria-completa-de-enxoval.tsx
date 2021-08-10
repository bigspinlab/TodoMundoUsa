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
				description="O nosso compromisso é fazer com que você economize e faça seu enxoval com qualidade e com o melhor custo benefício possível! "
			/>

			<TemplateAdviceBabyOutFit />
		</>
	)
}

export default AdviceBabyOutFit
