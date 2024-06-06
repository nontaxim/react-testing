import { render, screen } from '@testing-library/react'
import { Users } from './users'
import { server } from '../../mocks/node'
import { http, HttpResponse } from 'msw'

describe('Users', () => {
  test('should render the users', () => {
    render(<Users />)
    const textElements = screen.getByText('Users')
    expect(textElements).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const listItems = await screen.findAllByRole('listitem')
    expect(listItems).toHaveLength(4)
  })

  test('renders error', async () => {
    server.use(
      http.get('https://jsonplaceholder.typicode.com/users', () => {
        // ...and respond to them using this JSON response.
        return HttpResponse.json({ status: 500 })
      }),
    )
    render(<Users />)
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})
