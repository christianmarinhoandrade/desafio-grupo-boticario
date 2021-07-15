import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { UsergroupAddOutlined } from '@ant-design/icons'
import Button from '.'

describe('<Button />', () => {
  it('should render button default', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      padding: '0 5px',
      'font-size': '15px'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button to call the method if clicked', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Button</Button>)

    const button = screen.getByRole('button')

    userEvent.click(button)
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  it('should render button with type', () => {
    render(<Button type="primary">Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveClass(
      'ant-btn-primary'
    )
  })

  it('should render button with width and height', () => {
    render(
      <Button width="100px" height="100px">
        Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      width: '100px',
      height: '100px'
    })
  })

  it('should render button with icon', () => {
    render(
      <Button icon={<UsergroupAddOutlined data-testid="icon" />}>Button</Button>
    )

    expect(screen.getByText(/button/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render button without icon', () => {
    render(<Button>Button</Button>)

    expect(screen.getByText(/button/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('icon')).not.toBeInTheDocument()
  })
})
