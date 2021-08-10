import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateConsultancyNewResellersBrazil from '@/components/Templates/ConsultoriaParaNovosRevendedoresDeImportadosNoBrasil'

// all functions in pages of Next must have export default
const ConsultancyNewResellersBrazil: React.FC = () => {
	return (
		<>
			<SEO
				title="Consultoria para Novos Revendedores de Importados no Brasil"
				image="seo-image-preview.png"
				description="Nessa consultoria, batemos um papo por cerca de uma hora através de videoconferência no whatsapp ou facetime. Se você quer investir em produtos importados para empreender em um novo negócio ou para alavancar o que já existe, vou te ajudar a nortear esse caminho!"
			/>

			<TemplateConsultancyNewResellersBrazil />
		</>
	)
}

export default ConsultancyNewResellersBrazil
