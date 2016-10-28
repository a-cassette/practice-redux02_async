/*
 * components
 *
 * App is potal class of whole components.
 * App call containers.
 * and each container call React components (virtualDOM) to rendering
 */

import React          from 'react'
import { Component }  from 'react'
import postList       from '../containers/postList'
import selectPostList from '../containers/selectCategory'

class App extends Component {
  // render
  return() {
    <div>
        <postList />
        <selectPostList />
    </div>
  }
  
}

export default App
