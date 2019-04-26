import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';

class Filter extends Component {
    render() {
        const filterMode = this.props.filterMode;
        return (
        <div>
            <select  
                className="word"
                value={filterMode}
                onChange={evt => this.props.set_filter_mode( evt.target.value)}
            >
                <option value="Show_All">Show_All</option>
                <option value="Show_Forgot">Show_Forgot</option>
                <option value="Show_Memorized">Show_Memorized</option>
            </select>
        </div>
        )
    }
}

const mapStateToProps = function(state){
    return {filterMode : state.filterMode}
}
export default connect(mapStateToProps,actioncreators)(Filter);
