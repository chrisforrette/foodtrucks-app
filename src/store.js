import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import { ENV } from './config'
import reducer from './reducer'

const DEFAULT_CENTER = {
  // San Francisco-ish
  lat: 37.7749,
  lng: -122.4194
}

const initialState = {
  loading: false,
  foodTrucks: null,
  mapBoundingBox: null,
  mapZoom: 12,
  mapCenter: DEFAULT_CENTER,
  mapBoundsChanged: false
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
