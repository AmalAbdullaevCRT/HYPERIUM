import { useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import clsx from 'clsx'

import Button from '@components/Button'

import styles from './styles.module.scss'

interface ChooseYourSideItemProps {
  leftImgURL: string
  rightImgURL: string
  number?: number
  title?: string
  description?: string
}

const ChooseYourSideItem: VFC<ChooseYourSideItemProps> = ({ leftImgURL, rightImgURL, number, title, description }) => {
  const [hoveredLeft, setHoveredLeft] = useState(false)
  const [hoveredRight, setHoveredRight] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  const [rightOpen, setRightOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const onClickCall = (side: 'left' | 'right') => {
    setLeftOpen(side === 'left')
    setRightOpen(side === 'right')
    setHoveredLeft(false)
    setHoveredRight(false)
  }

  return (
    <div className={styles.item}>
      <div className={styles.item_title}>
        {number && <div className={styles.item_title_number}>{number}</div>}
        {title && <div className={styles.item_title_text}>{title}</div> }
      </div>
      {description && <div className={styles.item_description}>{description}</div>}
      <div className={styles.side_covers}>
        <div className={clsx(styles.side_cover_wrapper, rightOpen && styles.leftOpen)}   
            onClick={() => onClickCall('left')}          
            onMouseEnter={e => !leftOpen && !isMobile && setHoveredLeft(true)}
            onMouseLeave={e => !leftOpen && !isMobile && setHoveredLeft(false)}>
          <div className={clsx(
              styles.side_cover, 
              styles.side_cover_left, 
              (rightOpen || hoveredLeft) && styles.hover
            )} 
            style={{
              backgroundImage: `url(${leftImgURL})`
            }}>
          </div>
          {leftOpen || hoveredLeft && <Button
              size="small"
              backgroundColored={false}
              className={styles.button}
              border="full">
              This Story
            </Button>}
        </div>
        <div className={clsx(styles.side_cover_wrapper, leftOpen && styles.rightOpen)} 
            onClick={() => onClickCall('right')}
            onMouseEnter={e => !rightOpen && !isMobile && setHoveredRight(true)}
            onMouseLeave={e => !rightOpen && !isMobile && setHoveredRight(false)}>
          <div className={clsx(
              styles.side_cover, 
              styles.side_cover_right, 
              (leftOpen || hoveredRight) && styles.hover, 
            )}            
            style={{
                backgroundImage: `url(${rightImgURL})`
            }}>
          </div>
          {rightOpen || hoveredRight && <Button
              size="small"
              border="full"
              backgroundColored={false}
              className={styles.button}>
              This Story
            </Button>}
        </div>
      </div>
    </div>
  )
}

export default ChooseYourSideItem
