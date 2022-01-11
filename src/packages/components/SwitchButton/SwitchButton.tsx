import { ChangeEvent, InputHTMLAttributes, VFC } from 'react'

import styles from './SwitchButton.module.scss'

export interface SwitchButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  checked: boolean
  handleChange:(event: ChangeEvent<HTMLInputElement>) => void
}

const SwitchButton: VFC<SwitchButtonProps> = ({
  handleChange,
  checked,
  ...props
}) => {
  return (
    <label className={styles.switch}>
      <input onChange={(e) => handleChange(e)} checked={checked} className={styles.switch_input} type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  )
}

export default SwitchButton
