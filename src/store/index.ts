import { combineReducers, createStore } from 'redux'
import spinner from './spinner/reducer'

const store = createStore(
  combineReducers({
    spinner
  })
)

export default store
