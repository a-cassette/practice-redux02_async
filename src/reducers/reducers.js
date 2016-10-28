import { combineReducers } from 'redux'
import {
  SELECT_CATEGORY,
  REFRESH_CATEGORY,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from '../actions/actions'


//## status shapes
//  {
//	  selectedCategory: 'javascript',
//	  posts: {
//		  javascript: {
//			  isFetching: true,
//			  isCached: false,
//			  items: []
//		  },
//		  python: {
//			  isFetching: true,
//			  isCached: true,
//			  lastUpdate: 123456789,
//			  items: [ value, value, value... ]
//		  }
//	  }
//  }

/*
 * reducer 1
 */
const selectedCategory = (state = 'javascript', action) => {
    switch (action.type){
      case SELECT_CATEGORY:
        return action.category
      default:
        return state
    }
}

/*
 * function to set values into nested object
 *
 */
const posts = (state = {
  isFetching: false,
  isCashed: false,
  items: []
}, action) => {
    switch (action.type){
      case REFRESH_CATEGORY:
        return Object.assign({}, state, {
          isCached: true
        })
      case REQUEST_POSTS:
        return Object.assign({}, state, {
          isFetching: true,
          isCached: false
        })
      case RECEIVE_POSTS:
        return Object.assign({}, state, {
          isFetching: false,
          isCached: false,
          items: action.posts,
          lastUpdate: action.receivedAt
        })
      default:
        return state
    }
}

/*
 * reducer 2
 */
const postsByConnpas = (state = {}, action) => {
    switch (action.type) {
      case REFRESH_CATEGORY:
      case REQUEST_POSTS:
      case RECEIVE_POSTS:
        return Object.assign({}, state, {
          [action.category]: posts(state[action.category], action)
        })
      default:
        return state
    }
}

const rootReducer = combineReducers({
  selectedCategory,
  postsByConnpas
})

export default rootReducer
