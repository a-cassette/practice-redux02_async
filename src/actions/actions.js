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
 * dispatcher call following action functions with arugument
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

