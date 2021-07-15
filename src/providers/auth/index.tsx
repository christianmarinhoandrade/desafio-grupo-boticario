/* eslint-disable */
import { createContext, useCallback, useState } from 'react'
import useLocalStorage from '~/hooks/useLocalStorage'
import services from '~/pages/login/login.services'
import { LoginForm } from '~/pages/login/components/login-form.component'
type AuthContextProps = {
  signed: boolean
  user?: { username: string }
  signIn: (values: LoginForm) => void
  signOut: () => void
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

function AuthProvider(props: { children: JSX.Element }) {
  const { children } = props

  const [storageUser, setStorageUser, removeStorageUser] =
    useLocalStorage('@GPB:user')

  const [storageToken, setStorageToken, removeStorageToken] =
    useLocalStorage('@GPB:token')

  const [, setStorageRefresh, removeStorageRefresh] =
    useLocalStorage('@GPB:refresh')

  const [user, setUser] = useState(
    storageUser && storageToken ? storageUser : null,
  )


  const signIn = useCallback(
    async (values: LoginForm) => {

      try {
        const response = await services.login(values)

        const { username, token, refreshtoken } = response.data

        setUser({ username })
        setStorageUser({ username })
        setStorageToken(token)
        setStorageRefresh(refreshtoken)
      } catch {
      }
    },
    [setStorageUser, setStorageToken, setStorageRefresh],
  )

  const signOut = useCallback(() => {
    setUser(null)
    removeStorageUser()

    removeStorageToken()

    removeStorageRefresh()
  }, [
    removeStorageUser,
    removeStorageToken,
    removeStorageRefresh,
  ])

  return (

    <AuthContext.Provider
      value={{
        signed: !!user?.username,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }

export default AuthProvider
