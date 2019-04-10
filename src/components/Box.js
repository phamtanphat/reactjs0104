import React, { Component } from 'react'

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
        <button 
          onClick={() => this.setState({value : this.state.value + 1}) }
          className="btn btn-success">
          Increase
        </button>
        <button 
          onClick={() =>  this.setState({value : this.state.value - 1}) }
          className="btn btn-warning">
          Descrease
        </button>
        <button 
          onClick={() =>  this.setState({value : 0}) }
          className="btn btn-danger">
          Reset
        </button>
      </div>
    )
  }
}
