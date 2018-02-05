import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AppComponent } from './'

it('should match snapshot', () => {
  const rendered = mount(<AppComponent />)
  expect(toJson(rendered)).toMatchSnapshot()
})
