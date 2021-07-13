import { BrowserRouter } from 'react-router-dom'

import Providers from '~/providers'

import GlobalStyle from '~/styles'

import Routes from '~/routes'

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes />
        <GlobalStyle />
      </Providers>
    </BrowserRouter>
  )
}

export default App
