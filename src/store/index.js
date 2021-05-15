import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../redux/reducers/index.js'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
