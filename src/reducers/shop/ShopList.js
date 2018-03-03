/**
 * Created by guangqiang on 2018/3/3.
 */
import type from '../../constants/ActionType'
import {handleActions} from 'redux-actions'

const initialState = {
  shopList: []
}

const originalReducers = {}

originalReducers[type.MOVIE_SHOWTIME_LIST + type.FETCH_SUCCESS_SUFFIX] = (state, action) => {
  return {
    ...state,
    shopList: action.payload.ms
  }
}

const reducer = handleActions(originalReducers, initialState)

export default reducer