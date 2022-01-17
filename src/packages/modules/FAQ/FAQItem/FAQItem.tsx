import { useState, VFC } from 'react'

import clsx from 'clsx'

// import { useMediaQuery } from 'react-responsive'
import styles from './FAQItem.module.scss'
import { arrow } from './svg'

interface FAQItemProps {
  title: string
  content: string
}

const FAQItem: VFC<FAQItemProps> = ({ title, content }) => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.item} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.item_title} >
        {title}
      <div className={clsx(styles.svg, isOpen && styles.active)}>{arrow}</div>
      </div>
      {isOpen && <div className={clsx(styles.item_content, isOpen ? styles.inAnimation : styles.outAnimation )} >
        {content}
      </div>}
    </div>
  )
}

export default FAQItem
