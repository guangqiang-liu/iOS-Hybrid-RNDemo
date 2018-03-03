/**
 * Created by guangqiang on 2018/3/3.
 */
import {createAction} from 'redux-actions'
import type from '../../constants/ActionType'
import actions from '../../actionApis/shop'

const getMovieList = createAction(type.MOVIE_SHOWTIME_LIST, actions.movieList)

const actionCreators = {
  getMovieList
}

export default {actionCreators}