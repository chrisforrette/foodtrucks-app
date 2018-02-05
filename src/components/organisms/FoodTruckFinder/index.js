import React, { Component } from 'react'
import styled from 'styled-components'
import LoadingIndicator from '../../atoms/LoadingIndicator'
import FoodTruckMap from '../FoodTruckMap'

const GOOGLE_MAPS_API_KEY = 'AIzaSyBbQnyuluyLIqW1z-ATLoOSyNs-KxHRTeM'

class FoodTruckFinder extends Component {
  render () {
    return <FoodTruckMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_MAPS_API_KEY}`}
      loadingElement={<LoadingIndicator />}
      containerElement={<div style={{ flex: 1 }} />}
      mapElement={<div style={{ height: `100%` }} />} />
  }
}

export default FoodTruckFinder
