import React , {Component} from 'react';

export default class Word extends Component{
    render(){
        const {en , vn , isMemorized} = this.props.wordInfo;
        const color = isMemorized ? 'green' : 'red';
        return(
            <div>
                <h3 style={{color}}>{en}</h3>
                <p>{vn}</p>
                <button className="btn btn-success">Forgot</button>            
                <button className="btn btn-danger">Memorized</button>            
            </div>
        )
    }
}