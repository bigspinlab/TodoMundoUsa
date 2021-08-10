import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateNewResellersCourse from '@/components/Templates/CursoParaNovosRedirecionadores'

// all functions in pages of Next must have export default
const NewResellersCourse: React.FC = () => {
	return (
		<>
			<SEO
				title="Curso para Novos Redirecionadores"
				image="seo-image-preview.png"
				description="Mora nos EUA e quer aprender a fazer o que eu faço? Será super legal poder te ensinar e ser sua colega de trabalho!"
			/>

			<TemplateNewResellersCourse />
		</>
	)
}

export default NewResellersCourse
