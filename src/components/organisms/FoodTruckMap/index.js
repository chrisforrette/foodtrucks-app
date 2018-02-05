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
import { changeBounds } from '../../../actions'

export class FoodTruckFinder extends Component {
  constructor () {
    super()
    this.googleMap = null
    this.onMapMounted = this.onMapMounted.bind(this)
    this.onBoundsChanged = debounce(this.onBoundsChanged.bind(this), 250)
    this.fitMapBounds = debounce(this.fitMapBounds.bind(this), 250, { leading: true, trailing: false})
  }

  render () {
    const {
      foodTrucks,
      mapZoom,
      mapCenter
    } = this.props

    return <GoogleMap
      ref={this.onMapMounted}
      options={{ mapTypeControl: false }}
      defaultZoom={mapZoom}
      defaultCenter={mapCenter}
      onBoundsChanged={this.onBoundsChanged}>
        { foodTrucks
          ? foodTrucks.map(foodTruck => <Marker
          key={foodTruck.id}
          defaultTitle={foodTruck.attributes.name}
          onClick={() => console.log(foodTruck.attributes.latitude, foodTruck.attributes.longitude)}
          position={{
            lat: foodTruck.attributes.latitude,
            lng: foodTruck.attributes.longitude,
          }}/>)
          : null
        }
      </GoogleMap>
  }

  componentDidMount () {
    this.fitMapBounds()
  }

  onMapMounted (ref) {
    console.log('onMapMounted')
    // Store the raw Google map instance
    this.googleMap = ref
    if (ref) {
      console.log('bounds', this.googleMap.getBounds())
    }
    this.fitMapBounds()
  }

  onBoundsChanged () {
    const { dispatch } = this.props
    dispatch(changeBounds({
      mapZoom: this.googleMap.getZoom(),
      mapCenter: this.googleMap.getCenter().toJSON(),
      mapBoundingBox: {
        ne: this.googleMap.getBounds().getNorthEast().toJSON(),
        se: this.googleMap.getBounds().getSouthWest().toJSON()
      }
    }))
  }

  onMarkerClick () {

  }

  fitMapBounds () {
    // Gather all the food truck points and fit the bounds of the map around them

    const { foodTrucks } = this.props

    // Gather all the food truck points and fit the bounds of the map around them

    if (this.googleMap && foodTrucks) {
      
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
  foodTrucks: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(
  ({ foodTrucks, mapZoom, mapCenter }) => ({ foodTrucks, mapZoom, mapCenter }),
  dispatch => ({ dispatch })
)(withScriptjs(withGoogleMap(FoodTruckFinder)))
