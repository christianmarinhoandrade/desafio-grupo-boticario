import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render header default', () => {
    const { container } = render(
      <Header data-testid={'header-id'}>
        <div />
      </Header>
    )
    expect(screen.getByTestId('header-id')).toBeInTheDocument()
    expect(screen.getByTestId('header-id')).toHaveStyle({
      'justify-content': 'space-around'
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render header with justify-content', () => {
    render(
      <Header data-testid="header-id" justifycontent={'flex-end'}>
        <div />
      </Header>
    )
    expect(screen.getByTestId('header-id')).toHaveStyle({
      'justify-content': 'flex-end'
    })
  })
})
