import 'match-media-mock'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import CadastroRevendedorComponent from './components/cadastro-revendedor.component'

jest.mock('~/components/FormItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock FormItem">{children}</div>
  }
}))

describe('<LoginForm />', () => {
  it('should render cadastro revendedor form', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroRevendedorComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-revendedor')
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(4)
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    const nomeCompleto = screen.getByPlaceholderText('Nome Completo')
    expect(nomeCompleto).toBeInTheDocument()
    const cpf = screen.getByPlaceholderText('CPF')
    expect(cpf).toBeInTheDocument()
    const email = screen.getByPlaceholderText('E-mail')
    expect(email).toBeInTheDocument()
    const password = screen.getByPlaceholderText('Senha')
    expect(password).toBeInTheDocument()
  })

  it('should render cadastro revendedor form and be able to call onsubmit', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroRevendedorComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-revendedor')
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(4)
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    const nomeCompleto = screen.getByPlaceholderText('Nome Completo')
    expect(nomeCompleto).toBeInTheDocument()
    const cpf = screen.getByPlaceholderText('CPF')
    expect(cpf).toBeInTheDocument()
    const email = screen.getByPlaceholderText('E-mail')
    expect(email).toBeInTheDocument()
    const password = screen.getByPlaceholderText('Senha')
    expect(password).toBeInTheDocument()

    fireEvent.change(nomeCompleto, {
      target: {
        value: 'Christian Marinho de Andrade'
      }
    })

    fireEvent.change(cpf, {
      target: {
        value: '118.968.556-60'
      }
    })

    fireEvent.change(email, {
      target: {
        value: 'christian.marinho@teste.com'
      }
    })

    fireEvent.change(password, {
      target: {
        value: '123456789'
      }
    })

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it('should render cadastro revendedor form and not be able to call onsubmit with inputs empty', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroRevendedorComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-revendedor')
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(4)
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0)
    })
  })
})
