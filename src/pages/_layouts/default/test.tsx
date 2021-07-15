import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import DefaultContainer from './container/default.container'

jest.mock('~/components/DrawerMobile', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock DrawerMobile">{children}</div>
  }
}))
jest.mock('~/components/Header', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Header">{children}</div>
  }
}))
jest.mock('~/components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Logo"></div>
  }
}))
jest.mock('~/components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu"></div>
  }
}))
jest.mock('~/components/ButtonDrawer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock ButtonDrawer"></div>
  }
}))
jest.mock('~/components/DropdownAvatar', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock DropdownAvatar"></div>
  }
}))
jest.mock('~/components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer"></div>
  }
}))

describe('<DefaultContainer />', () => {
  it('should render default container in mode mobile', () => {
    render(
      <DefaultContainer>
        <div></div>
      </DefaultContainer>
    )

    expect(screen.getByTestId('Mock DrawerMobile')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ButtonDrawer')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(screen.queryByText('Cadastro Compras')).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('should render default container in mode desktop', () => {
    render(
      <DefaultContainer isDesktop={true}>
        <div></div>
      </DefaultContainer>
    )
    expect(screen.getByTestId('Mock DrawerMobile')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Menu')).toHaveLength(2)
    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock DropdownAvatar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(screen.queryByText('Cadastro Compras')).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('should render default container with title and routeback', () => {
    render(
      <DefaultContainer title="Cadastro Compras" routeBack="/compra">
        <div></div>
      </DefaultContainer>
    )
    expect(screen.getByText('Cadastro Compras')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveClass('anticon-arrow-left')
  })
})
