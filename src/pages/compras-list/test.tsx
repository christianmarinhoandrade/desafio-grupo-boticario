import 'match-media-mock'
import { render, screen } from '@testing-library/react'

import ComprasListComponent from './components/compras-list.component'
import mockItems from './mock'

describe('<LoginForm />', () => {
  it('should render compras list', async () => {
    render(<ComprasListComponent data={mockItems} />)

    expect(screen.getByText('Lista de Compras')).toBeInTheDocument()
    expect(screen.getByText('Valor de cashback acumulado:')).toBeInTheDocument()
    expect(screen.getByText('R$ 7,00')).toBeInTheDocument()
    expect(screen.getAllByTestId('compras-list-id')).toHaveLength(3)
  })

  it('should render compras list empty', async () => {
    render(
      <ComprasListComponent
        data={{ accumulatedCashbackAmount: 0, array: [] }}
      />
    )

    expect(screen.getByText('Lista de Compras')).toBeInTheDocument()
    expect(screen.getByText('Valor de cashback acumulado:')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
    expect(screen.queryAllByTestId('compras-list-id')).toHaveLength(0)
    expect(screen.getByText('Nenhum registro encontrado.')).toBeInTheDocument()
  })
})
