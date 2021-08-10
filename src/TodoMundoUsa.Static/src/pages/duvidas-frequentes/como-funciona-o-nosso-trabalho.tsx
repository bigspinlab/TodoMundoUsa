import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHowDoesItWork from '@/components/Templates/ComoFuncionaONossoTrabalho'

// all functions in pages of Next must have export default
const HowDoesItWork: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="seo-image-preview.png" />

			<TemplateHowDoesItWork />
		</>
	)
}

export default HowDoesItWork
