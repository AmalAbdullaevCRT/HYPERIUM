import { VFC } from 'react'

import styles from './styles.module.scss'

interface ChooseYourSideItemProps {
  leftImgURL: string
  rightImgURL: string
  number: number
  title: string
  description: string
}

const ChooseYourSideItem: VFC<ChooseYourSideItemProps> = ({ leftImgURL, rightImgURL, number, title, description }) => {

  return (
    <div className={styles.item}>
      <div className={styles.item_title}>
        <div className={styles.item_title_number}>{number}</div>
        <div className={styles.item_title_text}>{title}</div>
      </div>
      <div className={styles.item_description}>{description}</div>
      <div className={styles.side_covers}>
        <div className={styles.side_cover} style={{
                  width: '330px',
                  backgroundImage: `url(${leftImgURL})`
              }}></div>
        <div className={styles.side_cover} style={{
                width: '100%',
                backgroundImage: `url(${rightImgURL})`
              }}></div>
      </div>
    </div>
  )
}

export default ChooseYourSideItem
