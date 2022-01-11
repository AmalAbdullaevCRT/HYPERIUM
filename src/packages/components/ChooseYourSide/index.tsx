import { useState, VFC } from 'react'

import ChooseYourSideItem from './ChooseYourSideItem'
import styles from './styles.module.scss'

const ChooseYourSide: VFC = () => {
  const [openedItems, setOpenedItems] = useState(Array.from({ length: 4 } , () => ({ left: false, right: false })))
  const [historyStyles, setHistoryStyles] = useState({
    maxHeight: 480
  })

  const onClickHandler = (side: 'left' | 'right') => {
    window.scroll(2400, 2600)
    setHistoryStyles({
      maxHeight: historyStyles.maxHeight + 570
    })
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        CHOOSE YOUR SIDE
      </div>
      <div className={styles.main_history} style={
        { maxHeight : `${historyStyles.maxHeight}px` }
      }>
        <ChooseYourSideItem
          onClickHandler={onClickHandler}
          leftOpened={openedItems[0]?.left}
          rightOpened={openedItems[0]?.right}
          leftImgURL="/static/images/fortnite_item1.png" 
          rightImgURL="/static/images/fortnite_item1.png" />
        <ChooseYourSideItem
          onClickHandler={onClickHandler}
          leftOpened={openedItems[1]?.left}
          rightOpened={openedItems[1]?.right}
          title='History'
          description='Divine Anarchy is the first attempt at an in game 
            governance NFT that will act as an experimental 
            catalyst for open source tribe formation.'
          number={1}
          leftImgURL="/static/images/fortnite_item1.png" 
          rightImgURL="/static/images/fortnite_item1.png" />
        <ChooseYourSideItem
          onClickHandler={onClickHandler}
          leftOpened={openedItems[2]?.left}
          rightOpened={openedItems[2]?.right}
          title='History'
          description='Divine Anarchy is the first attempt at an in game 
            governance NFT that will act as an experimental 
            catalyst for open source tribe formation.'
          number={2}
          leftImgURL="/static/images/fortnite_item1.png" 
          rightImgURL="/static/images/fortnite_item1.png" />
        <ChooseYourSideItem 
          onClickHandler={onClickHandler}
          leftOpened={openedItems[3]?.left}
          rightOpened={openedItems[3]?.right}
          title='History'
          description='Divine Anarchy is the first attempt at an in game 
            governance NFT that will act as an experimental 
            catalyst for open source tribe formation.'
          number={3}
          leftImgURL="/static/images/fortnite_item1.png" 
          rightImgURL="/static/images/fortnite_item1.png" />
      </div>
    </div>
  )
}

export default ChooseYourSide
