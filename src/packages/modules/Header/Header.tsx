import { useContext, VFC } from 'react'

import Link from 'next/link'

import clsx from 'clsx'

import { MouseContext } from '@components/MouseContext'

// import Typography from '@components/Typography'
import styles from './Header.module.scss'
import { facebook,home, logo, mobileLogo,twitter } from './svg'

const Header: VFC = () => {
  const { cursorChangeHandler } = useContext(MouseContext)

  return (
    <header className={styles.header}>
      <input id="burger" type="checkbox" className={styles.header_hamburger_input} />
      <label className={styles.header_hamburger} htmlFor="burger">
        <div className={clsx(styles.top,styles.item)}></div>
        <div className={clsx(styles.meat,styles.item)}></div>
        <div className={clsx(styles.bottom,styles.item)}></div>
      </label>
      <a href="#" className={styles.logo}>
        { logo }
      </a>
      <a href="#" className={styles.mobileLogo}>
        { mobileLogo }
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
