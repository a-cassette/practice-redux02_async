/*
 * container
 */

import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions/actions'
import { SelectCategory } from '../components/SelectCategory'

//map state values into props
const mapStateToProps = (state) => {
  return {
    return state
  }
}

// map dispatch function into props
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectedCategoryChanged: () => { dispatch(fetchPostsIfNeeded(state.selectedCategory)) }
  }
}

// return instatiate components with maped properties
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCategory)
