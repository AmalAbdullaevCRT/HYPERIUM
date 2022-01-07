import { VFC } from 'react'

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
              The Afterlife has been <span>hacked</span> 
            </div>
            <div className={styles.main_section_description}>
              CODE HYPERIUM is a co-creative NFT project bringing top artists, writers, 
              musicians, and coders together to build an ever-expanding 
              cyberpunk world — one masterpiece at a time.
            </div>
            <div className={styles.main_section_button}>
              <Button
                onClick={() => {}}>
                Factions
              </Button>
            </div>
          </div>
          <div className={styles.main_section_img}>
            {/* <Image
              src="/static/images/fortnite-skin1.png"
              alt="fortnite"
              width={563}
              height={562}
              className={styles.main_section_img}
            /> */}
          </div>
        </div>
    </div>
  )
}

export default MainSection
