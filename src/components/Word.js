import React , {Component} from 'react';
import {connect} from 'react-redux';
class Word extends Component{
    render(){
        const word = this.props.word;
        const {dispatch} = this.props;
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
                    onClick={() => dispatch({type : 'TOGGLE_WORD' , id : word.id})}
                    className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button 
                    onClick={() => dispatch({type : 'REMOVE_WORD' , id : word.id})}
                    className="btn btn-warning" >
                    Remove
                </button>
                </div>
            </div>
        )
    }
}

export default connect()(Word);