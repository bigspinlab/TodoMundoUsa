import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateAboutUs from '@/components/Templates/SobreNos'

// all functions in pages of Next must have export default
const AboutUs: React.FC = () => {
	return (
		<>
			<SEO
				title="Sobre Nós"
				image="seo-image-preview.png"
				description="Meu nome é Thaís Duarte, moro em Massachussets, sou personal shopper, especialista em enxoval de bebês e proprietária do Todo Mundo USA."
			/>

			<TemplateAboutUs />
		</>
	)
}

export default AboutUs
