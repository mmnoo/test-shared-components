import React from 'react'
import { action } from '@storybook/addon-actions'
import { TextInput } from '../..'

export default {
  title: 'TextInput',
  component: TextInput,
}
export const simple = () => (
  <TextInput
    name="name"
    label="Input Label"
    onChange={action('on-input-change')}
  />
)

export const initialValue = () => (
  <TextInput
    label="Input Label"
    name="name"
    value="initial value"
    onChange={action('on-input-change')}
  />
)

export const withError = () => (
  <TextInput
    label="Input Label"
    name="name"
    error="Oh no!"
    onChange={action('on-input-change')}
  />
)

export const withHelperText = () => (
  <TextInput
    label="Input Label"
    name="name"
    helperText="helper text"
    onChange={action('on-input-change')}
  />
)

export const placeholderConvertsToHelperText = () => (
  <TextInput
    label="Input Label"
    name="name"
    placeholder="helper text"
    onChange={action('on-input-change')}
  />
)

export const simplePassword = () => (
  <TextInput
    label="Password: "
    name="name"
    type="password"
    onChange={action('on-input-change')}
  />
)
