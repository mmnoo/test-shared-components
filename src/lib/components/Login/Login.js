import React, { useState } from 'react'
import { Form, FormField, Button } from 'grommet'
import PropTypes from 'prop-types'

/**
 * A login component with basic input validation to check
 * that field values are present.
 */
function Login({ onSubmit }) {
  const [usernameError, setUsernameError] = useState()
  const [passwordError, setPasswordError] = useState()
  const validateInputs = (username, password, callback) => {
    setUsernameError()
    setPasswordError()
    if (!username && !password) {
      setUsernameError('User Name is required')
      setPasswordError('Password is required')
    } else if (!username) {
      setUsernameError('User Name is required')
    } else if (!password) {
      setPasswordError('Password is required')
    } else {
      callback()
    }
  }
  const handleOnSubmit = event => {
    const { username, password } = event.value

    validateInputs(username, password, () => {
      onSubmit(event)
    })
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <FormField
        id="username"
        name="username"
        label="User Name"
        htmlFor="username"
        error={usernameError}
      />
      <FormField
        id="password"
        name="password"
        label="Password"
        type="password"
        htmlFor="password"
        error={passwordError}
      />
      <Button type="submit" primary label="Log In" />
    </Form>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Login
