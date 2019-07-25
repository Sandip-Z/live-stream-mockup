import React, { Component } from 'react'
import Video from './Video'
import Rate from './Rate'

export default class Student extends Component { 
    constructor(props){
        super(props);
        this.state = {
            focused : false,
            inputStyle : 'question-form-text-field',
            buttonStyle : 'ask-button'
        }
    }
    handleFocus = ()=>{
        this.setState(state => ({
            focused : !state.focused
        })) 
        if(this.state.focused === true){
            this.setState({
                inputStyle : 'question-form-text-field small-form',
                buttonStyle: 'ask-button small-button'
            })
        }
        else{
            this.setState({
                inputStyle : 'question-form-text-field big-form',
                buttonStyle : 'ask-button big-button' 
            })
        }
    }
    render(){
        const ratingCollapse = this.state.focused ? ('col s3') : ('col s8');
        const formCollapse = this.state.focused ? ('col s9') : ('col s4');
        return(
            <div className="container margin-top-20">
            <Video size="12"/>
            <div className="row">
            <div className={ratingCollapse}><Rate /></div>
            <div className={formCollapse + ' no-margin-padding'}>
                <div className="inline-form">
                <input type="text" className={this.state.inputStyle} id="question-text-field" placeholder="Ask a question" onFocus={this.handleFocus} onBlur={this.handleFocus}/>
                <button className={this.state.buttonStyle}>ask</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
