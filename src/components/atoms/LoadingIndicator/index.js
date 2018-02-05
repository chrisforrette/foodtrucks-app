import React from 'react'
import PropTypes from 'prop-types'
import {
  default as styled,
  keyframes
} from 'styled-components'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  animation: ${spin} 1s linear infinite;
  height: ${({ size }) => size}px;
  line-height: 0;
  opacity: ${({ isLoading }) => isLoading ? 1 : 0};
  ${({ fade }) => fade && 'transition: opacity 250ms ease;'}
  width: ${({ size }) => size}px;
`

const createSvgCircle = style => (
  <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4" style={style} />
)

const LoadingIndicator = props => {
  const { color } = props
  return <Wrapper {...props}>
    <svg height='100%' viewBox='0 0 32 32' width='100%'>
      {createSvgCircle({
        stroke: color,
        opacity: 0.25
      })}
      {createSvgCircle({
        stroke: color,
        strokeDasharray: 80,
        strokeDashoffset: 55
      })}
    </svg>
  </Wrapper>
}

LoadingIndicator.defaultProps = {
  color: '#fff',
  fade: false,
  isLoading: false,
  size: 16
}

LoadingIndicator.propTypes = {
  color: PropTypes.string,
  fade: PropTypes.bool,
  isLoading: PropTypes.bool,
  size: PropTypes.number
}

export default LoadingIndicator
