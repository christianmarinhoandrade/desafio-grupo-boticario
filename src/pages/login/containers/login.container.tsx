import useAuth from '~/hooks/useAuth'
import LoginFormComponent, {
  LoginForm
} from '../components/login-form.component'

function LoginContainer() {
  const auth = useAuth()

  function onSubmit(values: LoginForm) {
    auth.signIn(values)
  }

  return <LoginFormComponent onSubmit={onSubmit} />
}

export default LoginContainer
