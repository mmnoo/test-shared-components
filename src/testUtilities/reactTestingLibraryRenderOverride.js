/* eslint-disable import/no-extraneous-dependencies */
import { Grommet } from 'grommet'
import { render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'

import { SparkgeoBaseTheme } from '../lib'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={SparkgeoBaseTheme}>
      <Grommet theme={SparkgeoBaseTheme}>{children}</Grommet>
    </ThemeProvider>
  )
}

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
}
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// explicitly export fireEvent to suppress eslint which doesnt seem to follow
// modules`export *` statements very far
export { fireEvent }

// override render method
export { customRender as render }
