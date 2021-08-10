import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHowToReachUs from '@/components/Templates/ComoNosContactar'

// all functions in pages of Next must have export default
const HowToReachUs: React.FC = () => {
	return (
		<>
			<SEO
				title="Como nos Contactar"
				image="seo-image-preview.png"
				description="Pensando sempre na comodidade e na desburocratização do processo de compra – afinal, comprar deve ser algo prazeroso, não é mesmo? O nosso procedimento é bem simples!"
			/>

			<TemplateHowToReachUs />
		</>
	)
}

export default HowToReachUs
