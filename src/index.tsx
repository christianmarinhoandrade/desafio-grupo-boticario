import ReactDOM from 'react-dom'
import App from './App'
import { register } from './register-serviceworker'
import 'antd/dist/antd.less'

register()

ReactDOM.render(<App />, document.getElementById('root'))
