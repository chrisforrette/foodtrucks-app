import React from 'react'
import {
  default as styled,
  ThemeProvider
} from 'styled-components'
import theme from '../../../styles/theme'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.body.primary};
  font-size: 16px;
  height: 100vh;
  line-height: 1.5em;
  width: 100%;
`

export default () => <ThemeProvider theme={theme}>
  <AppWrapper>
    <header>
      <h1>Food Truck Finder</h1>
    </header>
  </AppWrapper>
</ThemeProvider>
