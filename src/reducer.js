import {
  FETCH_FOOD_TRUCKS,
  FETCH_FOOD_TRUCKS_SUCCESS,
  FETCH_FOOD_TRUCKS_ERROR,
  CHANGE_BOUNDING_BOX
} from './constants'

const initialState = {
  loading: false,
  foodTrucks: null,
  boundingBox: null,
  boundingBoxChanged: false
}

export default (state = initialState, action) => {
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
        boundingBoxChanged: false,
        foodTrucks: action.data.data
      }
    case FETCH_FOOD_TRUCKS_ERROR:
      return {
        ...state,
        loading: false
      }
    case CHANGE_BOUNDING_BOX:
      return {
        ...state,
        boundingBoxChanged: true
      }
    default:
      return state
  }
}