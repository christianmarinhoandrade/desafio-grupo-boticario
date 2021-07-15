import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Menu from '.'
import mockItems from './mock'

describe('<Menu />', () => {
  const menu = mockItems

  it('should render menu default', async () => {
    const { container } = render(<Menu menu={menu} data-testid={'menu-id'} />)
    await waitFor(() => {
      expect(screen.getByTestId('menu-id')).toBeInTheDocument()
      expect(screen.queryByText('Sair')).not.toBeInTheDocument()
      expect(screen.getByTestId('menu-id')).toHaveClass('ant-menu-horizontal')
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it('should render menu with mode inline', async () => {
    render(<Menu menu={menu} data-testid={'menu-id'} mode="inline" />)
    await waitFor(() => {
      expect(screen.getByTestId('menu-id')).toBeInTheDocument()
      expect(screen.getByTestId('menu-id')).toHaveClass('ant-menu-inline')
    })
  })

  it('should render menu with mobile true', async () => {
    render(<Menu menu={menu} data-testid={'menu-id'} mobile={true} />)
    await waitFor(() => {
      expect(screen.getByTestId('menu-id')).toBeInTheDocument()
      expect(screen.getByText('Sair')).toBeInTheDocument()
    })
  })

  it('should render menu with a two items', async () => {
    render(<Menu menu={menu} data-testid={'menu-id'} mobile={true} />)
    await waitFor(() => {
      expect(screen.getAllByTestId('menu-item-id')).toHaveLength(2)
    })
  })

  it('should render menu to call the methods signOut and onClick if clicked', async () => {
    const onClick = jest.fn()
    const signOut = jest.fn()
    render(
      <Menu
        menu={menu}
        data-testid={'menu-id'}
        onClick={onClick}
        signOut={signOut}
        mobile={true}
      />
    )

    const menuItem = screen.getByText(menu[0].title)
    const menuItemExit = screen.getByText('Sair')

    userEvent.click(menuItemExit)
    userEvent.click(menuItem)
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(signOut).toHaveBeenCalledTimes(1)
    })
  })
})
