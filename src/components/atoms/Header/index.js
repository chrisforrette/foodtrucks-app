import React from 'react'
import styled from 'styled-components'
import icon from '../../../images/food-truck-icon-white.svg'

export const HEIGHT = '4em'

const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  box-sizing: border-box;
  color: #fff;
  display: flex;
  height: ${HEIGHT};
  padding: 1em;
  text-align: center;
`

const Icon = styled.img`
  height: 1.75em;
  margin-right: 1em;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  line-height: 1em;
  margin: 0;
`

export default () => <Header>
  <Icon src={icon} alt='Food Truck Finder' />
  <Title>Food Truck Finder</Title>
</Header>
