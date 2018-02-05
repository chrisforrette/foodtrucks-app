import {
  FETCH_FOOD_TRUCKS,
  FETCH_FOOD_TRUCKS_SUCCESS,
  FETCH_FOOD_TRUCKS_ERROR,
  CHANGE_BOUNDS,
  SHOW_FOOD_TRUCK_DETAIL,
  CLOSE_FOOD_TRUCK_DETAIL
} from './constants'

let boundsChanges = 0

export default function (state, action) {
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
      boundsChanges++
      return {
        ...state,
        ...action.data,
        // Don't trigger this on the first call, since it happens on load
        mapBoundsChanged: boundsChanges > 1
      }
    case SHOW_FOOD_TRUCK_DETAIL:
      return {
        ...state,
        detailViewOpen: true,
        detailFoodTruckId: action.id
      }
    case CLOSE_FOOD_TRUCK_DETAIL:
      return {
        ...state,
        detailViewOpen: false
      }
    default:
      return state
  }
}