import styled from 'styled-components'

import { Drawer as DrawerAntd } from 'antd'
import { Menu } from '../Menu/styles'

export const TitleContent = styled.div`
  display: flex;
  justify-content: center;
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
