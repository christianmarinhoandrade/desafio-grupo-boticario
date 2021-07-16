import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import CadastroRevendedorComponent from './components/cadastroRevendedor.component'

jest.mock('~/components/FormItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock FormItem">{children}</div>
  }
}))

describe('<LoginForm />', () => {
  it('should render login form', async () => {
    const onSubmit = jest.fn()
    render(<CadastroRevendedorComponent onSubmit={onSubmit} />)
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(4)
  })
})
