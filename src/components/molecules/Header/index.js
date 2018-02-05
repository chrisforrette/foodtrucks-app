import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Button from '../../atoms/Button'
import LoadingIndicator from '../../atoms/LoadingIndicator'

export const HEIGHT = '4em'

const HeaderElement = styled.header`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: row;
  height: ${HEIGHT};
  padding: 1em;
  text-align: center;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  line-height: 1em;
  margin: 0;
`

const LoadingIndicatorElement = styled(LoadingIndicator)`
  margin-right: 1em;
`

const Left = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex: 1;
  text-align: left;
`

const Right = Left.extend`
  justify-content: flex-end;
  text-align: right;
`

export const Header = ({ loading, mapBoundsChanged }) => <HeaderElement>
  <Left>
    <LoadingIndicatorElement fade isLoading={loading} />
    <Title>Food Truck Finder</Title>
  </Left>
  <Right><Button disabled={loading} hide={!mapBoundsChanged}>Search This Area</Button></Right>
</HeaderElement>


export default connect(
  ({ loading, mapBoundsChanged }) => ({ loading, mapBoundsChanged })
)(Header)
