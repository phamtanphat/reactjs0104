import React, { Component } from 'react';
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
            txtVn : ''
        }
        this.addWord = this.addWord.bind(this);
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
    getWordItem(word){
        return (
            <div className="word" key={word.id}>
                <div className="word-container">
                <h3 className="text-success">{word.en}</h3>
                <h3 className="text-danger">
                    {word.isMemorized ? '----' : word.vn}
                </h3>
                </div>
                <div className="btn-container">
                <button
                    onClick={() =>this.togglWord(word.id)} 
                    className={word.isMemorized ? 'btn btn-success' : 'btn btn-danger'}>
                    {word.isMemorized ? 'Forgot' : 'Memorized'}
                </button>
                <button 
                    onClick={() =>this.removeWord(word.id)}
                    className="btn btn-warning" >
                    Remove
                </button>
                </div>
            </div>
        )
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
    render() {
        return (
        <div>
            <div>
                <button 
                    className="btn btn-success"
                    style={{width : 200 , margin : 10 , borderRadius : 10 }}>
                        +
                </button>
            </div>
            <div className="form-group word-from" >
                    <input
                        placeholder="English"
                        className="form-control"
                        value={this.state.txtEn}
                        onChange={evt => this.setState({txtEn : evt.target.value})}
                        />
                    <br />
                    <input
                        placeholder="Vietnamese"
                        className="form-control"
                        value={this.state.txtVn}
                        onChange={evt => this.setState({txtVn : evt.target.value})}/>
                    <br />
                    <div className="btn-container">
                        <button 
                            onClick={this.addWord}
                            className="btn btn-success">
                            Add word
                        </button>
                        <button
                            className="btn btn-danger">
                            Cancel
                        </button>
                    </div>
                </div>
            {this.state.words.map(word => this.getWordItem(word))}
        </div>
        )
    }
}


