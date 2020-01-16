import { action } from '@storybook/addon-actions'
import React from 'react'

import { Login } from '../..'

export default {
  title: 'Login',
  component: Login,
}
export const simple = () => <Login onSubmit={action('form submitted')} />
