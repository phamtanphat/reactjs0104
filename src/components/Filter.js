import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filterMode : 'Show_All'
        }
    }
    render() {
        return (
        <div>
            <select  
                className="word"
                value={this.state.filterMode}
                onChange={evt => this.setState({filterMode : evt.target.value})}
            >
                <option value="Show_All">Show_All</option>
                <option value="Show_Forgot">Show_Forgot</option>
                <option value="Show_Memorized">Show_Memorized</option>
            </select>
        </div>
        )
    }
}
