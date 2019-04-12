import React, { Component } from 'react'
import Child from './Child';
export default class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
       value : 0
    }
    this.onIncrease = this.onIncrease.bind(this);
    this.onDescrease = this.onDescrease.bind(this);
    this.onReset = this.onReset.bind(this);
}

  onIncrease(){
    this.setState({value : this.state.value + 1});
  }
  onDescrease(){
    this.setState({value : this.state.value - 1});
  }
  onReset(){
    this.setState({value : 0});
  }

  render() {
    return (
      <div>
        <h3>Value = {this.state.value}</h3>
        <Child 
          onIncrease={this.onIncrease}
          onDescrease={this.onDescrease}
          onReset={this.onReset}/>
      </div>
    )
  }
}
