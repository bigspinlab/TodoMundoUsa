import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHome from '@/components/Templates/Home'

// all functions in pages of Next must have export default
const Home: React.FC = () => {
	return (
		<>
			<SEO
				title="Homepage"
				image="seo-image-preview.png"
				description="Saiba tudo sobre os nossos serviços, formas de envio e quais as perguntas frequentes dos nossos clientes! "
			/>

			<TemplateHome />
		</>
	)
}

export default Home
