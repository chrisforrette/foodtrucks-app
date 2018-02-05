import React, { Component } from 'react'
import FoodTruckMap from '../FoodTruckMap'

const GOOGLE_MAPS_API_KEY = 'AIzaSyBbQnyuluyLIqW1z-ATLoOSyNs-KxHRTeM'

export class FoodTruckFinder extends Component {
  render () {
    // const { foodTrucks } = this.props

    // if (!foodTrucks) {
    //   return null
    // }

    return <FoodTruckMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_MAPS_API_KEY}`}
      loadingElement={<div style={{ height: `100%`, backgroundColor: '#333' }} />}
      containerElement={<div style={{ flex: 1 }} />}
      mapElement={<div style={{ height: `100%` }} />} />
  }
}

export default FoodTruckFinder
