import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import DropdownAvatar from '.'

describe('<DropdownAvatar />', () => {
  it('should render dropdown default', async () => {
    const { container } = render(
      <DropdownAvatar username="Christian" data-testid={'dropdown-id'} />
    )

    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
