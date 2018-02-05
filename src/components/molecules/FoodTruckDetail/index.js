import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { closeFoodTruckDetail } from '../../../actions'

const Wrapper = styled.section`
  bottom: 0;
  box-sizing: border-box;
  padding: 0 4em;
  position: absolute;
  transform: translateY(${({ open }) => open ? 0 : '100%' });
  transition: all 150ms ease-in-out;
  width: 100%;
`

const InnerWrapper = styled.div`
  background-color: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 1em;
  position: relative;
`

const CloseButton = styled.a`
  color: ${({ theme }) => theme.colors.darkGrey};
  cursor: pointer;
  font-size: 1.5em;
  line-height: 1em;
  position: absolute;
  right: 0.5em;
  text-decoration: none;
  top: 0.25em;
`

const Details = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 1em;
  max-width: 600px;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1rem;
  line-height: 1em;
  margin: 0;
`

const Label = styled.strong`
  font-family: ${({ theme }) => theme.fonts.heading};
`

const Detail = styled.p`
  margin: 1em 0;
`

export const FoodTruckDetail = ({
  dispatch,
  foodTrucks,
  detailViewOpen,
  detailFoodTruckId
}) => {
  let foodTruck

  if (foodTrucks && detailFoodTruckId) {
    foodTruck = foodTrucks.filter(foodTruck => foodTruck.id === detailFoodTruckId).pop()
  }
  
  const onCloseClick = e => {
    e.preventDefault()
    dispatch(closeFoodTruckDetail())
  }

  const details = []

  if (foodTruck) {
    details.push(<Title key='title'>{foodTruck.attributes.name}</Title>)

    if (foodTruck.attributes.food_items) {
      details.push(<Detail key='foodItems'>{foodTruck.attributes.food_items}</Detail>)
    }

    if (foodTruck.attributes.facility_type) {
      details.push(<Detail key='type'><Label>Type:</Label> {foodTruck.attributes.facility_type}</Detail>)
    }

    if (foodTruck.attributes.days_hours) {
      details.push(<Detail key='hours'><Label>Hours:</Label> {foodTruck.attributes.days_hours}</Detail>)
    }
  }

  return <Wrapper open={detailViewOpen}>
    <InnerWrapper>
      <CloseButton href='#' onClick={onCloseClick}>&times;</CloseButton>
      <Details>{details}</Details>
    </InnerWrapper>
  </Wrapper>
}

FoodTruckDetail.propTypes = {
  dispatch: PropTypes.func,
  foodTrucks: PropTypes.array,
  detailViewOpen: PropTypes.bool.isRequired,
  detailFoodTruckId: PropTypes.number
}

export default FoodTruckDetail
