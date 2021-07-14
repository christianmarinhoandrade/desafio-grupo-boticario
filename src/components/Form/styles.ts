import styled, { css } from 'styled-components'
import { Form as FormAntd } from 'antd'

import { FormProps } from './index'

export const Form = styled(FormAntd)<FormProps>`
  ${(props) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${props.justifycontent};
    flex-direction: ${props.flexdirection};
    gap: 10px;
    padding: 2px;

    .ant-form-item {
      margin-bottom: 0px;
    }
    .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
    .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
      padding-top: 4px;
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      margin-top: 3px;
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector,
    input.ant-input {
      border-radius: 10px;
      height: 40px;
    }
    .ant-input-affix-wrapper {
      border-radius: 10px;
      height: 50px;
    }
  `}
`
