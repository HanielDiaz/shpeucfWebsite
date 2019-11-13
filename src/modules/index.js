import { combineReducers } from 'redux'

import user from './User'
import events from './Events'
import statistics from './Statistics'

export * from './User'
export * from './Events'
export * from './Statistics'

export default combineReducers({
  user,
  events,
  statistics
})
