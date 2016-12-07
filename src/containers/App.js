import React                  from 'react'
import { Component }          from 'react'
//import { PropTypes }          from 'react'
import { connect }            from 'react-redux'

//import { requestPosts }       from '../actions/actions'
import { selectCategory }     from '../actions/actions'
import { fetchPostsIfNeeded } from '../actions/actions'
import { refreshCategory }    from '../actions/actions'

import Picker                 from '../components/Picker'
import Posts                  from '../components/Post'

class App extends Component {
//  static propTypes = {
    //
//  }

  componentDidMount() {
    const { dispatch, selectedCategory } = this.props
    dispatch(fetchPostsIfNeeded(selectedCategory))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedCategory !== this.props.selectedCategory) {
      const { dispatch, selectedCategory } = nextProps
      dispatch(fetchPostsIfNeeded(selectedCategory))
    }
  }

  handleChange = nextCategory => {
    this.props.dispatch(selectCategory(nextCategory))
  }

  handleRefreshClick = e => {
    e.preventDefault()

    const { dispatch, selectedCategory } = this.props // obj mapped in container
    dispatch(refreshCategory(selectedCategory))
    dispatch(fetchPostsIfNeeded(selectedCategory))
  }

  render() {
    const { selectedCategory, posts, isFetching, lastUpdated } = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <Picker value={selectedCategory} onChange={this.handleChange} options={['javascript', 'python']} />
        <p>
            {lastUpdated &&
                <span>
                    Last updated at {new Date(lastUpdated).toLocaateTimeString()}.{' '}
                </span>
            }
            {!isFetching &&
                <a href="#"
                    onClick={this.handleRefreshClick}>
                    Refresh
                </a>
            }
        </p>
        {isEmpty
            ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
            : <div style={{ opacity:isFetching ? 0.5 :1 }}>
                <Posts posts={posts} />
              </div>
        }
      </div>
    )
  }
}




const mapStateToProps = state => {
  const {selectedCategory, postsByReddit} = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedCategory] || {
    isFetching: true,
    items:[]
  }

  return{
    selectedCategory,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)
