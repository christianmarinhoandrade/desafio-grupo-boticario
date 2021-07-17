import styled, { css } from 'styled-components'
// import { lighten } from 'polished'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AccumulatedCashbackAmount = styled.div`
  display: flex;
  gap: 5px;
  font-size: 20px;
  font-weight: 600;
`

export const TextAccumulatedCashbackAmount = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

export const Value = styled.div`
  color: green;
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  border-left: 1px solid #e6e6e6;
  border-top: 1px solid #e6e6e6;
  box-shadow: 1px 1px 1px #4d4d4d;
  padding: 18px;
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 4px;
  border-bottom: 1px solid #e6e6e6;
`

export const Code = styled.div``

export const Status = styled.div`
  ${({ color }) => css`
    color: ${color};
  `}
`

export const ItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  margin-right: 20px;
  @media (max-width: 767px) {
    flex: 1;
  }
`
export const Header = styled.div`
  font-size: 15px;
  font-weight: 600;
`
export const Content = styled.div`
  font-weight: 400;
`
