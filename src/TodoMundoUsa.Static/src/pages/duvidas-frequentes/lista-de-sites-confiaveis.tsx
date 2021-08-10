import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateListOfWebsites from '@/components/Templates/ListaDeWebsitesParaCompra'

// all functions in pages of Next must have export default
const ListOfWebsites: React.FC = () => {
	return (
		<>
			<SEO title="Envio por Avião" image="seo-image-preview.png" />

			<TemplateListOfWebsites />
		</>
	)
}

export default ListOfWebsites
