import { VFC } from 'react'

import Image from 'next/image'

import clsx from 'clsx'

// import { useMediaQuery } from 'react-responsive'
import styles from './CodeHyperium.module.scss'


const CodeHyperium: VFC = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.codeHiperium} >
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
            <div className={clsx(styles.content_head_side, styles.active)}>
              The Descendants
            </div>
            <div className={styles.content_head_side_button}>
              
            </div>
            <div className={styles.content_head_side}>
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
                <div className={styles.content_text_description}>
                  Assigned to the most elite of defensive operations, 
                  The Descendants hold the title of true progeny of the 
                  ancient Samurai from millennia past. Based outside the 
                  city at their grand city-shrine, Taiyaria, the Descendants 
                  serve as the noble protectorate of Neo Kyoto, 
                  but a reality-breaking technology has recently called the 
                  Descendants back. Now they want to resurrect the souls of 
                  their ancient Samurai ancestors into the new dimension of HYPERIUM.
                </div>
              </div>
          </div>
          <div className={styles.content_borderedBlock}>
            <span className={styles.text_green}>CODE HYPERIUM</span> will be a playground for high-quality creatives, 
            artists, writers, musicians, and coders to show off their skills.
          </div>
        </div>
    </div>
  )
}

export default CodeHyperium