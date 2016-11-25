# practice-redux02_async

## purpose
  an practice scripts of asynchronous react-redux application.



## How to write actions
### const action names as follow:
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

### const action creater functions
Action creater functions acts like constractor of action objec act like constractor of action object.It provides action name and other arguments to pass to reducer.
```export const selectReddit = reddit => ({
  type: SELECT_REDDIT,
  reddit
})```
It can receive args from Container.

Container (or Components) call these functions when action triggered as argument of dispatch function as;
```dispatch(fetchPostsIfNeeded(selectedReddit))```




## How to write reducers
import action names from actions.js

Reducer functions receives state object and action object.
And treat the state obj according to action obj, and return it back.

to export multiple reducers use combineReducers.

### const reducer functions



