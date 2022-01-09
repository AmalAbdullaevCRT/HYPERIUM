import { VFC } from 'react'
import { isMobile } from 'react-device-detect'

import Button from '@components/Button'

import styles from './MainSection.module.scss'

interface MainSectionProps {
  children: HTMLElement[]
}

const MainSection: VFC<MainSectionProps> = ({ children }) => {

  return (
    <div className={styles.main_section}>
        {children}
        <div className={styles.main_section_wrapper}>
          <div className={styles.main_section_block}>
            <div className={styles.main_section_title}>
              <div>The Afterlife</div> 
              <div>has <span className={styles.pink_text}>been</span></div>
              <div><span className={styles.pink_text}>hacked</span></div> 
            </div>
            <div className={styles.main_section_description}>
              CODE HYPERIUM is a co-creative NFT project bringing top artists, writers, 
              musicians, and coders together to build an ever-expanding 
              cyberpunk world — one masterpiece at a time.
            </div>
            <div className={styles.main_section_button}>
              {!isMobile && (<Button
                size="large"
                onClick={() => {}}>
                Fractions
              </Button>)}
            </div>
          </div>
          <div className={styles.main_section_img_block}>
              {isMobile && (<Button
                size="medium"
                onClick={() => {}}>
                Fractions
              </Button>)}
          </div>  
        </div>
    </div>
  )
}

export default MainSection
