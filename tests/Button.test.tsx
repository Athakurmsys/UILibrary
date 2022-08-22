import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { Button } from '../src'
const props ={
  children: "Button",
  onChange : ()=>{},
  className:""   
}
describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Button {...props} />)
  })
})