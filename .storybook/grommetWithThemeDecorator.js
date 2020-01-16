import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SparkGeoBaseTheme, Grommet } from '../src/lib'

const GrommetWithThemeDecorator = storyFn => (
  <ThemeProvider theme={SparkGeoBaseTheme}>
    <Grommet>{storyFn()}</Grommet>
  </ThemeProvider>
)

export default GrommetWithThemeDecorator
