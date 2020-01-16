import React from 'react'
import { Grommet } from 'grommet'
import { ThemeProvider } from 'styled-components'

import { TextInput } from '../lib'
import theme from '../lib/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grommet theme={theme}>
        <TextInput
          name="name"
          helperText="helper text"
          errorMessage="This is an error"
          value="initial value"
        />
      </Grommet>
    </ThemeProvider>
  )
}

export default App
