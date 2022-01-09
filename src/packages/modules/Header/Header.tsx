import { useContext, useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Link from 'next/link'

import clsx from 'clsx'

import { MouseContext } from '@components/MouseContext'

// import Typography from '@components/Typography'
import styles from './Header.module.scss'
import { facebook,home, logo, mobileLogo,twitter } from './svg'

const Header: VFC = () => {
  const { cursorChangeHandler } = useContext(MouseContext)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleCheck = (event) => {
    setMenuIsOpen(event.target.checked)
  }

  return (
    <header className={clsx(styles.header, styles[menuIsOpen? 'black': 'inherit'])}>
        <input id="burger" type="checkbox" className={styles.header_hamburger_input} onChange={handleCheck} />
        <label className={styles.header_hamburger} htmlFor="burger">
          <div className={clsx(styles.top,styles.item)}></div>
          <div className={clsx(styles.meat,styles.item)}></div>
          <div className={clsx(styles.bottom,styles.item)}></div>
        </label>
        <Link href="/">
          <a className={styles.logo}>
            { isMobile ? mobileLogo : logo}
          </a>
        </Link>
        <div className={styles.header_menu}>
          <Link href="/" passHref >
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.header_menu_item}>
              {home}
              Home
            </a>
          </Link>
          <Link href="/co-creative-ethos" passHref >
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.header_menu_item}>
              co-creative ethos
            </a>
          </Link>
          <Link href="#" passHref >
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.header_menu_item}>
              factions
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
