import { screen, render } from '@testing-library/react'
import { Application } from './application'
// import { log } from 'console'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    const pageHeading = screen.getByRole('heading', { level: 1 })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', { level: 2 })
    expect(sectionHeading).toBeInTheDocument()

    const paragraphElement = screen.getByText(/All fields are/)
    expect(paragraphElement).toBeInTheDocument()

    const paragraphElement2 = screen.getByText('All fields are', {
      exact: false,
    })
    expect(paragraphElement2).toBeInTheDocument()

    const paragraphElement3 = screen.getByText((content, element) => {
      return (
        element?.tagName.toLowerCase() === 'p' &&
        content.includes('All fields are')
      )
    })
    expect(paragraphElement3).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const imageElement = screen.getByAltText('a person with labtop')
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Mix')
    // const inputNameValue = nameElement4.getAttribute('value')
    // log('input value is: ', inputNameValue)

    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    // if label is wrapped around the checkbox input it's okay
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')

    expect(submitButtonElement).toBeInTheDocument()
    expect(submitButtonElement).toBeDisabled()
  })
})
