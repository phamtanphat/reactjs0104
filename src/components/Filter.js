import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props){
        super(props);

    }
    render() {
        const filterMode = this.props.filterMode;
        return (
        <div>
            <select  
                className="word"
                value={filterMode}
            >
                <option value="Show_All">Show_All</option>
                <option value="Show_Forgot">Show_Forgot</option>
                <option value="Show_Memorized">Show_Memorized</option>
            </select>
        </div>
        )
    }
}
