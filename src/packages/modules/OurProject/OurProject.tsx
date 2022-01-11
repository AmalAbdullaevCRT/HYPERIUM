import { VFC } from 'react'

// import { useMediaQuery } from 'react-responsive'
import styles from './OurProject.module.scss'
import OurProjectItem from './OurProjectItem'
import { people, star, time } from './svg'

const OurProject: VFC = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.our_project} >
      <div className={styles.our_project_title}>
        Our project
      </div>
      <div className={styles.our_project_content}>
        <OurProjectItem 
          logo={star}
          title="NAVIGATE A WORLD IN CHAOS" 
          description="Holders vote on key world-building and 
          story elements to further the co-creative game." />
        <OurProjectItem 
          logo={people}
          title="COLLABORATIVE GAMEPLAY" 
          description="Join up with your fellow faction members 
          to organize, strategize, and execute your side's 
          future inside CODE HYPERIUM." />
        <OurProjectItem 
          logo={time}
          title="EARLY ACCESS" 
          description="Holders get premium placement 
          for all Discord giveaways, raffles, and events" />
      </div>
    </div>
  )
}

export default OurProject
