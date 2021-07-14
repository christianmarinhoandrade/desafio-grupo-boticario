import React from 'react'

import ThemeProvider from './theme'
import AuthProvider from './auth'
import ConfigProvider from './config'

type ThemeProps = {
  children: React.ReactNode
}
function Providers({ children }: ThemeProps) {
  return (
    <ConfigProvider>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </ConfigProvider>
  )
}

export default Providers
