import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Header } from './index'
import theme from '../../../styles/theme'

it('should render', () => {
  const rendered = shallow(<Header
    theme={theme}
    dispatch={() => {}}
    loading={false}
    mapBoundsChanged={false} />)
  expect(toJson(rendered)).toMatchSnapshot()
})

it('should render a loading state', () => {
  const rendered = shallow(<Header
    theme={theme}
    dispatch={() => {}}
    loading={true}
    mapBoundsChanged={false} />)
  expect(toJson(rendered)).toMatchSnapshot()
})

it('should render visibly when map bounds are changed', () => {
  const rendered = shallow(<Header
    theme={theme}
    dispatch={() => {}}
    loading={false}
    mapBoundsChanged={true} />)
  expect(toJson(rendered)).toMatchSnapshot()
})
