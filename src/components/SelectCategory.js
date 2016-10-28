/*
 * components
 *
 * React components
 * This component is called by Redux container.
 * Rendering virtualDOM with this.props assigned by container.
 */

import React         from 'react'
import { Component } from 'react'
import { PropTypes } from 'react'

class SelectCategory extends Component {
  // props validator
  static propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    onSelectedCategoryChanged: PropTypes.func.isRequired

  }

  // method
  // render
  render() {
    <form onChange={ () => this.props.onSelectedCategoryChanged(this.checked) }>
      switch (this.props.selectedCategory) {
        case 'javascript':
          <input type="radio" value="javascript" checked>javascript
          <input type="radio" value="python" >python
        case 'python':
          <input type="radio" value="javascript">javascript
          <input type="radio" value="python" checked>python
        default:
          <input type="radio" value="javascript">javascript
          <input type="radio" value="python">python
      }
    </form>
  }
}

export default SelectCategory
