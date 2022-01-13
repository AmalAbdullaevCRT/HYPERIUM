import { useContext, useEffect, useState, VFC } from 'react'
import { useMediaQuery } from 'react-responsive'

import Link from 'next/link'
import { useRouter } from 'next/router'

import clsx from 'clsx'

import { MouseContext } from '@components/MouseContext'

// import Typography from '@components/Typography'
import styles from './Footer.module.scss'
import { facebook, logo, mobileLogo,twitter } from './svg'

const Footer: VFC = () => {
  const { cursorChangeHandler } = useContext(MouseContext)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setMenuIsOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])


  const handleCheck = (event) => {
    setMenuIsOpen(event.target.checked)
  }

  return (
    <footer className={clsx(styles.footer, styles[menuIsOpen? 'black': 'inherit'])}>
        <input id="burger" checked={menuIsOpen} type="checkbox" className={styles.footer_hamburger_input} onChange={handleCheck} />
        <label className={styles.footer_hamburger} htmlFor="burger">
          <div className={clsx(styles.top,styles.item)}></div>
          <div className={clsx(styles.meat,styles.item)}></div>
          <div className={clsx(styles.bottom,styles.item)}></div>
        </label>
        <Link href="/">
          <a className={styles.logo}>
            { isMobile ? mobileLogo : logo}
          </a>
        </Link>
        <div className={styles.footer_menu}>
          <Link href="/" passHref >
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.footer_menu_item}>
              {/* {home} */}
              Home
            </a>
          </Link>
          <Link href="/co-creative-ethos" passHref >
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.footer_menu_item}>
              co-creative ethos
            </a>
          </Link>
          <Link href="/" passHref >
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.footer_menu_item}>
              factions
            </a>
          </Link>
          <Link href="/" passHref>
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.footer_menu_item}>
                team
            </a>
          </Link>
          <Link href="/" passHref>
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.footer_menu_item}>
              roadmap
            </a>
          </Link>
          <Link href="/" passHref>
            <a
              onMouseMove={() => cursorChangeHandler('hovered')}
              onMouseLeave={() => cursorChangeHandler('')}
              className={styles.footer_menu_item}>
              f.a.q
            </a>
          </Link>
        </div>
        <div className={styles.footer_aside}>
          <a href="https://twitter.com/" className={styles.footer_aside_item}>{twitter}</a>
          <a href="https://www.facebook.com/" className={styles.footer_aside_item}>{facebook}</a>
        </div>
    </footer>
  )
}

export default Footer
