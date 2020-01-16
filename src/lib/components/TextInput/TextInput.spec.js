import React from 'react'
import { lorem } from 'faker'
import { Form } from 'grommet'
import '@testing-library/jest-dom/extend-expect'

import TextInput from './TextInput'
import {
  render,
  fireEvent,
} from '../../../testUtilities/reactTestingLibraryRenderOverride'

describe('The <TextInput /> component', () => {
  test('renders without crashing', () => {
    const label = lorem.sentence(5)
    const name = lorem.word()
    const { getByLabelText } = render(
      <Form>
        <TextInput name={name} label={label} />
      </Form>,
    )

    expect(getByLabelText(label))
  })

  test('The helperText attribute produces some helpful text and not placeholder text inside the input', () => {
    const label = lorem.sentence(5)
    const name = lorem.word()
    const placeholder = lorem.sentence(5)
    const { queryByPlaceholderText, getByLabelText } = render(
      <Form>
        <TextInput name={name} label={label} helperText={placeholder} />
      </Form>,
    )

    expect(queryByPlaceholderText(placeholder)).toBeNull()
    expect(getByLabelText(placeholder))
  })

  test('The error message appears when the error attribute is present', () => {
    const label = lorem.sentence(5)
    const name = lorem.word()
    const error = lorem.sentence(5)
    const { getByText, getByTestId } = render(
      <Form>
        <TextInput name={name} label={label} error={error} />
      </Form>,
    )

    expect(getByText(error))

    // the following assertion is to ensure error message is wired up with a
    // data-testid property and that the 'error message is hidden...' doesnt produce a false positive
    expect(getByTestId(`${name}-error-message`))
  })
  test('The error message is hidden when the errorMessage attribute is not present', () => {
    const label = lorem.sentence(5)
    const name = 'foo'
    const { queryByTestId } = render(<TextInput name={name} label={label} />)

    expect(queryByTestId(`${name}-error-message`)).toBeNull()
  })
  test('changing text input is testable', () => {
    const label = lorem.sentence(5)
    const name = lorem.word()
    const { getByLabelText } = render(
      <Form>
        <TextInput name={name} label={label} />
      </Form>,
    )

    fireEvent.change(getByLabelText(label), { target: { value: 'new text' } })

    expect(getByLabelText(label).value).toEqual('new text')
  })
  test('changing the input value calles onChange and still updates text', () => {
    const mockOnChange = jest.fn()
    const label = lorem.sentence(5)
    const name = lorem.word()
    const { getByLabelText } = render(
      <Form>
        <TextInput name={name} label={label} onChange={mockOnChange} />
      </Form>,
    )

    fireEvent.change(getByLabelText(label), { target: { value: 'new text' } })
    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(getByLabelText(label).value).toEqual('new text')
  })
})
