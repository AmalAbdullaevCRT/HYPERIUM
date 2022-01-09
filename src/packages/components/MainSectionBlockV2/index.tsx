import { VFC } from 'react'

import styles from './styles.module.scss'

const MainSectionBlockV2: VFC = () => {

  return (
    <div>
      <div className={styles.main_section_title}>
        <div><span className={styles.pink_text}>CODE HYPERIUM</span></div> 
        <div>is a co-created world</div>
        <div>world</div> 
      </div>
      <div className={styles.main_section_description}>
        We&apos;re here to co-create a world unlike anything ever seen before.
      </div>
    </div>
  )
}

export default MainSectionBlockV2
