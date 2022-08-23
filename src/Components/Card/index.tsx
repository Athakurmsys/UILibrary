import React, { FC, ReactNode } from 'react'
import './Card.css'

type CardProps = {
  children: ReactNode
  className?: string
}

const Card: FC<CardProps> = ({ children, className }: CardProps) => {
  return <div className={className ? className : 'myCard'}>{children}</div>
}

export default Card
