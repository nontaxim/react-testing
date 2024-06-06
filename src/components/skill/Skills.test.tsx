import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { logRoles } from '@testing-library/react'

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getAllByRole('listitem')
    expect(listElement).toHaveLength(skills.length)
  })

  test('renders a button', () => {
    render(<Skills skills={skills} />)
    const buttonElement = screen.getByRole('button', { name: 'Login' })
    expect(buttonElement).toBeInTheDocument()
  })

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    // queryBy... Returns the matching node for a query,
    // and return null if no elements match. This is useful for asserting an element that is not present.
    const buttonElement = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(buttonElement).not.toBeInTheDocument()
  })

  test('Start Learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    // wait for element appear or disappear in responese of event, user action, timeout or promise
    // "findby" return promise which results when an element is found
    // rejected if not found or exceed timeout (default 1000)
    // screen.debug()
    const startLearningButton = await screen.findByRole(
      'button',
      { name: 'Start learning' },
      { timeout: 2000 },
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})
