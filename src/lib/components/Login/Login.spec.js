import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {
  render,
  fireEvent,
} from '../../../testUtilities/reactTestingLibraryRenderOverride'

import Login from './Login'

// this test exists because one day <Login /> can live in our reusable components directory

test('Login form contains correct UI Elements', () => {
  const { getByRole, getByLabelText } = render(<Login onSubmit={() => {}} />)

  expect(getByLabelText('User Name').type).toEqual('text')
  expect(getByLabelText('Password').type).toEqual('password')
  expect(getByRole('button')).toHaveTextContent('Log In')
})

test('Login form calls onSubmit prop function with the username and password values', () => {
  const mockOnSubmit = jest.fn()
  const { getByText, getByLabelText, queryByText } = render(
    <Login onSubmit={mockOnSubmit} />,
  )

  fireEvent.change(getByLabelText('User Name'), {
    target: { value: 'USERNAME' },
  })
  fireEvent.change(getByLabelText('Password'), {
    target: { value: 'PASSWORD' },
  })
  fireEvent.submit(getByText('Log In'))

  expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  expect(mockOnSubmit.mock.calls[0][0].value.username).toEqual('USERNAME')
  expect(mockOnSubmit.mock.calls[0][0].value.password).toEqual('PASSWORD')
  expect(queryByText('User Name is required')).toBeNull()
  expect(queryByText('Password is required')).toBeNull()
})

test('Login form displays an error when user name is missing', () => {
  const mockOnSubmit = jest.fn()
  const { getByText, getByLabelText, queryByText } = render(
    <Login onSubmit={mockOnSubmit} />,
  )

  fireEvent.change(getByLabelText('Password'), {
    target: { value: 'PASSWORD' },
  })
  fireEvent.submit(getByText('Log In'))
  expect(getByText('User Name is required'))
  expect(queryByText('Password is required')).toBeNull()
})
test('Login form displays error message when password is missing', () => {
  const mockOnSubmit = jest.fn()
  const { getByText, getByLabelText, queryByText } = render(
    <Login onSubmit={mockOnSubmit} />,
  )

  fireEvent.change(getByLabelText('User Name'), {
    target: { value: 'USERNAME' },
  })
  fireEvent.submit(getByText('Log In'))

  expect(getByText('Password is required'))
  expect(queryByText('User Name is required')).toBeNull()
})
test('Login form displays errors when both  username and password are missing', () => {
  const mockOnSubmit = jest.fn()
  const { getByText } = render(<Login onSubmit={mockOnSubmit} />)

  fireEvent.submit(getByText('Log In'))

  expect(getByText('Password is required'))
  expect(getByText('User Name is required'))
})
