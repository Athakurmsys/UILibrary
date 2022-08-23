import React, { FC, ReactNode } from 'react'
import './Typography.css'

type DefaultProps = {
  varient?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' // these should not be marked as optional
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

type TypographyProps = DefaultProps & {
  children?: ReactNode
  className?: string
}

const renderComponent = ({ varient = 'h3', children, className, component }: TypographyProps) => {
  switch (component) {
    case 'h1':
      return <h1 className={varient ? varient : className}>{children}</h1>
    case 'h2':
      return <h2 className={varient ? varient : className}>{children}</h2>
    case 'h3':
      return <h3 className={varient ? varient : className}>{children}</h3>
    case 'h4':
      return <h4 className={varient ? varient : className}>{children}</h4>
    case 'h5':
      return <h5 className={varient ? varient : className}>{children}</h5>
    case 'h6':
      return <h6 className={varient ? varient : className}>{children}</h6>

    default:
      return <span className={varient ? varient : className}>{children}</span>
  }
}

const Typography: FC<TypographyProps> = ({ varient = 'h3', children, className, component }: TypographyProps) => {
  return <>{renderComponent({ varient, children, className, component })}</>
}

export default Typography
