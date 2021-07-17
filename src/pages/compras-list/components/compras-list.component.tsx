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

type ComprasListProps = {
  data: Data
}
export type Data = {
  accumulatedCashbackAmount: number
  array: ArrayProps[]
}

export type ArrayProps = {
  code: string
  status: 'Em validação' | 'Reprovado' | 'Aprovado'
  value: string
  date: string
  cashback: string
  valuecashback: number
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
          <Value>R${data.accumulatedCashbackAmount},00</Value>
        </AccumulatedCashbackAmount>
      </HeaderWrapper>
      <>
        {data.array?.map((item) => {
          return (
            <Item key={item.code}>
              <Title>
                <Code>{item.code}</Code>
                <Status
                  color={
                    item.status === 'Aprovado'
                      ? 'green'
                      : item.status === 'Reprovado'
                      ? 'red'
                      : ''
                  }
                >
                  {item.status}
                </Status>
              </Title>
              <ItemWrapper>
                <ItemColumn>
                  <Header>Valor</Header>
                  <Content>{item.value}</Content>
                </ItemColumn>
                <ItemColumn>
                  <Header>Data</Header>
                  <Content>{item.date}</Content>
                </ItemColumn>
                <ItemColumn>
                  <Header>Cashback</Header>
                  <Content>{item.cashback}</Content>
                </ItemColumn>
                <ItemColumn>
                  <Header>Valor Cashback</Header>
                  <Content>R${item.valuecashback}</Content>
                </ItemColumn>
              </ItemWrapper>
            </Item>
          )
        })}
      </>
      {data.array?.length === 0 && (
        <Empty
          style={{ padding: '5px' }}
          description={<Text>Nenhum registro encontrado.</Text>}
        />
      )}
    </Wrapper>
  )
}

export default ComprasListComponent
