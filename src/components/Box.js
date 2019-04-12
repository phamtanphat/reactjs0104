import React, { Component } from 'react'
import Child from './Child';
export default class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
       value : 0
    }
    this.onIncrease = this.onIncrease.bind(this);
}

  onIncrease(){
    this.setState({value : this.state.value + 1});
  }

  render() {
    return (
      <div>
        <h3>Value = {this.state.value}</h3>
        <Child onIncrease={this.onIncrease}/>
      </div>
    )
  }
}
