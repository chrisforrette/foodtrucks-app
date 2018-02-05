import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  default as styled,
  ThemeProvider
} from 'styled-components'
import { fetchFoodTrucks } from '../../../actions'
import theme from '../../../styles/theme'
import Header from '../../molecules/Header'
import FoodTruckDetail from '../../molecules/FoodTruckDetail'
import FoodTruckFinder from '../../organisms/FoodTruckFinder'

const AppWrapper = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  height: 100vh;
  line-height: 1.5em;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export class AppComponent extends Component {
  componentWillReceiveProps (nextProps) {
    const {
      dispatch,
      foodTrucks,
      mapBoundingBox
    } = nextProps

    if (!foodTrucks && mapBoundingBox) {
      dispatch(fetchFoodTrucks())
    }
  }

  render () {
    const {
      dispatch,
      foodTrucks,
      detailViewOpen,
      detailFoodTruckId
    } = this.props

    return <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <FoodTruckFinder foodTrucks={foodTrucks} />
        <FoodTruckDetail
          dispatch={dispatch}
          foodTrucks={foodTrucks}
          detailViewOpen={detailViewOpen}
          detailFoodTruckId={detailFoodTruckId} />
      </AppWrapper>
    </ThemeProvider>
  }
}

AppComponent.propTypes = {
  foodTrucks: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(
  ({ foodTrucks, mapBoundingBox, detailViewOpen, detailFoodTruckId }) => ({ foodTrucks, mapBoundingBox, detailViewOpen, detailFoodTruckId }),
  dispatch => ({ dispatch })
)(AppComponent)