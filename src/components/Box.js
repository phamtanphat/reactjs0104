import React, { Component } from 'react'
import Child from './Child';

import { connect } from 'react-redux'

class Box extends Component {
  render() {
    return (
      <div>
        <h3>Value = {this.props.value}</h3>
        <Child />
      </div>
    )
  }
}

export default connect(state =>{return {value : state.value}})(Box);
