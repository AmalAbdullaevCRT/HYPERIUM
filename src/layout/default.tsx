import { FC } from 'react'

import Head from 'next/head'

import Header from '@modules/Header'
import MainSection from '@modules/MainSection'

import MainSectionBlockV1 from '@components/MainSectionBlockV1'

export const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MainSection imgURL="/static/images/fortnite-skin1.png" mainSectionBlock={<MainSectionBlockV1 />}>
        <Header />
      </MainSection>
      {children}
      {/* <Footer /> */}
    </>
  )
}
