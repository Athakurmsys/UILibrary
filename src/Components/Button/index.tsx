/**
 * @Param Button Component
 */

import React, { FC, ReactNode } from 'react'
import './Button.css'

type Props = {
  children?: ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={className ? className : 'button'} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
