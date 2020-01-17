import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SparkgeoBaseTheme, Grommet } from '../src/lib'

const GrommetWithThemeDecorator = storyFn => (
  <ThemeProvider theme={SparkgeoBaseTheme}>
    <Grommet theme={SparkgeoBaseTheme}>{storyFn()}</Grommet>
  </ThemeProvider>
)

export default GrommetWithThemeDecorator
