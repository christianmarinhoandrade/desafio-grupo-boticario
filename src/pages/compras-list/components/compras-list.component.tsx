import {
  Wrapper,
  HeaderWrapper,
  AccumulatedCashbackAmount,
  TextAccumulatedCashbackAmount,
  Value,
  Item,
  Title,
  Code,
  Status,
  ItemWrapper,
  ItemColumn,
  Header,
  Content
} from '../styles'
import { Empty, Typography } from 'antd'

import priceMask from '~/utils/price-mask'

type ComprasListProps = {
  data: Data
}
export type Data = {
  accumulatedCashbackAmount: number
  array: ArrayProps[]
}

export type ArrayProps = {
  id: number
  code: string
  status: 'Em validação' | 'Reprovado' | 'Aprovado'
  value: number
  date: string
  cashback: string
  valuecashback: number
  'data-testid'?: string
}

function ComprasListComponent({ data }: ComprasListProps) {
  const TitleAntd = Typography.Title
  const Text = Typography.Text
  return (
    <Wrapper>
      <HeaderWrapper>
        <TitleAntd level={4}>Lista de Compras</TitleAntd>
        <AccumulatedCashbackAmount>
          <TextAccumulatedCashbackAmount>
            Valor de cashback acumulado:
          </TextAccumulatedCashbackAmount>
          <Value>
            {data.accumulatedCashbackAmount &&
              priceMask(data.accumulatedCashbackAmount)}
          </Value>
        </AccumulatedCashbackAmount>
      </HeaderWrapper>
      <>
        {data?.array?.map(
          ({
            code,
            status,
            value,
            date,
            cashback,
            valuecashback,
            id,
            ...props
          }) => {
            return (
              <Item key={id} {...props}>
                <Title>
                  <Code>{code}</Code>
                  <Status
                    color={
                      status === 'Aprovado'
                        ? 'green'
                        : status === 'Reprovado'
                        ? 'red'
                        : ''
                    }
                  >
                    {status}
                  </Status>
                </Title>
                <ItemWrapper>
                  <ItemColumn>
                    <Header>Valor</Header>
                    <Content>{value && priceMask(value)}</Content>
                  </ItemColumn>
                  <ItemColumn>
                    <Header>Data</Header>
                    <Content>{date}</Content>
                  </ItemColumn>
                  <ItemColumn>
                    <Header>Cashback</Header>
                    <Content>{cashback}</Content>
                  </ItemColumn>
                  <ItemColumn>
                    <Header>Valor Cashback</Header>
                    <Content>
                      {valuecashback && priceMask(valuecashback)}
                    </Content>
                  </ItemColumn>
                </ItemWrapper>
              </Item>
            )
          }
        )}
      </>
      {data.array.length === 0 && (
        <Empty
          style={{ padding: '5px' }}
          description={<Text>Nenhum registro encontrado.</Text>}
        />
      )}
    </Wrapper>
  )
}

export default ComprasListComponent
