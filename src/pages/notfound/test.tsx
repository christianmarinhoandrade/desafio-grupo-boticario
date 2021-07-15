import 'match-media-mock'
import { render } from '@testing-library/react'

import NotFoundComponent from './components/notfound.component'

describe('<NotFound />', () => {
  it('should render not found', async () => {
    const { container } = render(<NotFoundComponent />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
