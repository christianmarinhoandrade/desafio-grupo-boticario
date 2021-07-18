import styled, { css } from 'styled-components'

import { Menu as MenuAntd } from 'antd'

export const Menu = styled(MenuAntd)`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.secondaryColor};
    border-bottom: 0px;

    .ant-dropdown-menu-item:hover,
    .ant-dropdown-menu-submenu-title:hover {
      background-color: ${theme.secondaryColor};
    }
  `}
`
