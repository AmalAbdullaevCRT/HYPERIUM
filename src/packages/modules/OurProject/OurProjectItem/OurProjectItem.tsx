import { VFC } from 'react'

// import { useMediaQuery } from 'react-responsive'
import styles from './OurProjectItem.module.scss'

type SvgInHtml = HTMLElement & SVGElement;


interface OurProjectItemProps {
  title: string
  description: string
  logo: any
}

const OurProjectItem: VFC<OurProjectItemProps> = ({ title, description, logo }) => {
  // const i  sMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.item} >
      <div className={styles.item_logo}>
        {logo}
      </div>
      <div className={styles.item_title}>
         {title}
      </div>
      <div className={styles.item_description}>
          {description}
      </div>
    </div>
  )
}

export default OurProjectItem
