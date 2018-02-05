import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'
import { changeBoundingBox } from '../../../actions'

/**
 * Default center position of the map, indicated with `lat` and `lng` keys
 * @type {object}
 */
const DEFAULT_CENTER = {
  // San Francisco-ish
  lat: 37.7749,
  lng: -122.4194
}

export class FoodTruckFinder extends Component {
  constructor () {
    super()
    this.googleMap = null
    this.onMapMounted = this.onMapMounted.bind(this)
    this.onBoundsChanged = debounce(this.onBoundsChanged.bind(this), 250)
  }

  render () {
    const { foodTrucks } = this.props
    return <GoogleMap
      ref={this.onMapMounted}
      options={{ mapTypeControl: false }}
      defaultZoom={12}
      defaultCenter={DEFAULT_CENTER}
      onBoundsChanged={this.onBoundsChanged}>
        { foodTrucks.map(foodTruck => <Marker
          key={foodTruck.id}
          defaultTitle={foodTruck.attributes.name}
          onClick={() => console.log(foodTruck.attributes.latitude, foodTruck.attributes.longitude)}
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

  onBoundsChanged () {
    const { dispatch } = this.props
    dispatch(changeBoundingBox({
      ne: this.googleMap.getBounds().getNorthEast().toJSON(),
      se: this.googleMap.getBounds().getSouthWest().toJSON()
    }))
  }

  onMarkerClick () {

  }
}

FoodTruckFinder.propTypes = {
  foodTrucks: PropTypes.array
}

export default connect(
  ({ foodTrucks }) => ({ foodTrucks }),
  dispatch => ({ dispatch })
)(withScriptjs(withGoogleMap(FoodTruckFinder)))
