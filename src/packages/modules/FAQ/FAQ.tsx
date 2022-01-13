import { useState, VFC } from 'react'

// import { useMediaQuery } from 'react-responsive'
import styles from './FAQ.module.scss'
import FAQItem from './FAQItem'


const FAQ: VFC = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div className={styles.FAQ}>
          <div className={styles.FAQ_title}>
              F.A.Q
          </div>
          <div className={styles.FAQ_list} >
            <div className={styles.FAQ_list_side}>
              <FAQItem title="Where can I mint CODE HYPERIUM NFT’s?" content="Here, on our website!"></FAQItem>
              <FAQItem title="Where can I mint CODE HYPERIUM NFT’s?" content="Here, on our website!"></FAQItem>
              <FAQItem title="Where can I mint CODE HYPERIUM NFT’s?" content="Here, on our website!"></FAQItem>
            </div>
            <div className={styles.FAQ_list_side}>
              <FAQItem title="Where can I mint CODE HYPERIUM NFT’s?" content="Here, on our website!"></FAQItem>
              <FAQItem title="Where can I mint CODE HYPERIUM NFT’s?" content="Here, on our website!"></FAQItem>
              <FAQItem title="Where can I mint CODE HYPERIUM NFT’s?" content="Here, on our website!"></FAQItem>
            </div>
          </div>
      </div>
  )
}

export default FAQ
