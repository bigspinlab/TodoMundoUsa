import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHowDoIPay from '@/components/Templates/FormasDePagamento'

// all functions in pages of Next must have export default
const HowDoIPay: React.FC = () => {
	return (
		<>
			<SEO
				title="Formas de Pagamento"
				image="seo-image-preview.png"
				description="Você terá, basicamente, 3 (três) formas de pagamento."
			/>

			<TemplateHowDoIPay />
		</>
	)
}

export default HowDoIPay
