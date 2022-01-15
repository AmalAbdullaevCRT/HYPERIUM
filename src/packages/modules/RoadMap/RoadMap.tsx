import { VFC } from 'react'

// import { useMediaQuery } from 'react-responsive'
import styles from './RoadMap.module.scss'
import { one, three, two } from './svg'


const RoadMap: VFC = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <div className={styles.roadmap} >
        <div className={styles.roadmap_timeline}>
          <div className={styles.roadmap_timeline_wrapper}>
            <div className={styles.roadmap_timeline_dots_wrapper}>
                { one }
              <div className={styles.roadmap_timeline_dots}>
              <label>
                  <input type="radio" name="radio-button" />
                <span></span>
              </label>
              </div>
            </div>
            <div className={styles.roadmap_timeline_dots_wrapper}>
              { two }
              <div className={styles.roadmap_timeline_dots}>
                <label>
                    <input type="radio" name="radio-button" />
                  <span></span>
                </label>
              </div>
            </div>
            <div className={styles.roadmap_timeline_dots_wrapper}>
              { three }
              <div className={styles.roadmap_timeline_dots}>
                <label>
                    <input type="radio" name="radio-button" />
                  <span></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.roadmap_content}>
          <div className={styles.roadmap_content_item}>
          <div className={styles.roadmap_content_item_title}>
            ACHIEVEMENTS TO DATE
          </div>
          <div className={styles.roadmap_content_item_description}>
            First off, thank you for being a part of the community. 
            We are excited to see how much 
            organic growth and engagement the community here is experiencing. 
            Here are some community stats and updates:
          </div>
          <div className={styles.roadmap_content_item_list_title}>
            COMMUNITY UPDATES:
          </div>
          <ul className={styles.roadmap_content_item_list_content}>
            <li>Discord Members: 126,918+</li>
            <li>Discord Boosters: 1001+</li>
            <li>30 New Moderators Hired Full Time</li>
            <li>33,477 WL Raffle Signups</li>
          </ul>
          </div>
          <div className={styles.roadmap_content_item}>
          <div className={styles.roadmap_content_item_title}>
            ACHIEVEMENTS TO DATE
          </div>
          <div className={styles.roadmap_content_item_description}>
            First off, thank you for being a part of the community. 
            We are excited to see how much 
            organic growth and engagement the community here is experiencing. 
            Here are some community stats and updates:
          </div>
          <div className={styles.roadmap_content_item_list_title}>
            COMMUNITY UPDATES:
          </div>
          <ul className={styles.roadmap_content_item_list_content}>
            <li>Discord Members: 126,918+</li>
            <li>Discord Boosters: 1001+</li>
            <li>30 New Moderators Hired Full Time</li>
            <li>33,477 WL Raffle Signups</li>
          </ul>
          </div>
          <div className={styles.roadmap_content_item}>
          <div className={styles.roadmap_content_item_title}>
            ACHIEVEMENTS TO DATE
          </div>
          <div className={styles.roadmap_content_item_description}>
            First off, thank you for being a part of the community. 
            We are excited to see how much 
            organic growth and engagement the community here is experiencing. 
            Here are some community stats and updates:
          </div>
          <div className={styles.roadmap_content_item_list_title}>
            COMMUNITY UPDATES:
          </div>
          <ul className={styles.roadmap_content_item_list_content}>
            <li>Discord Members: 126,918+</li>
            <li>Discord Boosters: 1001+</li>
            <li>30 New Moderators Hired Full Time</li>
            <li>33,477 WL Raffle Signups</li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default RoadMap
