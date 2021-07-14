import { BrowserRouter } from 'react-router-dom'

import Providers from '~/providers'
import { Provider as ProviderRedux } from 'react-redux'
import store from './store'

import GlobalStyle from '~/styles'

import Routes from '~/routes'

function App() {
  return (
    <ProviderRedux store={store}>
      <BrowserRouter>
        <Providers>
          <Routes />
          <GlobalStyle />
        </Providers>
      </BrowserRouter>
    </ProviderRedux>
  )
}

export default App
