import styled from 'styled-components'

import { Drawer as DrawerAntd } from 'antd'
import { Menu } from '../Menu/styles'

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .message {
    font-weight: 600;
    font-size: 12px;
    margin-top: 8px;
  }
`
export const Drawer = styled(DrawerAntd)`
  @media (max-width: 767px) {
    ${Menu} {
      background-color: #fff;
      .ant-menu-item-selected {
        background-color: #fff;
      }
      &:hover {
        background-color: #fff;
      }
    }
  }
`
