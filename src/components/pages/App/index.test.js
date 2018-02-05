import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { AppComponent } from './'

it('should match snapshot', () => {
  const rendered = shallow(<AppComponent
    dispatch={() => {}}
    foodTrucks={[]}
    mapBoundingBox={{}}
    detailViewOpen={false}
    detailFoodTruckId={123} />)
  expect(toJson(rendered)).toMatchSnapshot()
})
