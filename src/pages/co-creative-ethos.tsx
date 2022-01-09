import Head from 'next/head'

import MainSection from '@modules/MainSection'

import MainSectionBlockV2 from '@components/MainSectionBlockV2'

export default function CoCreativeEthos() {
  return (
    <>
      <Head>
        <title>Co-creative ethos</title>
      </Head>
      <MainSection 
        imgURL="/static/images/fortnite-skin2.png" 
        mainSectionBlock={<MainSectionBlockV2 />} 
        backgroundImgURL="/static/images/background-head.png"
      > 
      </MainSection>
    </>
  )
}
