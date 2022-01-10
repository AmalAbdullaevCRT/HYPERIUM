import { VFC } from 'react'

import ChooseYourSideItem from './ChooseYourSideItem'
import styles from './styles.module.scss'

const ChooseYourSide: VFC = () => {

  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        CHOOSE YOUR SIDE
      </div>
      <div className={styles.main_history}>
        <div className={styles.main_history_item}>
        <ChooseYourSideItem
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={1}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={2}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
          <ChooseYourSideItem 
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={3}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </div>
      </div>
    </div>
  )
}

export default ChooseYourSide
