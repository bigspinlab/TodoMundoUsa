import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'

import { sliderData } from './data'

import styles from './styles.module.scss'

import ButtonLeadBox from '@/components/Elements/ButtonLeadBox'
import FlexColumnContainer from '@/components/Elements/FlexColumnContainer'
interface SliderProps {
	sliderData?: [
		{
			href: string
			leadText: string
		}
	]
}

const Slider: React.FC<SliderProps> = () => {
	return (
		<article className={styles.slider}>
			<Swiper
				slidesPerView={2.8}
				spaceBetween={16}
				breakpoints={{
					'768': {
						slidesPerView: 5.5,
						spaceBetween: 16
					},
					'1024': {
						slidesPerView: 8,
						spaceBetween: 16
					}
				}}
			>
				{sliderData.map((sliderItem, index) => (
					<SwiperSlide key={index}>
						<FlexColumnContainer>
							<ButtonLeadBox
								href={sliderItem.href}
								leadText={sliderItem.leadText}
							/>

							<ButtonLeadBox
								href={sliderItem.href}
								leadText={sliderItem.leadText}
							/>
						</FlexColumnContainer>
					</SwiperSlide>
				))}
			</Swiper>
		</article>
	)
}

export default Slider
