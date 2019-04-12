import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    const that = this.props.that;
    return (
      <div>
        <button
          onClick={this.props.onIncrease} 
          className="btn btn-success">
          Increase
        </button>
        <button 
          className="btn btn-warning">
          Descrease
        </button>
        <button 
          className="btn btn-danger">
          Reset
        </button>
      </div>
    )
  }
}
