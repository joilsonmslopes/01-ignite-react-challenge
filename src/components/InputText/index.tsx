import { InputHTMLAttributes } from 'react'
import styles from './style.module.css'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  label: string
  name: string
}

export const InputText = ({ type, name, label, ...rest }: InputTextProps) => {
  return (
    <div className={styles.inputWrapper}>
      <input type={type} id={name} {...rest} />
      <label htmlFor={name} tabIndex={0}>
        {label}
      </label>
    </div>
  )
}
