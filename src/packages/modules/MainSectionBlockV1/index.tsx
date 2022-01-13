import { VFC } from 'react'

import styles from './styles.module.scss'

const MainSectionBlockV1: VFC = () => {

  return (
    <div>
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
    </div>
  )
}

export default MainSectionBlockV1
