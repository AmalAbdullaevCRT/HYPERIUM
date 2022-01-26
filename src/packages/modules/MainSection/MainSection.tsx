import { ReactNode, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Button from '@components/Button'

import styles from './MainSection.module.scss'

interface MainSectionProps {
  children: ReactNode
  imgURL: string
  backgroundImgURL: string
  mainSectionBlock: ReactNode
}

const MainSection: VFC<MainSectionProps> = ({ children, imgURL, mainSectionBlock, backgroundImgURL }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.main_section} style={{
      backgroundImage: `url(${backgroundImgURL})`
    }}>
        {children}
        <div className={styles.main_section_wrapper}>
          <div className={styles.main_section_content}>
            <div className={styles.main_section_block}>
              {mainSectionBlock}
              <div className={styles.main_section_button}>
                {!isMobile && (<Button
                  size="large"
                  onClick={() => {}}>
                  Mint
                </Button>)}
              </div>
            </div>
            <div className={styles.main_section_img_block}   style={{
                backgroundImage: `url(${imgURL})`
              }}>
                <div className={styles.main_section_button}>
                  {isMobile && (<Button
                    size="medium"
                    onClick={() => {}}>
                    Mint
                  </Button>)}
                </div>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default MainSection
