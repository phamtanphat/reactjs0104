import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actioncreators from './redux/actioncreators';


class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            txtEn : '',
            txtVn : ''
        }
        this.addWord = this.addWord.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    addWord(){
        this.props.addWord(this.state.txtEn , this.state.txtVn)
        this.setState({txtEn : '' , txtVn : ''});
    }
    toggleForm(){
        this.props.toggleForm();
    }
    render() {
        return (
            <div>
            {
                !this.props.shouldShowForm
                ?
                <div>
                    <button 
                        onClick={this.toggleForm}
                        className="btn btn-success"
                        style={{width : 200 , margin : 10 , borderRadius : 10 }}>
                            +
                    </button>
                </div>
                :
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
                            onClick={this.toggleForm}
                            className="btn btn-danger">
                            Cancel
                        </button>
                    </div>
                </div> 
            }
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {shouldShowForm : state.shouldShowForm}
}
export default connect(mapStateToProps,actioncreators)(Form);