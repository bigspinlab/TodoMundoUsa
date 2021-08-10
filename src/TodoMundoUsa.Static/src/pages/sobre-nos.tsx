import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateAboutUs from '@/components/Templates/SobreNos'

// all functions in pages of Next must have export default
const AboutUs: React.FC = () => {
	return (
		<>
			<SEO title="Sobre Nós" image="seo-image-preview.png" />

			<TemplateAboutUs />
		</>
	)
}

export default AboutUs
