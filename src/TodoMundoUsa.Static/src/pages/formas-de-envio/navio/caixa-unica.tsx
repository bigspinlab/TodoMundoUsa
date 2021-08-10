import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateSingleBoxSentByShip from '@/components/Templates/CaixaUnica'

// all functions in pages of Next must have export default
const SingleBoxSentByShip: React.FC = () => {
	return (
		<>
			<SEO
				title="Caixa Única"
				image="seo-image-preview.png"
				description="Caixa Única - Normalmente, esse tipo de envio costuma ficar mais em conta do que o envio por transporte aéreo, porém, com algumas ressalvas."
			/>
			<TemplateSingleBoxSentByShip />
		</>
	)
}

export default SingleBoxSentByShip
