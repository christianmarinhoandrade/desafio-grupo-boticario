import 'match-media-mock'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import CadastroComprasComponent from './components/cadastro-compras.component'

jest.mock('~/components/FormItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock FormItem">{children}</div>
  }
}))

describe('<LoginForm />', () => {
  it('should render cadastro compras form', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroComprasComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-compras')
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(3)
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    const codigo = screen.getByPlaceholderText('Código')
    expect(codigo).toBeInTheDocument()
    const valor = screen.getByPlaceholderText('R$0,00')
    expect(valor).toBeInTheDocument()
    const data = screen.getByPlaceholderText('Data')
    expect(data).toBeInTheDocument()
  })

  it('should render cadastro compras form and be able to call onsubmit', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroComprasComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-compras')
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(3)
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    const codigo = screen.getByPlaceholderText('Código')
    expect(codigo).toBeInTheDocument()
    const valor = screen.getByPlaceholderText('R$0,00')
    expect(valor).toBeInTheDocument()
    const data = screen.getByPlaceholderText('Data')
    expect(data).toBeInTheDocument()

    fireEvent.change(codigo, {
      target: {
        value: '1234'
      }
    })

    fireEvent.change(valor, {
      target: {
        value: '10'
      }
    })

    fireEvent.change(data, {
      target: {
        value: '11/11/1111'
      }
    })

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it('should render cadastro compras form and not be able to call onsubmit with inputs empty', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroComprasComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-compras')
    ).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(3)
    const button = screen.getByRole('button', { name: /confirmar/i })
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0)
    })
  })

  it('should render cadastro compras form and input value with mask', async () => {
    const onSubmit = jest.fn()
    const { container } = render(
      <CadastroComprasComponent onSubmit={onSubmit} />
    )
    expect(
      container.querySelector('#form-cadastro-compras')
    ).toBeInTheDocument()
    const valor = screen.getByPlaceholderText('R$0,00')
    expect(valor).toBeInTheDocument()
    fireEvent.change(valor, {
      target: {
        value: '10'
      }
    })
    expect(valor.getAttribute('value')).toBe('R$0,10')
  })
})
