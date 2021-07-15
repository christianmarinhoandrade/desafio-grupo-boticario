import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import AuthContainer from './container/auth.container'

jest.mock('~/components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo"></div>
  }
}))
jest.mock('~/components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer"></div>
  }
}))

describe('<AuthContainer />', () => {
  it('should render auth container', () => {
    render(
      <AuthContainer>
        <div></div>
      </AuthContainer>
    )

    expect(screen.getByText('Grupo Boticário')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})
