import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SparkgeoBaseTheme, Grommet } from '../src/lib'

const GrommetWithThemeDecorator = storyFn => (
  <ThemeProvider theme={SparkgeoBaseTheme}>
    <Grommet>{storyFn()}</Grommet>
  </ThemeProvider>
)

export default GrommetWithThemeDecorator
