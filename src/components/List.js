import React, { Component } from 'react';
import Word from './Word';
import Form from './Form';
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
                {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
                {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
                {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : false}
            ],
            txtEn : '',
            txtVn : '',
            shouldShowForm : false,
            filterMode : 'Show_All'
        }
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    togglWord(id){
        const newWords = this.state.words.map(w => {
            if(id !== w.id) return w;
            return {...w, isMemorized : !w.isMemorized}
        });
        this.setState({words : newWords});
    }
    removeWord(id){
        const words = this.state.words.filter(w =>w.id !== id);
        this.setState({words});
    }
    
    addWord(){
        const newWord = {
            id : Math.random(),
            en : this.state.txtEn,
            vn : this.state.txtVn,
            isMemorized : false
        } 
        const newWords = this.state.words.concat(newWord);
        this.setState({words : newWords , txtEn : '' , txtVn : ''});
    }
    toggleForm(){
        this.setState({shouldShowForm : !this.state.shouldShowForm});
    }

    render() {
        return (
        <div>
            <Form shouldShowForm={this.state.shouldShowForm}/>
            <select  
                className="word"
                value={this.state.filterMode}
                onChange={evt => this.setState({filterMode : evt.target.value})}
            >
                <option value="Show_All">Show_All</option>
                <option value="Show_Forgot">Show_Forgot</option>
                <option value="Show_Memorized">Show_Memorized</option>
            </select>            
            {this.state.words.filter(w => {
                if(this.state.filterMode === 'Show_Forgot' && !w.isMemorized) return false;
                if(this.state.filterMode === 'Show_Memorized' && w.isMemorized) return false;
                return true;
                
            }).map(word => <Word word={word} key={word.id}/>)}
        </div>
        )
    }
}


