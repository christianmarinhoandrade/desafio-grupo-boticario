import React from 'react'
import ThemeProvider from './theme'

type ThemeProps = {
  children: React.ReactNode
}
function Providers({ children }: ThemeProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers
