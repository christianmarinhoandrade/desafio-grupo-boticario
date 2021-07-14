import 'match-media-mock'
import { render } from '@testing-library/react'

import Form from '.'
import FormItem from '../FormItem'
import { Input } from 'antd'

describe('<Form />', () => {
  it('should render form default', () => {
    const { container } = render(
      <Form>
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
        gap: 10px;
        padding: 2px;
      }

      .c0 .ant-form-item {
        margin-bottom: 0px;
      }

      .c0 .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
      .c0 .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
        padding-top: 4px;
      }

      .c0 .ant-select:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {
        margin-top: 3px;
      }

      .c0 .ant-select:not(.ant-select-customize-input) .ant-select-selector,
      .c0 input.ant-input {
        border-radius: 10px;
        height: 40px;
      }

      .c0 .ant-input-affix-wrapper {
        border-radius: 10px;
        height: 50px;
      }

      <body>
        <div>
          <form
            class="ant-form ant-form-vertical c0"
            flexdirection="row"
            id="form-filter"
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
                      class="ant-input"
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
