/**
 * Created by guangqiang on 2018/2/22.
 */
import {combineReducers} from 'redux'
import me from './me'
import shop from './shop'
import common from './common'
const rootReducer = combineReducers({
  common,
  me,
  shop
})

export default rootReducer