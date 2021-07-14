import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render logo default', () => {
    const { container } = render(<Logo id="logo-id" />)
    expect(container.querySelector('#logo-id')).toBeInTheDocument()
  })

  it('should render logo with width and height', () => {
    render(<Logo data-testid="logo-id" width="10px" height="10px" />)

    expect(screen.getByTestId('logo-id')).toHaveStyle({
      width: '10px',
      height: '10px'
    })
  })

  it('should render logo without width and height', () => {
    render(<Logo data-testid="logo-id" />)

    expect(screen.getByTestId('logo-id')).not.toHaveStyle({
      width: '10px',
      height: '10px'
    })
  })

  it('should render logo with src', () => {
    render(<Logo data-testid="logo-id" src="@/img/logo-grupo-boticario.png" />)

    expect(screen.getByTestId('logo-id').firstChild).toHaveAttribute(
      'src',
      '@/img/logo-grupo-boticario.png'
    )
  })

  it('should render logo without src', () => {
    render(<Logo data-testid="logo-id" />)

    expect(screen.getByTestId('logo-id').firstChild).not.toHaveAttribute(
      'src',
      '@/img/logo-grupo-boticario.png'
    )
  })
})
