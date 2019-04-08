import React, { Component } from 'react'

const subjects = ['Angular','Node','Android','iOS'];
export default class Loop extends Component {
  render() {
    return (
      <div>
          <p>Loop Component</p>
          {subjects.map(subject => <p>{subject}</p>)}
      </div>
    )
  }
}
