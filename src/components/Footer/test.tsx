import { render, screen } from '@testing-library/react'

import Footer from '.'

describe('<Footer />', () => {
  it('should render footer default', () => {
    const { container } = render(<Footer />)

    expect(screen.getByText(/grupo boticário/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render footer with color', () => {
    render(<Footer color="#fff" />)

    expect(screen.getByText(/grupo boticário/i).parentElement).toHaveStyle({
      color: '#fff'
    })
  })

  it('should render footer without color', () => {
    render(<Footer />)

    expect(screen.getByText(/grupo boticário/i).parentElement).not.toHaveStyle({
      color: '#fff'
    })
  })
})
