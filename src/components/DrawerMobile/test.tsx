import { render, screen, waitFor } from '@testing-library/react'

import DrawerMobile from '.'
import Menu from '~/components/Menu'
import mockItems from '~/components/Menu/mock'

describe('<DrawerMobile />', () => {
  const menu = mockItems
  it('should render drawer mobile default', async () => {
    render(
      <DrawerMobile
        visible={false}
        username={'Christian'}
        data-testid="drawer-mobile-id"
      >
        <Menu menu={menu} data-testid={'menu-id'} />
      </DrawerMobile>
    )

    const drawerMobile = screen.queryByTestId('drawer-mobile-id')
    expect(drawerMobile).not.toBeInTheDocument()
    expect(screen.queryByText('Olá Christian')).not.toBeInTheDocument()

    await waitFor(() => {
      expect(screen.queryAllByTestId('menu-item-id')).toHaveLength(0)
    })
  })
  it('should render drawer mobile with visible true', async () => {
    render(
      <DrawerMobile
        visible={true}
        username={'Christian'}
        data-testid="drawer-mobile-id"
      >
        <Menu menu={menu} data-testid={'menu-id'} />
      </DrawerMobile>
    )

    const drawerMobile = screen.getByTestId('drawer-mobile-id')
    expect(drawerMobile).toBeInTheDocument()
    expect(screen.getByText('Olá Christian')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getAllByTestId('menu-item-id')).toHaveLength(2)
    })
  })
})
