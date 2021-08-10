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
			hrefTop: string
			leadTextTop: string
			hrefBottom: string
			leadTextBottom: string
		}
	]
}

const Slider: React.FC<SliderProps> = () => {
	return (
		<article className={styles.slider}>
			<Swiper
				slidesPerView={2.3}
				spaceBetween={16}
				breakpoints={{
					'768': {
						slidesPerView: 4.5,
						spaceBetween: 16
					},
					'1024': {
						slidesPerView: 5,
						spaceBetween: 16
					}
				}}
			>
				{sliderData.map((sliderItem, index) => [
					<SwiperSlide key={index}>
						<FlexColumnContainer fullHeight>
							<ButtonLeadBox
								href={sliderItem.hrefTop}
								leadText={sliderItem.leadTextTop}
							/>

							<ButtonLeadBox
								href={sliderItem.hrefBottom}
								leadText={sliderItem.leadTextBottom}
							/>
						</FlexColumnContainer>
					</SwiperSlide>
				])}
			</Swiper>
		</article>
	)
}

export default Slider
