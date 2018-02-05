import React from 'react'
import {
  default as styled,
  ThemeProvider
} from 'styled-components'
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

export default () => <ThemeProvider theme={theme}>
  <AppWrapper>
    <Header />
    <FoodTruckFinder />
  </AppWrapper>
</ThemeProvider>
