import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';

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
                    onClick={() => this.props.toggleWord(word.id)}
                    className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button 
                    onClick={() => this.props.removeWord(word.id)}
                    className="btn btn-warning" >
                    Remove
                </button>
                </div>
            </div>
        )
    }
}

export default connect(null,actioncreators)(Word);