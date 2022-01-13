import Head from 'next/head'

import CoCreativeEthos from '@modules/CoCreativeEthos'
import Content from '@modules/Content'
import MainSection from '@modules/MainSection'
import MainSectionBlockV2 from '@modules/MainSectionBlockV2'

export default function CoCreativeEthosPage() {
  return (
    <>
      <Head>
        <title>Co-creative ethos</title>
      </Head>
      <MainSection 
        imgURL="/static/images/fortnite-skin2.png" 
        mainSectionBlock={<MainSectionBlockV2 />} 
        backgroundImgURL="/static/images/background-head2.png"
      > 
      </MainSection>
      <Content>
        <CoCreativeEthos />
      </Content>
    </>
  )
}
