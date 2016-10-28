import fetch from 'isomorphic-fetch'

/*
 * user interaction actions
 */
export const SELECT_CATEGORY  = 'SELECT_CATEGORY'
export const REFRESH_CATEGORY = 'REFRESH_CATEGORY'

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})

export const refreshCategory = category => ({
  type: REFRESH_CATEGORY,
  category
})



/*
 * fetching data actions
 */
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


/*
 * dispatcher call these following actions functions with aruguments
 * action creator functions set aruguments into action object.
 * Then, dispatcher pass action object and old state to reducer.
 * and reducer create new State object from given action object.
 *
 * action creator would be called by dispatcher
 *
 */

export const requestPosts = category => ({
  type: REQUEST_POSTS,
  category
})

export const receivePosts = (category, json) => ({
  type: RECEIVE_POSTS,
  category,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})



/*
 * thunk action creator
 * thunk action creator returns not object but function.
 * thunk can treat function.
 *
 * The way use this action creator is just same of others as
 * store.dispatch(fetchPosts('javascript'))
 */

const fetchPosts = category => {
  return dispatch => {
    dispatch(requestPosts(category))

    return fetch(`https://www.reddit.com/r/${category}.json`)
    //return fetch(`https://www.connpass.com/api/v1/event/?keyrowd=${category}`)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(category, json)))
  }
}


/*
 * check state whether should fetch or not
 */
const shouldFetchPosts = (state, category) => {
  const posts = state.postsByConnpas[category] // get cashing state data depending on arg category
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    // ??? posts exist on cache and not on fetching process, then...
    return posts.isCached
  }
}


/*
 *
 */
export const fetchPostsIfNeeded = (category) => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), category)) {
      // dispatch a thunk from thunk
      // if not cached, return fetched posts
      return dispatch(fetchPosts(category))
    } else {
      // `Promise.resolve()` returns thenable promise object which Fulfilled with given value
      // resolve function seems to be executed immediately, but it will to be done asyncly.
      // in this case let context know thre's nothing to wait for.
      return Promise.resolve()
    }
  }
}
