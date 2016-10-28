/*
 * container
 */

import { connect } from 'react-redux'
// import { } from '../actions/actions'
import { PostList } from '../components/PostList'

// map state object into props
const mapStateProps = (state) => {
  return {
    return state
  }
}
// map dispatch function into props
//const mapDispatchToProps = (dispatch) => {
//  return {
//
//  }
//}

// return instantiated components with maped props
export default connect(
    mapStateProps,
//    mapDispatchToProps
)(PostList)
