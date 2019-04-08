import React , {Component} from 'react';

export default class Word extends Component{
    getButton(){
        if(this.props.wordInfo.isMemorized){
           return <button className="btn btn-success">Forgot</button> 
        }else{
           return <button className="btn btn-danger">Memorized</button>
        }     
    }
    render(){
        const {en , vn , isMemorized} = this.props.wordInfo;
        const color = isMemorized ? 'green' : 'red';
        return(
            <div style={{backgroundColor : 'gray' , margin : 10 , padding : 10 , borderRadius : 10 , width : 200}}>
                <h3 style={{color}}>{en}</h3>
                <p>{vn}</p>
                {this.getButton()}               
            </div>
        )
    }
}