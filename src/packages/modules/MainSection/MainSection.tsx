import { VFC } from 'react'

import styles from './MainSection.module.scss'

interface MainSectionProps {
  children: HTMLElement[]
}

const MainSection: VFC<MainSectionProps> = ({ children }) => {
  return (
    <div className={styles.main_section}>
        {children}
    </div>
  )
}

export default MainSection
