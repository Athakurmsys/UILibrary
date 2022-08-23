/**
 * @Param Button Component
 */

import React, { FC, ReactNode } from 'react'
import './Button.css'

type Props = {
  children?: ReactNode
  onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

const Button: FC<Props> = ({ children, onChange, className }) => {
  return (
    <button className={className ? className : 'button'} onClick={onChange}>
      {children}
    </button>
  )
}

export default Button
