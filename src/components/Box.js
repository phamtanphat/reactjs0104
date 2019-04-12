import React, { Component } from 'react'
import Child from './Child';
export default class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
       value : 0
    }
}


  render() {
    return (
      <div>
        <h3>Value = {this.state.value}</h3>
        <Child/>
      </div>
    )
  }
}
