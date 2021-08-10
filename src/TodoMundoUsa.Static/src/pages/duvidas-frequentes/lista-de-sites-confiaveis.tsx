import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateListOfWebsites from '@/components/Templates/ListaDeWebsitesParaCompra'

// all functions in pages of Next must have export default
const ListOfWebsites: React.FC = () => {
	return (
		<>
			<SEO
				title="Lista de Sites Confiáveis"
				image="seo-image-preview.png"
				description="São diversos sites, em vários segmentos! Suas compras são super bem vindas em minha casa!"
			/>

			<TemplateListOfWebsites />
		</>
	)
}

export default ListOfWebsites
