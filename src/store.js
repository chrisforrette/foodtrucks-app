import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import { ENV } from './config'
import reducer from './reducer'

const initialState = {}

// Configure enhancers

const enhancers = [
  // persistState(
  //   ['foodTrucks'],
  //   { key: 'foodtrucks' }
  // )
]

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
