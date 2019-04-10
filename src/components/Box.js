import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <div>
        <h3>Value = 0</h3>
        <button className="btn btn-success">Increase</button>
        <button className="btn btn-warning">Descrease</button>
        <button className="btn btn-danger">Reset</button>
      </div>
    )
  }
}
