/**
 * Created by guangqiang on 2018/3/3.
 */
import {getFetch, postFetch, postFetchForValidator} from '../../utils/network/request/HttpExtension'
import {PATH} from '../../constants/UrlPath'
import {ApiSource} from '../../constants/commonType'

const movieList = params => getFetch(PATH.MOVIE_SHOWTIME, params, ApiSource.TIMEMOVIE)

export default {
  movieList
}