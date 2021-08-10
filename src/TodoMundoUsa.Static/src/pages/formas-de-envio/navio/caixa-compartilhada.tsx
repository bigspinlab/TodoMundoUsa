import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateSharedBoxSentByShip from '@/components/Templates/CaixaCompartilhada'

// all functions in pages of Next must have export default
const SharedBoxSentByShip: React.FC = () => {
	return (
		<>
			<SEO
				title="Caixa Compartilhada"
				image="seo-image-preview.png"
				description="Caixa Compartilhada - Normalmente, esse tipo de envio costuma ficar mais em conta do que o envio por transporte aéreo, porém, com algumas ressalvas."
			/>
			<TemplateSharedBoxSentByShip />
		</>
	)
}

export default SharedBoxSentByShip
