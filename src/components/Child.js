import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    // const that = this.props.that;
    const {onIncrease , onDescrease , onReset} = this.props;
    return (
      <div>
        <button
          onClick={onIncrease} 
          className="btn btn-success">
          Increase
        </button>
        <button 
          onClick={onDescrease} 
          className="btn btn-warning">
          Descrease
        </button>
        <button 
          onClick={onReset}
          className="btn btn-danger">
          Reset
        </button>
      </div>
    )
  }
}
