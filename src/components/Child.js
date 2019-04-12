import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <button 
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
