import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import FormItem from '.'

describe('<FormItem />', () => {
  it('should render form item default', () => {
    const { container } = render(<FormItem />)

    expect(container.parentElement).toMatchInlineSnapshot(`
      <body>
        <div>
          <div
            class="ant-row ant-form-item "
          >
            <div
              class="ant-col ant-form-item-control"
            >
              <div
                class="ant-form-item-control-input"
              >
                <div
                  class="ant-form-item-control-input-content"
                />
              </div>
            </div>
          </div>
        </div>
      </body>
    `)
  })

  it('should render form item with width', () => {
    render(<FormItem width="10px" data-testid={'form-item'} />)

    expect(screen.getByTestId('form-item')).toHaveStyle({
      width: '10px'
    })
  })
  it('should render form item without width', () => {
    render(<FormItem data-testid={'form-item'} />)

    expect(screen.getByTestId('form-item')).not.toHaveStyle({
      width: '10px'
    })
  })
})
