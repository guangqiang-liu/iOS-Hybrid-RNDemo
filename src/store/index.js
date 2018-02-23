/**
 * Created by guangqiang on 2018/2/22.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduders from '../reducers'
import thunkMiddleware from 'redux-thunk'

const composedReducer = combineReducers(reduders)

const Store = createStore(
    composedReducer,
    applyMiddleware(thunkMiddleware)
)

export default Store