/* eslint-disable */
import React, { createContext, useCallback, useState } from 'react'
import useLocalStorage from '~/hooks/useLocalStorage'
import services from '~/pages/login/login.services'

const AuthContext = createContext()

function AuthProvider(props) {
  const { children } = props

  const [storageUser, setStorageUser, removeStorageUser] =
    useLocalStorage('@GPB:user')

  const [storageToken, setStorageToken, removeStorageToken] =
    useLocalStorage('@GPB:token')

  const [storageRefreshToken, setStorageRefresh, removeStorageRefresh] =
    useLocalStorage('@GPB:refresh')

  const [user, setUser] = useState(
    storageUser && storageToken ? storageUser : null,
  )


  const signIn = useCallback(
    async (values) => {

      try {
        const response = await services.login(values)

        const { username, token, refreshtoken } = response.data
        setLoading(false)

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
