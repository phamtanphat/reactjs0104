import React, { Component } from 'react';
import Word from './Word';
import Form from './Form';
import Filter from './Filter';
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            words : [
                {id : 'a1' , en : 'One' , vn : 'Mot' , isMemorized : true},
                {id : 'a2' , en : 'Two' , vn : 'Hai' , isMemorized : false},
                {id : 'a3' , en : 'Three' , vn : 'Ba' , isMemorized : false}
            ],
            shouldShowForm : false,
            filterMode : 'Show_All'
        }
        this.onAddWord = this.onAddWord.bind(this);
        this.onToggleForm = this.onToggleForm.bind(this);
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
    
    onAddWord(newWord){
        const newWords = this.state.words.concat(newWord);
        this.setState({words : newWords });
    }
    onToggleForm(){
        this.setState({shouldShowForm : !this.state.shouldShowForm});
    }

    render() {
        return (
        <div>
            <Form 
                shouldShowForm={this.state.shouldShowForm}
                onToggleForm={this.onToggleForm}
                onAddWord={this.onAddWord}
            />
            <br/>
            <Filter filterMode={this.state.filterMode}/>            
            {this.state.words.filter(w => {
                if(this.state.filterMode === 'Show_Forgot' && !w.isMemorized) return false;
                if(this.state.filterMode === 'Show_Memorized' && w.isMemorized) return false;
                return true;
                
            }).map(word => <Word word={word} key={word.id}/>)}
        </div>
        )
    }
}


