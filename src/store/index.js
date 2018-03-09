/**
 * Created by guangqiang on 2018/2/22.
 */
import {createStore, applyMiddleware} from 'redux'
import AppReducers from '../reducers'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

const middlewares = [
  thunkMiddleware,
  promiseMiddleware({promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']}),
]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(AppReducers)

export default store