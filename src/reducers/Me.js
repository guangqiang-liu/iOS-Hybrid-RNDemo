/**
 * Created by guangqiang on 2018/2/22.
 */

const defaultState = 10

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    default:
      return state
  }
}

export default reducer