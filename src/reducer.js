import {
  FETCH_FOOD_TRUCKS,
  FETCH_FOOD_TRUCKS_SUCCESS,
  FETCH_FOOD_TRUCKS_ERROR,
  CHANGE_BOUNDS
} from './constants'

export default function (state, action) {
  console.log('reducer', state)
  switch (action.type) {
    case FETCH_FOOD_TRUCKS:
      return {
        ...state,
        loading: true
      }
    case FETCH_FOOD_TRUCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        mapBoundsChanged: false,
        foodTrucks: action.data.data
      }
    case FETCH_FOOD_TRUCKS_ERROR:
      return {
        ...state,
        loading: false
      }
    case CHANGE_BOUNDS:
      return {
        ...state,
        ...action.data,
        mapBoundsChanged: true
      }
    default:
      return state
  }
}