import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FoodTruckDetail from './index'
import theme from '../../../styles/theme'

it('should render', () => {
  const rendered = shallow(<FoodTruckDetail
    theme={theme}
    dispatch={() => {}}
    foodTrucks={[]}
    detailViewOpen={false}
    detailFoodTruckId={null} />)
  expect(toJson(rendered)).toMatchSnapshot()
})
