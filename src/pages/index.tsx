import Head from 'next/head'

import ChooseYourSide from '@modules/ChooseYourSide'
import CodeHyperium from '@modules/CodeHyperium'
import Content from '@modules/Content'
import FAQ from '@modules/FAQ'
import MainSection from '@modules/MainSection'
import MainSectionBlockV1 from '@modules/MainSectionBlockV1'
import OurProject from '@modules/OurProject'
import Team from '@modules/Team'
import UploadNow from '@modules/UploadNow'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>History</title>
      </Head>
      <MainSection 
        backgroundImgURL="/static/images/background-head.png"
        imgURL="/static/images/fortnite-skin1.png" 
        mainSectionBlock={<MainSectionBlockV1 />}
      >
      </MainSection>
      <Content>
        <ChooseYourSide />
        <CodeHyperium />
        <OurProject />
        <UploadNow />
        <Team />
        <FAQ />
      </Content>
    </>
  )
}
