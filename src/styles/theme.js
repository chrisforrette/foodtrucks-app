// Breakpoints

export const breakpoints = {
  small: '600px',
  medium: '900px',
  large: '1200px',
  xlarge: '1800px'
}

// Fonts

// const fontHelvetica = '"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif'
const fontHelveticaLight = '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif'
const fontHelveticaBold = '"HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue", Helvetica, Arial, sans-serif'

export const fonts = {
  heading: {
    primary: fontHelveticaBold
  },
  body: {
    primary: fontHelveticaLight
  }
}

// Colors

export const colors = {
  // Grey
  darkGrey: '#333',
  grey: '#999',
  lightGrey: '#eee'
}

export default {
  breakpoints,
  fonts,
  colors
}
