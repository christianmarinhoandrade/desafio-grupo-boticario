import { render, waitFor } from '@testing-library/react'

import DrawerMobile from '.'
import Menu from '~/components/Menu'
import mockItems from '~/components/Menu/mock'

describe('<DrawerMobile />', () => {
  const menu = mockItems
  it('should render drawer mobile default', async () => {
    const { container } = render(
      <DrawerMobile visible={true}>
        <Menu menu={menu} data-testid={'menu-id'} />
      </DrawerMobile>
    )

    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
