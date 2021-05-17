import { SET_LOADING_STATUS } from '../actions/actionType'

export const initstate = {
  loading: false,
}

const articleReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      }
    default:
      return state
  }
}

export default articleReducer
