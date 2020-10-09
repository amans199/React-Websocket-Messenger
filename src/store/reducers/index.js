import { combineReducers } from 'redux'
import messages from './Messages'
import users from './Users'

const chat = combineReducers({
  messages, users
})

export default chat