import React, { Component } from 'react';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';

import {connect} from 'react-redux';
class List extends Component {
    render() {
        return (
        <div>
            <Form />
            <br/>
            <Filter />            
            {this.props.words.filter(w => {
                if(this.props.filterMode === 'Show_Forgot' && !w.isMemorized) return false;
                if(this.props.filterMode === 'Show_Memorized' && w.isMemorized) return false;
                return true;
                
            }).map(word => 
            <Word 
                word={word} 
                key={word.id}/>)}
        </div>
        )
    }
}

const mapStateToprops = function(state){
    return {words : state.words , filterMode : state.filterMode}
}
export default connect(mapStateToprops)(List);


