import React, { Component } from 'react';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators'
class List extends Component {
    componentWillMount(){
        // Neu dung tu android truy vao localhost thong qua ipv4 : http://10.0.0.105:4000/words
        this.props.getAllWord();
    }
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
                key={word._id}/>)}
        </div>
        )
    }
}

const mapStateToprops = function(state){
    return {words : state.words , filterMode : state.filterMode}
}
export default connect(mapStateToprops,actioncreators)(List);


