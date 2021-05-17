import { GET_ARTICLES, SET_LOADING_STATUS } from '../actions/actionType'

export const initstate = {
  articles: [],
  loading: false,
}

const articleReducer = (state = initstate, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      }
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
