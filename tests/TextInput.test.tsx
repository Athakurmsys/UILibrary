/* tslint:disable:no-empty */
import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { TextInput } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<TextInput placeholder='textInput' />)
  })
})
