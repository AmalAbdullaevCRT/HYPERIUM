import Head from 'next/head'

import MainSection from '@modules/MainSection'

import MainSectionBlockV1 from '@components/MainSectionBlockV1'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <MainSection imgURL="/static/images/fortnite-skin1.png" mainSectionBlock={<MainSectionBlockV1 />}>
      </MainSection>
    </>
  )
}
