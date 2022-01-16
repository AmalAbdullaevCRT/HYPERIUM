import { ChangeEvent, useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Image from 'next/image'

import clsx from 'clsx'

import SwitchButton from '@components/SwitchButton'

import styles from './CodeHyperium.module.scss'


const CodeHyperium: VFC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [selectedType, setSelectedType] = useState(false)
  const [showMore, setShowMore] = useState(true)


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.checked)
  }

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
        <div className={styles.content}>
          <div className={styles.content_head}>
            <div className={clsx(styles.content_head_side, !selectedType && styles.active)}>
              The Descendants
            </div>
            <div className={styles.content_head_side_button}>
              <SwitchButton handleChange={(e) => handleChange(e)} checked={selectedType} />
            </div>
            <div className={clsx(styles.content_head_side, selectedType && styles.active)}>
              Ventana
            </div>
          </div>
          <div className={styles.content_main}>
              <div className={styles.content_avatar}>
                <Image alt='avatar' src='/static/images/AvatarMain.png' width={432} height={467}></Image>
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
                {isMobile && <a className={styles.more_button} onClick={() => setShowMore(!showMore)}>More</a>}
              </div>
          </div>
          <div className={styles.content_borderedBlock}>
            <span className={styles.text_green}>CODE HYPERIUM</span> will be a playground for high-quality creatives, 
            artists, writers, musicians, and coders to show off their skills.
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeHyperium
