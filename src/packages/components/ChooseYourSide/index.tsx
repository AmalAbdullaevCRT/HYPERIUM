import { useState, VFC } from 'react'
import { Element,scroller } from 'react-scroll'

import ChooseYourSideItem from './ChooseYourSideItem'
import styles from './styles.module.scss'

const ChooseYourSide: VFC = () => {
  const [historyStyles, setHistoryStyles] = useState({
    maxHeight: 420
  })

  const chooseYourSideHandler = (idx: number) => {
    setHistoryStyles({
      maxHeight: historyStyles.maxHeight + 520
    })
    scroller.scrollTo(`choose-your-side-${idx}`, {
      duration: 1000,
      delay: 100,
      smooth: 'easeInOutQuart'
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
        <Element onClick={() => chooseYourSideHandler(1)}>
          <ChooseYourSideItem
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>
        <Element onClick={() => chooseYourSideHandler(2)} name='choose-your-side-1'>
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={1}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>
        <Element onClick={() => chooseYourSideHandler(3)} name='choose-your-side-2'>
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={2}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>
        <Element  name='choose-your-side-3'>
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={3}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>
      </div>
    </div>
  )
}

export default ChooseYourSide
