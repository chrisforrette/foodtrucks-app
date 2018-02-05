import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from './index'
import theme from '../../../styles/theme'

it('should match snapshot', () => {
  const rendered = mount(<Button
    theme={theme}
    hide={false}
    mapBoundsChanged={false}>Click Me</Button>
  )
  expect(toJson(rendered)).toMatchSnapshot()
})
