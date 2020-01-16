import { PropTypes } from 'prop-types'
import { TextInput as GrommetTextInput } from 'grommet'
import React from 'react'
import { InputErrorText } from '../sharedStyledComponents'

const TextInput = props => {
  const { placeholder, helperText, name, label, error, onChange } = props
  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = React.useState(props.value)
  const overriddenProps = {
    ...props,
    placeholder: undefined,
    onChange: undefined,
    value: undefined,
  }
  const accessibleHelperText = helperText || placeholder
  const handleOnChange = event => {
    setValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <GrommetTextInput
        {...overriddenProps}
        id={name}
        value={value}
        onChange={handleOnChange}
      />
      {accessibleHelperText && (
        <label htmlFor={name}>{accessibleHelperText}</label>
      )}
      {error && (
        <InputErrorText data-testid={`${name}-error-message`}>
          {error}
        </InputErrorText>
      )}
    </>
  )
}

TextInput.propTypes = {
  error: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
}

TextInput.defaultProps = {
  error: undefined,
  helperText: undefined,
  onChange: undefined,
  placeholder: undefined,
  value: '',
}

export default TextInput
