import 'match-media-mock'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DropdownAvatar from '.'

describe('<DropdownAvatar />', () => {
  it('should render dropdown default', async () => {
    const { container } = render(
      <DropdownAvatar username="Christian" data-testid={'dropdown-avatar-id'} />
    )

    const avatar = screen.getByTestId('dropdown-avatar-id')

    await waitFor(() => {
      const menu = screen.queryByTestId('menu-id')
      expect(menu).not.toBeInTheDocument()
    })
    expect(avatar).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render dropdown default with visible and call signOut', async () => {
    const signOut = jest.fn()
    const { container } = render(
      <DropdownAvatar
        username="Christian"
        data-testid={'dropdown-avatar-id'}
        signOut={signOut}
      />
    )

    const avatar = screen.getByTestId('dropdown-avatar-id')
    userEvent.hover(avatar)
    await waitFor(() => {
      const menu = screen.getByTestId('menu-id')
      expect(menu).toBeInTheDocument()
      const menuItem = screen.getByTestId('menu-item-id')
      userEvent.click(menuItem)
      expect(signOut).toHaveBeenCalledTimes(1)
    })
    expect(avatar).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
