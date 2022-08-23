import React, { FC } from 'react'
import './TextInput.css'

type TextInputProps = {
  type?: string
  value?: string | number | any
  placeholder?: string
  className?: string
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void
}

const TextInput: FC<TextInputProps> = ({ value, type, className, placeholder, onChange }: TextInputProps) => {
  return (
    <input
      className={className ? className : 'textInput'}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput
