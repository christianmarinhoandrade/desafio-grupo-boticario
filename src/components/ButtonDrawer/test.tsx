import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ButtonDrawer from '.'

describe('<ButtonDrawer />', () => {
  it('should render button drawer default', () => {
    const { container } = render(<ButtonDrawer />)

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button drawer to call the method if clicked', async () => {
    const onClick = jest.fn()
    render(<ButtonDrawer onClick={onClick} />)

    const button = screen.getByRole('button')

    userEvent.click(button)
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })
})
