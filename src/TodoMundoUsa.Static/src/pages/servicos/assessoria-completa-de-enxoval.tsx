import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingRedirect from '@/components/Templates/RedirecionamentoDeCompras'

// all functions in pages of Next must have export default
const AdviceBabyOutFit: React.FC = () => {
	return (
		<>
			<SEO
				title="Assessoria Completa de Enxoval"
				image="seo-image-preview.png"
			/>

			<TemplateShoppingRedirect />
		</>
	)
}

export default AdviceBabyOutFit
