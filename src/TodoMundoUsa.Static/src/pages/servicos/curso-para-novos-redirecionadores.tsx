import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateShoppingRedirect from '@/components/Templates/RedirecionamentoDeCompras'

// all functions in pages of Next must have export default
const NewResellersCourse: React.FC = () => {
	return (
		<>
			<SEO
				title="Curso para Novos Redirecionadores"
				image="/seo-image-preview.png"
			/>

			<TemplateShoppingRedirect />
		</>
	)
}

export default NewResellersCourse
