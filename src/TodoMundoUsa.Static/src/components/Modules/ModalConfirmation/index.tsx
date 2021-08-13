import React, { useState } from 'react'
import Button from '@/components/Elements/Button'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'
import Modal from '@/components/Elements/Modal'
import Text from '@/components/Elements/Text'

const ModalConfirmation: React.FC = () => {
	const [isShow, setIsShow] = useState<boolean>(true)

	function handleConfirmationModal() {
		setIsShow(!isShow)
	}

	return (
		<Modal isShow={isShow}>
			<FlexColumnContainer centered>
				<Text>
					<p>
						Ao optar por contratar nossos serviços, você,
						automaticamente, concorda com a adesão de todo o
						conteúdo deste manual. Por isso, é de suma importância a
						leitura de todas as abas, para que você esteja de pleno
						acordo com todas as regras e condições.
					</p>
					<p></p>
					<p></p>
					<p>
						Já agradeço de coração pelo interesse no nosso trabalho.
						Estou certa de que seremos uma super parceria de
						sucesso!
					</p>
					<p></p>
					<p></p>
					<p>Obrigada demais, sempre!</p>
					<p></p>
					<p></p>
					<p>Thaís Duarte</p>
				</Text>
				<Button
					ariaLabel="agreed"
					handleClick={handleConfirmationModal}
				>
					Eu Concordo
				</Button>
			</FlexColumnContainer>
		</Modal>
	)
}

export default ModalConfirmation
