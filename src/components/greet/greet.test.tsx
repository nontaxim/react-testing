import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', () => {
    test('renders correctly', () => {
        // Arrange
        render(<Greet />)
        // Act
        const textElement = screen.getByText(/hello/i)
        // Assert
        expect(textElement).toBeInTheDocument()
    })
})

describe('when name is provided', () => {
    test('renders with a name', () => {
        // Arrange
        render(<Greet name='Mix' />)
        // Act
        const textElement = screen.getByText(/hello Mix/i)
        // Assert
        expect(textElement).toBeInTheDocument()
    })
})