import 'babel-polyfill'
import thunkMiddleware     from 'redux-thunk'
import createLogger        from 'redux-logger'
import { createStore }     from 'redux'
import { applyMiddleware } from 'redux'
import { selectCategory }  from './actions/actions'
import { fetchPostsIfNeeded } from './actions/actions'
import rootReducer         from './reducers/reducers'

const loggerMiddleware = createLogger()


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

store.dispatch(selectCategory('javascript'))
store.dispatch(fetchPostsIfNeeded('javascript')).then(() =>
    console.log(store.getState())
)
