import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

export const FoodTruckFinder = () => <GoogleMap
  defaultZoom={12}
  defaultCenter={{ lat: 37.7749, lng: -122.4194 }} />

export default withScriptjs(withGoogleMap(FoodTruckFinder))
