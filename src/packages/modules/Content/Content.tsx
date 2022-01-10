import { ReactNode, VFC } from 'react'

// import { useMediaQuery } from 'react-responsive'
import styles from './Content.module.scss'

interface ContentProps {
  children: ReactNode
}

const Content: VFC<ContentProps> = ({ children }) => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.content} >
        {children}
    </div>
  )
}

export default Content
