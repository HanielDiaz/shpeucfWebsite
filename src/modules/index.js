import { combineReducers } from 'redux'

import user from './User'
import events from './Events'

export * from './User'
export * from './Events'

export default combineReducers({
  user,
  events
})
