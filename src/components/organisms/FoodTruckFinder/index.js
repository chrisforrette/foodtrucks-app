import React, { Component } from 'react'
// import styled from 'styled-components'
import fetch from 'fetch-everywhere'
import { API_URL } from '../../../config'
import LoadingIndicator from '../../atoms/LoadingIndicator'
import FoodTruckMap from '../FoodTruckMap'

const GOOGLE_MAPS_API_KEY = 'AIzaSyBbQnyuluyLIqW1z-ATLoOSyNs-KxHRTeM'

class FoodTruckFinder extends Component {
  constructor () {
    super()
    this.state = {
      foodTrucks: []
    }
  }

  componentDidMount () {
    this
      .fetchFoodTrucks()
      .then(response => this.setState({ foodTrucks: response.data }))
  }

  render () {
    return <FoodTruckMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${GOOGLE_MAPS_API_KEY}`}
      loadingElement={<LoadingIndicator />}
      containerElement={<div style={{ flex: 1 }} />}
      mapElement={<div style={{ height: `100%` }} />}
      foodTrucks={this.state.foodTrucks} />
  }

  fetchFoodTrucks () {
    const url = `${API_URL}/food-trucks`
    return fetch(url)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        } else {
          // @todo Error reponse
        }
      })
  }
}

export default FoodTruckFinder
