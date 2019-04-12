import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div>
        <select  
            className="word"
            value="Show_All"
        >
            <option value="Show_All">Show_All</option>
            <option value="Show_Forgot">Show_Forgot</option>
            <option value="Show_Memorized">Show_Memorized</option>
        </select>
      </div>
    )
  }
}
