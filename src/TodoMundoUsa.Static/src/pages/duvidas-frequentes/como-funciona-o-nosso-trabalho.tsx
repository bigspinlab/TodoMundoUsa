import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHowDoesItWork from '@/components/Templates/ComoFuncionaONossoTrabalho'

// all functions in pages of Next must have export default
const HowDoesItWork: React.FC = () => {
	return (
		<>
			<SEO
				title="Como funciona o nosso trabalho"
				image="seo-image-preview.png"
				description="Para que a gente consiga atender bem nosso volume, priorizamos a organização."
			/>

			<TemplateHowDoesItWork />
		</>
	)
}

export default HowDoesItWork
