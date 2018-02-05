import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import { ENV } from './config'
import reducer from './reducer'

const DEFAULT_CENTER = {
  // Downtown San Francisco-ish
  lat: 37.788365527147484,
  lng: -122.3984358543396
}

const initialState = {
  loading: false,
  foodTrucks: null,
  mapBoundingBox: null,
  mapZoom: 16,
  mapCenter: DEFAULT_CENTER,
  mapBoundsChanged: false,
  detailViewOpen: false,
  detailFoodTruckId: null
}

// Configure enhancers

const enhancers = []

// Dev tools

if (ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
)

const store = createStore(
  reducer,
  initialState,
  composedEnhancers
)

export default store
