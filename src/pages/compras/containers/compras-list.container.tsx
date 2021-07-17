import { useEffect, useState } from 'react'
import api from '../compras.services'

import ComprasListComponent, {
  Data
} from '../components/compras-list.component' //Data

function ComprasListContainer() {
  const [data, setData] = useState<Data>({} as Data)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.getAll()
        setData(response.data)
      } catch (err) {
        /* empty */
      }
    }

    getData()
  }, [])

  return <ComprasListComponent data={data} />
}

export default ComprasListContainer
