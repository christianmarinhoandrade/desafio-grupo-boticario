import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render hello world', () => {
    const { container } = render(<Main />)

    expect(screen.getByText('Hello World')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
