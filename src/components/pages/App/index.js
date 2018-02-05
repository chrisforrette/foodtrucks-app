import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  default as styled,
  ThemeProvider
} from 'styled-components'
import { fetchFoodTrucks } from '../../../actions'
import theme from '../../../styles/theme'
import Header from '../../atoms/Header'
import FoodTruckFinder from '../../organisms/FoodTruckFinder'

const AppWrapper = styled.div`
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
  componentDidMount () {
    const {
      dispatch,
      foodTrucks,
      mapBoundingBox
    } = this.props

    if (!foodTrucks && mapBoundingBox) {
      dispatch(fetchFoodTrucks())
    }
  }

  render () {
    const { foodTrucks } = this.props

    return <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <FoodTruckFinder foodTrucks={foodTrucks} />
      </AppWrapper>
    </ThemeProvider>
  }
}

AppComponent.propTypes = {
  foodTrucks: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(
  ({ foodTrucks, mapBoundingBox }) => ({ foodTrucks, mapBoundingBox }),
  dispatch => ({ dispatch })
)(AppComponent)