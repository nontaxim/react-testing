import { render, screen } from '../../test-utils'
import { MuiMode } from './mui-mode'

describe('MuiMode', () => {
  test('renders correctly', () => {
    render(<MuiMode />)
    const modeElement = screen.getByRole('heading')
    expect(modeElement).toHaveTextContent('dark mode')
  })
})
