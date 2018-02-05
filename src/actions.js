import qs from 'querystring'
import fetch from 'fetch-everywhere'
import { API_URL } from './config'
import {
  FETCH_FOOD_TRUCKS,
  FETCH_FOOD_TRUCKS_SUCCESS,
  FETCH_FOOD_TRUCKS_ERROR,
  CHANGE_BOUNDING_BOX
} from './constants'

const FOOD_TRUCKS_URL = `${API_URL}/food-trucks`

export const fetchFoodTrucks = () => (dispatch, getState) => {
  const { boundingBox } = getState()
  let queryString = ''

  if (boundingBox) {
    const queryString = '?' + qs.stringify({
      neLatitude: boundingBox.ne.lat,
      neLongitude: boundingBox.ne.lng,
      seLatitude: boundingBox.se.lat,
      seLongitude: boundingBox.se.lng,
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

export const changeBoundingBox = box => ({
  type: CHANGE_BOUNDING_BOX,
  data: box
})
