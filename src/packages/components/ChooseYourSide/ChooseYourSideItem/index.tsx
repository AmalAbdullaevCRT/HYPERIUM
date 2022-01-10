import { useState, VFC } from 'react'

import clsx from 'clsx'

import Button from '@components/Button'

import styles from './styles.module.scss'

interface ChooseYourSideItemProps {
  leftImgURL: string
  rightImgURL: string
  number: number
  title: string
  description: string
}

const ChooseYourSideItem: VFC<ChooseYourSideItemProps> = ({ leftImgURL, rightImgURL, number, title, description }) => {
  const [hoveredLeft, setHoveredLeft] = useState(false)
  const [hoveredRight, setHoveredRight] = useState(false)

  return (
    <div className={styles.item}>
      <div className={styles.item_title}>
        <div className={styles.item_title_number}>{number}</div>
        <div className={styles.item_title_text}>{title}</div>
      </div>
      <div className={styles.item_description}>{description}</div>
      <div className={styles.side_covers}>
        <div className={styles.side_cover_wrapper}             
            onMouseEnter={e => setHoveredLeft(true)}
            onMouseLeave={e => setHoveredLeft(false)}>
          <div className={clsx(styles.side_cover, hoveredLeft && styles.hover)} 
            style={{
              width: '100%',
              backgroundImage: `url(${leftImgURL})`
            }}>
          </div>
          {hoveredLeft && <Button
              size="small"
              backgroundColored={false}
              className={styles.button}
              border="full"
              onClick={() => {}}>
              This Story
            </Button>}
        </div>
        <div className={styles.side_cover_wrapper} 
            onMouseEnter={e => setHoveredRight(true)}
            onMouseLeave={e => setHoveredRight(false)}>
          <div className={clsx(styles.side_cover, hoveredRight && styles.hover)}            
            style={{
                width: '100%',
                backgroundImage: `url(${rightImgURL})`
            }}>
          </div>
          {hoveredRight && <Button
              size="small"
              border="full"
              backgroundColored={false}
              className={styles.button}
              onClick={() => {}}>
              This Story
            </Button>}
        </div>
      </div>
    </div>
  )
}

export default ChooseYourSideItem
