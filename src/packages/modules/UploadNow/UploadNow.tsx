import { useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import clsx from 'clsx'

// import { useMediaQuery } from 'react-responsive'
import styles from './UploadNow.module.scss'

const UploadNow: VFC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [showMore, setShowMore] = useState(true)
  return (
    <div className={styles.uploadNow} >
        <div className={styles.uploadNow_title}>UPLOAD now</div>
        <div className={clsx(styles.uploadNow_description, showMore && styles.more)}>
          CODE HYPERIUM’s experimental gameplay places power in the hands of our NFT holders. 
          Vote collectively on the strategies that the Descendants and Ventana will take. 
          Choose political paradigms, ecological structures, trending fashions, and much more. 
          With each decision made, the canon unfolds, presenting richer questions to debate and explore. All inside CODE HYPERIUM.
        </div>
        {isMobile && <a className={styles.more_button} onClick={() => setShowMore(!showMore)}>More</a>}
        <div className={styles.carousel}></div>
    </div>
  )
}

export default UploadNow
