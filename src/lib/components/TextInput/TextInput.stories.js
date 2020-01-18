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

export const withHelperTextAndError = () => (
  <TextInput
    label="Input Label"
    name="name"
    helperText="helper text"
    error="Oh no!"
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
// This is a workaround to add per-story comments to the Docs tab.
// Something more elegant may be coming down the pipe soon: https://github.com/storybookjs/storybook/issues/8527
simplePassword.story = {
  parameters: {
    docs: {
      storyDescription: `
        If we want to create a hide/show password, its probably best to break 
        that out into its own component
      `,
    },
  },
}

export const usingGrommetPropsNotExplicitlyListedHere = () => {
  const [value, setValue] = React.useState('')

  const onChange = event => setValue(event.target.value)

  const onSelect = event => setValue(event.suggestion)

  const suggestions = ['suggestion 1', 'suggestion 2', 'etc.']

  return (
    <TextInput
      value={value}
      onChange={onChange}
      onSelect={onSelect}
      suggestions={suggestions}
      size="xsmall"
    />
  )
}

usingGrommetPropsNotExplicitlyListedHere.story = {
  parameters: {
    docs: {
      storyDescription: `Uses 'suggestions', 'onSelect', and 'size' parameters from Grommet TextInput`,
    },
  },
}
