import 'match-media-mock'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import LoginFormComponent from './components/login-form.component'

jest.mock('~/components/FormItem', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock FormItem">{children}</div>
  }
}))

describe('<LoginForm />', () => {
  it('should render login form', async () => {
    const onSubmit = jest.fn()
    const { container } = render(<LoginFormComponent onSubmit={onSubmit} />)
    expect(container.querySelector('#form-login')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(2)
    const button = screen.getByRole('button', { name: /entrar/i })
    expect(button).toBeInTheDocument()
  })

  it('should render login form and be able to call onsubmit', async () => {
    const onSubmit = jest.fn()
    const { container } = render(<LoginFormComponent onSubmit={onSubmit} />)
    expect(container.querySelector('#form-login')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(2)
    const button = screen.getByRole('button', { name: /entrar/i })
    expect(button).toBeInTheDocument()
    const login = screen.getByPlaceholderText('Usuário')
    expect(login).toBeInTheDocument()
    const password = screen.getByPlaceholderText('Senha')
    expect(password).toBeInTheDocument()

    fireEvent.change(login, {
      target: {
        value: 'christian'
      }
    })

    fireEvent.change(password, {
      target: {
        value: '1234'
      }
    })

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })
  })

  it('should render login form and not be able to call onsubmit with user empty', async () => {
    const onSubmit = jest.fn()
    const { container } = render(<LoginFormComponent onSubmit={onSubmit} />)
    expect(container.querySelector('#form-login')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(2)
    const button = screen.getByRole('button', { name: /entrar/i })
    expect(button).toBeInTheDocument()
    const login = screen.getByPlaceholderText('Usuário')
    expect(login).toBeInTheDocument()
    const password = screen.getByPlaceholderText('Senha')
    expect(password).toBeInTheDocument()

    fireEvent.change(password, {
      target: {
        value: '1234'
      }
    })

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0)
    })
  })

  it('should render login form and not be able to call onsubmit with password empty', async () => {
    const onSubmit = jest.fn()
    const { container } = render(<LoginFormComponent onSubmit={onSubmit} />)
    expect(container.querySelector('#form-login')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock FormItem')).toHaveLength(2)
    const button = screen.getByRole('button', { name: /entrar/i })
    expect(button).toBeInTheDocument()
    const login = screen.getByPlaceholderText('Usuário')
    expect(login).toBeInTheDocument()
    const password = screen.getByPlaceholderText('Senha')
    expect(password).toBeInTheDocument()

    fireEvent.change(password, {
      target: {
        value: '1234'
      }
    })

    fireEvent.click(button)
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(0)
    })
  })
})
