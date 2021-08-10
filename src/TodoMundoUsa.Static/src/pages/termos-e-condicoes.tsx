import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateTermsAndConditions from '@/components/Templates/TermosECondicoes'

// all functions in pages of Next must have export default
const TermsAndConditions: React.FC = () => {
	return (
		<>
			<SEO
				title="Termos e Condições"
				image="seo-image-preview.png"
				description="Nosso maior compromisso é que sua experiência de comprar aqui, seja a mais incrível possível naquilo que tange os nossos serviços! É de suma importância para nós que você fique se sinta satisfeito(a) com o nosso trabalho."
			/>

			<TemplateTermsAndConditions />
		</>
	)
}

export default TermsAndConditions
