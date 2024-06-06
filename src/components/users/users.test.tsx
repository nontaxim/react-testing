import { render, screen } from '@testing-library/react'
import { Users } from './users'

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
})