import { useState } from 'react'

import styles from './Counter.module.scss'
import { minus, plus } from './svg'

const Counter = () => {

  const [count, setCount] = useState(0)
  
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className={styles.counter}>
      <button onClick={() => increment()} className={styles.counter_button}>{plus}</button>
      <div className={styles.counter_count}>{count}</div>
      <button onClick={() => decrement()} className={styles.counter_button}>{minus}</button>
    </div>
  )
} 

export default Counter
