import { useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'

import clsx from 'clsx'
import SwiperCore, {
  FreeMode,Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// import { useMediaQuery } from 'react-responsive'
import styles from './UploadNow.module.scss'

SwiperCore.use([FreeMode,Pagination])

const UploadNow: VFC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [showMore, setShowMore] = useState(true)
  const [isActiveCard, setIsActiveCard] = useState(4)
  const [isActiveRow, setIsActiveRow] = useState('top')

  const onClickHandler = (id: number, row: 'top' | 'bottom') => {
    setIsActiveCard(id)
    setIsActiveRow(row)
  }

  return (
    <div className={styles.uploadNow} >
        <div className={styles.uploadNow_title}>UPLOAD now</div>
        <div className={clsx(styles.uploadNow_description, showMore && styles.more)}>
          CODE HYPERIUM’s experimental gameplay places power in the hands of our NFT holders. 
          Vote collectively on the strategies that the Descendants and Ventana will take. 
          Choose political paradigms, ecological structures, trending fashions, and much more. 
          With each decision made, the canon unfolds, presenting richer questions to debate and explore. All inside CODE HYPERIUM.
        </div>
        {isMobile && <a className={styles.more_button} onClick={() => setShowMore(!showMore)}>More</a>}
        <div className={styles.carousel}>
          <Swiper
            breakpoints={{
              "320": {
                "slidesPerView": 2,
                "spaceBetween": 15
              },
              "768": {
                "slidesPerView": 4,
                "spaceBetween": 15
              },
              "1024": {
                "slidesPerView": 8,
                "spaceBetween": 15
              },
            }}
            loop={true}
            className={clsx(styles.carousel_block, isActiveRow !== 'top' && styles.active_top)}
            freeMode={true}
            pagination={{
              "clickable": true
            }}
            grabCursor={true}
          >
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
            <SwiperSlide 
              key={i} 
              className={clsx(styles.carousel_item, isActiveRow === 'top' && isActiveCard === i && styles.active)} 
              onClick={() => onClickHandler(i, 'top')}
            >
              <Image alt='avatar' src='/static/images/person.png' width={207} height={273}></Image>
            </SwiperSlide>))}
          </Swiper>
          <Swiper
            breakpoints={{
              "320": {
                "slidesPerView": 2,
                "spaceBetween": 15
              },
              "768": {
                "slidesPerView": 4,
                "spaceBetween": 15
              },
              "1024": {
                "slidesPerView": 8,
                "spaceBetween": 15
              },
            }}
            loop={true}
            className={clsx(styles.carousel_block, isActiveRow !== 'bottom' && styles.active_bottom)}
            freeMode={true}
            pagination={{
              "clickable": true
            }}
            grabCursor={true}
          >
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
            <SwiperSlide 
              key={i} 
              className={clsx(styles.carousel_item, isActiveRow === 'bottom' && isActiveCard === i && styles.active)} 
              onClick={() => onClickHandler(i, 'bottom')}
            >
              <Image alt='avatar' src='/static/images/person.png' width={207} height={273}></Image>
            </SwiperSlide>))}
          </Swiper>
        </div>
        <div className={clsx(styles.uploadNow_title, styles.uploadNow_title_bottom)}>
            Roadmap
          {!isMobile && <div className={styles.uploadNow_arrows}></div>}
        </div>
    </div>
  )
}

export default UploadNow
