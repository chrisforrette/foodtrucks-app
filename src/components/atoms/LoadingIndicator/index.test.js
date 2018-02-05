import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import LoadingIndicator from './index'

it('should render a loading indicator', () => {
  const rendered = shallow(<LoadingIndicator />)
  expect(toJson(rendered)).toMatchSnapshot()
})

it('should include a fade transition when fade is true', () => {
  const rendered = shallow(<LoadingIndicator fade />)
  expect(toJson(rendered)).toMatchSnapshot()
})

it('should be visible when loading is true', () => {
  const rendered = shallow(<LoadingIndicator loading />)
  expect(toJson(rendered)).toMatchSnapshot()
})

it('should accept a size', () => {
  const rendered = shallow(<LoadingIndicator size={32} />)
  expect(toJson(rendered)).toMatchSnapshot()
})

it('should accept a color', () => {
  const rendered = shallow(<LoadingIndicator color='#f60' />)
  expect(toJson(rendered)).toMatchSnapshot()
})
