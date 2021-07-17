import 'match-media-mock'
import { render } from '@testing-library/react'

import Form from '.'
import FormItem from '../FormItem'
import { Input } from 'antd'

describe('<Form />', () => {
  it('should render form default', () => {
    const { container } = render(
      <Form id="form-test">
        <FormItem>
          <Input />
        </FormItem>
      </Form>
    )

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
      }

      <body>
        <div>
          <form
            class="ant-form ant-form-vertical ant-form-large c0"
            flexdirection="row"
            id="form-test"
            justifycontent="center"
          >
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
                  >
                    <input
                      class="ant-input ant-input-lg"
                      type="text"
                      value=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </body>
    `)
  })
})
