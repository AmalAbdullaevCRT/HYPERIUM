import { ChangeEvent, useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'

import clsx from 'clsx'
import { Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwitchButton from '@components/SwitchButton'

// Import Swiper styles
import 'swiper/css'

import styles from './CodeHyperium.module.scss'


const CodeHyperium: VFC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [selectedType, setSelectedType] = useState(false)
  const [showMore, setShowMore] = useState(true)
  const [swiper, setSwiper] = useState(null)


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.checked)
    slideTo(Number(event.target.checked))
  }

  const onSlideChange = (swiper: SwiperType) => {
    setSelectedType(Boolean(swiper.activeIndex))
  }

  const slideTo = (index) => swiper.slideTo(index)

  return (
    <div className={styles.codeHiperium} >
      <div className={styles.codeHiperium_wrapper}>
        <div className={styles.title}>
          <span className={styles.text_green}>CODE HYPERIUM</span> is
        </div>
        <div className={styles.description}>
          An entertaining, story-and-game-driven community. 
          A welcome refuge for artists 
          and non-techies to learn about the Web3 movement. 
          A platform to showcase high-quality artists, writers, 
          musicians, and coders.
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_head}>
          <div className={clsx(styles.content_head_side, !selectedType && styles.active)}>
            The Descendants
          </div>
          <div className={styles.content_head_side_button}>
          <SwitchButton handleChange={handleChange} checked={selectedType} />
          </div>
          <div className={clsx(styles.content_head_side, selectedType && styles.active)}>
            The Ventana
          </div>
        </div>
        <Swiper grabCursor={true} onSlideChange={onSlideChange} onSwiper={setSwiper}>
          <SwiperSlide>
            <div className={styles.content_main}>
              <div className={styles.content_avatar}>
                <Image alt='avatar' src='/static/images/avatar-main.png' width={432} height={467}></Image>
              </div>
              <div className={styles.content_text}>
                <div className={styles.content_text_title}>
                  The <span className={styles.text_green}>Descendants</span>
                </div>
                <div className={clsx(styles.content_text_description, showMore && styles.more)}>
                  Assigned to the most elite of defensive operations, 
                  The Descendants hold the title of true progeny of the 
                  ancient Samurai from millennia past. Based outside the 
                  city at their grand city-shrine, Taiyaria, the Descendants 
                  serve as the noble protectorate of Neo Kyoto, 
                  but a reality-breaking technology has recently called the 
                  Descendants back. Now they want to resurrect the souls of 
                  their ancient Samurai ancestors into the new dimension of HYPERIUM.
                </div>
                {isMobile && <a className={styles.more_button} onClick={() => setShowMore(!showMore)}>{showMore ? 'More' : 'Hide' }</a>}
              </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.content_main}>
              <div className={styles.content_avatar}>
                <Image alt='avatar' src='/static/images/avatar-main.png' width={432} height={467}></Image>
              </div>
              <div className={styles.content_text}>
                <div className={styles.content_text_title}>
                  The <span className={styles.text_green}>Ventana</span>
                </div>
                <div className={clsx(styles.content_text_description, showMore && styles.more)}>
                  The Ventana cyborg race are the longest running, non-revolting AI to co-exist 
                  with the Humans of Neo Kyoto. Citizens have grown so comfortable in fact 
                  that the Descendants tasked the Ventana to construct the new digital dimension
                  of HYPERIUM. Little does Humanity know, however: the Ventana want 
                  HYPERIUM for themselves. Rumors suggest the Ventana have already implemented 
                  backdoor code to ensure their Human overlords never control it... 
                </div>
                {isMobile && <a className={styles.more_button} onClick={() => setShowMore(!showMore)}>{showMore ? 'More' : 'Hide' }</a>}
              </div>
          </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className={styles.codeHiperium_wrapper}>
          <div className={styles.content_borderedBlock}>
            <span className={styles.text_green}>CODE HYPERIUM</span> will be a playground for high-quality creatives, 
            artists, writers, musicians, and coders to show off their skills.
          </div>
        </div>
    </div>
  )
}

export default CodeHyperium

