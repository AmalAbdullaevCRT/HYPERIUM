import { FC } from 'react'

import Head from 'next/head'

import Footer from '@modules/Footer'
import Header from '@modules/Header'
import Main from '@modules/Main'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  )
}
