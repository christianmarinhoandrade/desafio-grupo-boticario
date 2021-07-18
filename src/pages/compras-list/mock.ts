import { ArrayProps } from './components/compras-list.component'
const array: ArrayProps[] = [
  {
    id: 1,
    code: 'dfe81127-b11a',
    status: 'Aprovado',
    value: 20,
    date: '13/04/1995',
    cashback: '10%',
    valuecashback: 2,
    'data-testid': 'compras-list-id'
  },
  {
    id: 2,
    code: 'dfe81127-b11a',
    status: 'Reprovado',
    value: 20,
    date: '13/04/1995',
    cashback: '10%',
    valuecashback: 2,
    'data-testid': 'compras-list-id'
  },
  {
    id: 3,
    code: 'dfe81127-b11a',
    status: 'Em validação',
    value: 30,
    date: '13/04/1995',
    cashback: '10%',
    valuecashback: 3,
    'data-testid': 'compras-list-id'
  }
]

export default {
  accumulatedCashbackAmount: 7,
  array
}
