import { ReactNode, VFC } from 'react'

// import { useMediaQuery } from 'react-responsive'
import styles from './Main.module.scss'

interface MainProps {
  children: ReactNode
}

const Main: VFC<MainProps> = ({ children }) => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.main} >
        {children}
    </div>
  )
}

export default Main
