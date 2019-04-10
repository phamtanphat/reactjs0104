import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
        <div className="form-group word-from" >
            <input
                placeholder="English"
                className="form-control"
                />
            <br />
            <input
            placeholder="Vietnamese"
            className="form-control"/>
            <br />
            <div className="btn-container">
                <button className="btn btn-success">
                    Add word
                </button>
                <button
                    className="btn btn-danger">
                    Cancel
                </button>
            </div>
        </div>
    )
  }
}
