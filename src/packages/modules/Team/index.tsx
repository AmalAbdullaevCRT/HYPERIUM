import { VFC } from 'react'

import Image from 'next/image'

import styles from './styles.module.scss'

const Team: VFC = () => {

  return (
    <div className={styles.team}>
      <div className={styles.team_title}>
       Team
      </div>
      <div className={styles.team_content}>
        <div className={styles.team_content_item}>
          <Image alt='avatar' src='/static/images/teammate.png' width={268} height={268}></Image>
          <div className={styles.team_content_item_name}>Smos</div>
        </div>
        <div className={styles.team_content_item}>
          <Image alt='avatar' src='/static/images/teammate.png' width={268} height={268}></Image>
          <div className={styles.team_content_item_name}>Coffence</div>
        </div>
        <div className={styles.team_content_item}>
          <Image alt='avatar' src='/static/images/teammate.png' width={268} height={268}></Image>
          <div className={styles.team_content_item_name}>Metafierce</div>
        </div>
        <div className={styles.team_content_item}>
          <Image alt='avatar' src='/static/images/teammate.png' width={268} height={268}></Image>
          <div className={styles.team_content_item_name}>Nifty Labs</div>
        </div>
      </div>
    </div>
  )
}

export default Team
