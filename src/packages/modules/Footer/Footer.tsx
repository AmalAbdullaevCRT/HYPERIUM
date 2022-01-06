import { VFC } from 'react'

import styles from './Footer.module.scss'

interface FooterProps {}

const Footer: VFC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
        FOOTER
    </footer>
  )
}

export default Footer
