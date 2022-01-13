import { VFC } from 'react'

import clsx from 'clsx'

// import { useMediaQuery } from 'react-responsive'
import styles from './CoCreativeEthos.module.scss'


const CoCreativeEthos: VFC = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.content} >
        <div className={clsx(styles.content_text, styles.border)}>
          We invite you — the CODE HYPERIUM community members to 
          engage in our world building, narrative direction, 
          and character development and help us create something the 
          NFT space has never seen before. We the Ancestors 
          and Gamekeepers of CODE HYPERIUM provide the foundation 
          for our world, but you have the power to turn it into exactly what you want it to be.
        </div>
        <div className={styles.content_block}>
          <div className={styles.content_title}>
            Are you an artist? 
          </div>
          <div className={styles.content_text}>
            We will regularly be reaching out for ideas on how you would like 
            to see our storylines progress. Good ideas will 
            be featured and credited in official community events as well.
          </div>
          <div className={styles.content_title}>
            Are you a writer?
          </div>
          <div className={styles.content_text}>
            We will regularly be reaching out for ideas on how you would 
            like to see our storylines progress. 
            Good ideas will be featured and credited in official community events as well.
          </div>
          <div className={styles.content_title}>
            Are you a music producer?
          </div>
          <div className={clsx(styles.content_text, styles.border)}>
              Give us your best take at what the civilians 
              in Neo Kyoto will be listening to and if selected, 
              we will feature it and credit you as well.
          </div>
        </div>
        <div className={clsx(styles.content_text, styles.padding)}>
          There is no limit or restrictions to the kind of 
          contributions we will include into our story, other 
          than of course they must be of the highest quality 
          and in line with our canon - the collection of all 
          officially integrated material in the CODE HYPERIUM 
          world. If you&#39;re passionate about what you do, 
          co-create our world with us by simply being engaged 
          and participating in our Artists and Lore-Writers chats. 
          We will be looking for standout members.
        </div>
        <div className={clsx(styles.content_text, styles.padding)}>
          Beyond this, NFT 
          Holders will also help co-create our world through direct 
          voting inside official gameplay events. As the story of 
          CODE HYPERIUM unfolds, opportunities will arise for our 
          two main factions - The Descendants and Ventana - to make key 
          decisions that will impact the entire course of our saga. 
          If you hold an NFT in The Descendants or Ventana, you will 
          have access to these votes as well as chat rooms 
          reserved solely for strategizing and deliberation. Make sure you 
          get on our Whitelist now to reserve a spot on our minting date.
        </div>
    </div>
  )
}

export default CoCreativeEthos
