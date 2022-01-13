import { useEffect, useState, VFC } from 'react'
import { Element,scroller } from 'react-scroll'

import ChooseYourSideItem from './ChooseYourSideItem'
import styles from './styles.module.scss'

const ChooseYourSide: VFC = () => {
  const [opened, setOpened] = useState([])
  const chooseYourSideHandler = () => {
    const newState = [...opened]
    newState.push(true)
    setOpened(newState)
  }

  useEffect(() => {
    scroller.scrollTo(`choose-your-side-${opened.length - 1}`, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }, [opened])


  return (
    <div className={styles.main}>
      <div className={styles.main_title}>
        CHOOSE YOUR SIDE
      </div>
      <div className={styles.main_history}>
        <Element onClick={() => chooseYourSideHandler()} >
          <ChooseYourSideItem
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>
        {opened[0] && <Element onClick={() => chooseYourSideHandler()}  
          name='choose-your-side-0' 
          className={opened[0] ? styles.inAnimation : styles.outAnimation}>
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={1}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>}
        {opened[1] && <Element onClick={() => chooseYourSideHandler()} 
          name='choose-your-side-1' 
          className={opened[1] ? styles.inAnimation : styles.outAnimation}>
        <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={2}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>}
        {opened[2] && <Element  
        name='choose-your-side-2'
        className={opened[2] ? styles.inAnimation : styles.outAnimation}>
          <ChooseYourSideItem
            title='History'
            description='Divine Anarchy is the first attempt at an in game 
              governance NFT that will act as an experimental 
              catalyst for open source tribe formation.'
            number={3}
            leftImgURL="/static/images/fortnite_item1.png" 
            rightImgURL="/static/images/fortnite_item1.png" />
        </Element>}
      </div>
    </div>
  )
}

export default ChooseYourSide
