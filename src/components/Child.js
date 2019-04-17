import React, { Component } from 'react'
import { connect } from 'react-redux'

class Child extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => this.props.dispatch({type : 'INCREASE'})}
          className="btn btn-success">
          Increase
        </button>
        <button
          onClick={() => this.props.dispatch({type : 'DESCREASE'})} 
          className="btn btn-warning">
          Descrease
        </button>
        <button
          onClick={() => this.props.dispatch({type : 'RESET'})} 
          className="btn btn-danger">
          Reset
        </button>
      </div>
    )
  }
}

export default connect()(Child);
