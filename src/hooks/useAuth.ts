import { useContext } from 'react'
import { AuthContext } from '~/providers/auth'

function useAuth() {
  const auth = useContext(AuthContext)
  return auth
}

export default useAuth
