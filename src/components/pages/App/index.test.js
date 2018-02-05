import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './'

it('should match snapshot', () => {
  const rendered = mount(<App />)
  expect(toJson(rendered)).toMatchSnapshot()
})
