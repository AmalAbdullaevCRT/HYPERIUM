import { ReactNode, VFC } from 'react'
import { isMobile } from 'react-device-detect'

import Button from '@components/Button'

import styles from './MainSection.module.scss'

interface MainSectionProps {
  children: ReactNode
  imgURL: string
  mainSectionBlock: ReactNode
}

const MainSection: VFC<MainSectionProps> = ({ children, imgURL, mainSectionBlock }) => {

  return (
    <div className={styles.main_section}>
        {children}
        <div className={styles.main_section_wrapper}>
          <div className={styles.main_section_block}>
            {mainSectionBlock}
            <div className={styles.main_section_button}>
              {!isMobile && (<Button
                size="large"
                onClick={() => {}}>
                Fractions
              </Button>)}
            </div>
          </div>
          <div className={styles.main_section_img_block}   style={{
              backgroundImage: `url(${imgURL})`
            }}>
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
