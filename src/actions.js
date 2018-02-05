import qs from 'querystring'
import fetch from 'fetch-everywhere'
import { API_URL } from './config'
import {
  FETCH_FOOD_TRUCKS,
  FETCH_FOOD_TRUCKS_SUCCESS,
  FETCH_FOOD_TRUCKS_ERROR,
  CHANGE_BOUNDS
} from './constants'

const FOOD_TRUCKS_URL = `${API_URL}/food-trucks`

export const fetchFoodTrucks = () => (dispatch, getState) => {
  const { mapBoundingBox } = getState()
  let queryString = ''

  if (mapBoundingBox) {
    queryString = '?' + qs.stringify({
      neLatitude: mapBoundingBox.ne.lat,
      neLongitude: mapBoundingBox.ne.lng,
      swLatitude: mapBoundingBox.sw.lat,
      swLongitude: mapBoundingBox.sw.lng,
    })
  }

  dispatch({ type: FETCH_FOOD_TRUCKS })

  return fetch(`${FOOD_TRUCKS_URL}${queryString}`)
    .then(response => {
      if (response.status === 200) {
        return response
          .json()
          .then(resp => dispatch(fetchFoodTrucksSuccess(resp)))
      } else {
        return dispatch(fetchFoodTrucksError())
      }
    })
    .catch(err => dispatch(fetchFoodTrucksError(err)))
}

export const fetchFoodTrucksSuccess = response => ({
  type: FETCH_FOOD_TRUCKS_SUCCESS,
  data: response
})

export const fetchFoodTrucksError = error => ({
  type: FETCH_FOOD_TRUCKS_ERROR,
  data: error
})

export const changeBounds = data => ({
  type: CHANGE_BOUNDS,
  data
})
