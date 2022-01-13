import { useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'

import clsx from 'clsx'
import SwiperCore, {
Autoplay,
  FreeMode,Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

// import { useMediaQuery } from 'react-responsive'
import styles from './UploadNow.module.scss'

SwiperCore.use([Autoplay, FreeMode,Pagination])

const UploadNow: VFC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [showMore, setShowMore] = useState(true)
  const [isActive, setIsActive] = useState(4)

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
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            className={styles.carousel_block}
            freeMode={true}
            pagination={{
              "clickable": true
            }}
            grabCursor={true}
          >
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
            <SwiperSlide 
              key={i} 
              className={clsx(styles.carousel_item, isActive === i && styles.active)} 
              onClick={() => setIsActive(i)}
            >
              <Image alt='avatar' src='/static/images/person.png' width={207} height={273}></Image>
            </SwiperSlide>))}
          </Swiper>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            loop={true}
            className={styles.carousel_block}
            freeMode={true}
            pagination={{
              "clickable": true
            }}
            autoplay={{
              "delay": 1000,
              "disableOnInteraction": false
            }}
            grabCursor={true}
          >
            {[1,2,3,4,5,6,7,8,9,10].map((i) => (
            <SwiperSlide 
              key={i} 
              className={clsx(styles.carousel_item)}
            >
              <Image alt='avatar' src='/static/images/person.png' width={207} height={273}></Image>
            </SwiperSlide>))}
          </Swiper>
        </div>
    </div>
  )
}

export default UploadNow
