import React, { Component } from 'react'

export default class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
       value : 0
    }
    this.increase = this.increase.bind(this);
    this.descrease = this.descrease.bind(this);
    this.reset = this.reset.bind(this);
  }
  increase(){
    this.setState({value : this.state.value + 1})
  }
  descrease(){
    this.setState({value : this.state.value - 1})
  }
  reset(){
    this.setState({value : 0})
  }

  render() {
    return (
      <div>
        <h3>Value = {this.state.value}</h3>
        <button 
          onClick={this.increase}
          className="btn btn-success">
          Increase
        </button>
        <button 
          onClick={this.descrease}
          className="btn btn-warning">
          Descrease
        </button>
        <button 
          onClick={this.reset }
          className="btn btn-danger">
          Reset
        </button>
      </div>
    )
  }
}
