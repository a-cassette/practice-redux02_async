import 'babel-polyfill'
import React               from 'react'
import thunkMiddleware     from 'redux-thunk'
import createLogger        from 'redux-logger'
import { createStore }     from 'redux'
import { applyMiddleware } from 'redux'
import { render }          from 'react-dom'
import { Provider }        from 'react-redux'
//import { selectCategory }  from './actions/actions'
//import { fetchPostsIfNeeded } from './actions/actions'

import rootReducer         from './reducers/reducers'
import App                 from './components/App'

const loggerMiddleware = createLogger()


const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

//store.dispatch(selectCategory('javascript'))
//store.dispatch(fetchPostsIfNeeded('javascript')).then(() =>
//    console.log(store.getState())
//)


const targetDom = document.getElementById('react_app')

render(
    <Provider store={store}>
        <App />
    </Provider>,
    targetDom
)

