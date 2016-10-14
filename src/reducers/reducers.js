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
//			  isFetching: True,
//			  isCached: False,
//			  items: []
//		  },
//		  python: {
//			  isFetching: True,
//			  isCached: True,
//			  lastUpdate: 123456789,
//			  items: [ value, value, value... ]
//		  }
//	  }
//  }

selectedCategory = (state = 'javascript', action) => (
    switch (action.type) {
      case SELECT_CATEGORY:
        return action.category
    }
)
