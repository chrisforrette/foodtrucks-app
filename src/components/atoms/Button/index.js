import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  line-height: 1em;
  outline: none;
  padding: 0.6rem 1em;
  text-decoration: none;
  transition: all 200ms ease-in;

  &:hover:enabled {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.blue};
  }

  &:disabled {
    opacity: 0.4;
  }

  &.hide {
    opacity: 0;
  }
`

export default ({ hide, children, ...props }) => <Button className={ hide ? 'hide' : '' } {...props}>{children}</Button>
