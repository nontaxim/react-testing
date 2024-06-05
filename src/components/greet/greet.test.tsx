import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


test('Greet render correctly', () => {
    // Arrange
    render(<Greet />)
    // Act
    const textElement = screen.getByText(/hello/i)
    // Assert
    expect(textElement).toBeInTheDocument()
})

test('Greet render with a name', () => {
    // Arrange
    render(<Greet name='Mix'/>)
    // Act
    const textElement = screen.getByText(/hello Mix/i)
    // Assert
    expect(textElement).toBeInTheDocument()
})