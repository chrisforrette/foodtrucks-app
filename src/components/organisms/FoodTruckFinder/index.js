import React, { Component } from 'react'
import fetch from 'fetch-everywhere'
import { API_URL } from '../../../config'
import LoadingIndicator from '../../atoms/LoadingIndicator'
import FoodTruckMap from '../FoodTruckMap'

const GOOGLE_MAPS_API_KEY = 'AIzaSyBbQnyuluyLIqW1z-ATLoOSyNs-KxHRTeM'

export class FoodTruckFinder extends Component {
  render () {
    const { foodTrucks } = this.props

    if (!foodTrucks) {
      return null
    }

    return <FoodTruckMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_MAPS_API_KEY}`}
      loadingElement={<LoadingIndicator />}
      containerElement={<div style={{ flex: 1 }} />}
      mapElement={<div style={{ height: `100%` }} />} />
  }
}

export default FoodTruckFinder
