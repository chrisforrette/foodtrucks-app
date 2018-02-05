import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

export class FoodTruckFinder extends Component {
  constructor () {
    super()
    this.googleMap = null
  }

  render () {
    const { foodTrucks } = this.props
    return <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      ref={this.onMapMounted.bind(this)}>
        { foodTrucks.map(foodTruck => <Marker
          key={foodTruck.id}
          position={{
            lat: foodTruck.attributes.latitude,
            lng: foodTruck.attributes.longitude,
          }}/>)
        }
      </GoogleMap>
  }

  onMapMounted (ref) {
    // Store the raw Google map instance

    this.googleMap = ref

    // Gather all the food truck points and fit the bounds of the map around them

    if (this.googleMap) {
      const { foodTrucks } = this.props
      const bounds = new google.maps.LatLngBounds() // eslint-disable-line
      foodTrucks.forEach(foodTruck => {
        bounds.extend(
          new google.maps.LatLng(foodTruck.attributes.latitude, foodTruck.attributes.longitude) // eslint-disable-line
        )
      })
      this.googleMap.fitBounds(bounds)
    }
  }
}

FoodTruckFinder.propTypes = {
  foodTrucks: PropTypes.array
}

export default withScriptjs(withGoogleMap(FoodTruckFinder))
