import { useContext, VFC } from 'react'

import Link from 'next/link'

import { MouseContext } from '@components/MouseContext'

// import Typography from '@components/Typography'
import styles from './Header.module.scss'
import { facebook,home, logo, twitter } from './svg'

const Header: VFC = () => {
  const { cursorChangeHandler } = useContext(MouseContext)

  return (
    <header className={styles.header}>
      <a href="#" className={styles.header_logo}>
        { logo }
      </a>
      <div className={styles.header_menu}>
        <Link href="#" passHref >
          <a
            onMouseMove={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
            className={styles.header_menu_item}>
            {home}
            Home
          </a>
        </Link>
        <Link href="#" passHref >
          <a
            onMouseMove={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
            className={styles.header_menu_item}>
            co-creative ethos
          </a>
        </Link>
        <Link href="#" passHref>
          <a
            onMouseMove={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
            className={styles.header_menu_item}>
              team
          </a>
        </Link>
        <Link href="#" passHref>
          <a
            onMouseMove={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
            className={styles.header_menu_item}>
            roadmap
          </a>
        </Link>
        <Link href="#" passHref>
          <a
            onMouseMove={() => cursorChangeHandler('hovered')}
            onMouseLeave={() => cursorChangeHandler('')}
            className={styles.header_menu_item}>
            f.a.q
          </a>
        </Link>
      </div>
      <div className={styles.header_aside}>
        <a href="#" className={styles.header_aside_item}>{twitter}</a>
        <a href="#" className={styles.header_aside_item}>{facebook}</a>
      </div>
    </header>
  )
}

export default Header
