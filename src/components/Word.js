import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';
import axios from 'axios';
class Word extends Component{
    render(){
        const word = this.props.word;
        return(
            <div className="word" >
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    {word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button
                    onClick={() => {
                        const URL = "http://localhost:4000/word/";
                        axios.put(URL + word._id ,{isMemorized : !word.isMemorized})
                        .then(response => {
                            if(!response.data.word) throw new Error("Can not toggle word");
                            this.props.toggleWord(response.data.word._id)
                        })
                        .catch(error => alert(error.message));
                    }}
                    className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button 
                    onClick={() => {
                        const URL = "http://localhost:4000/word/";
                        axios.delete(URL + word._id)
                        .then(response => {
                            if(!response.data.word) throw new Error("Can not remove word");
                            this.props.removeWord(response.data.word._id)
                        })
                        .catch(error => alert(error.message));
                        
                    }}
                    className="btn btn-warning" >
                    Remove
                </button>
                </div>
            </div>
        )
    }
}

export default connect(null,actioncreators)(Word);