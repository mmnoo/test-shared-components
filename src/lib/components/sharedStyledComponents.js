/*
  ! Common Styled Components

  Place all styled-components that are used across more than one
  React component in this file as a source of truth. Try to base
  as many styled components as possible from generalized components
  from here.

*/

import styled from 'styled-components'

export const InputErrorText = styled('strong')`
  color: ${props => props.theme.color.red};
  font-size: small;
`
