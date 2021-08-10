import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateTermsAndConditions from '@/components/Templates/TermosECondicoes'

// all functions in pages of Next must have export default
const TermsAndConditions: React.FC = () => {
	return (
		<>
			<SEO title="Termos e Condições" image="seo-image-preview.png" />

			<TemplateTermsAndConditions />
		</>
	)
}

export default TermsAndConditions
