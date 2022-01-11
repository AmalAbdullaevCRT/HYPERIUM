import Head from 'next/head'

import CodeHyperium from '@modules/CodeHyperium'
import Content from '@modules/Content'
import MainSection from '@modules/MainSection'

import ChooseYourSide from '@components/ChooseYourSide'
import MainSectionBlockV1 from '@components/MainSectionBlockV1'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>History</title>
      </Head>
      <MainSection 
        backgroundImgURL="/static/images/background-head2.png"
        imgURL="/static/images/fortnite-skin1.png" 
        mainSectionBlock={<MainSectionBlockV1 />}
      >
      </MainSection>
      <Content>
        <ChooseYourSide />
        <CodeHyperium />
      </Content>
    </>
  )
}
