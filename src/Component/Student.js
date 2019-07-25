import React, { Component } from 'react'
import Video from './Video'
import Rate from './Rate'

export default class Student extends Component { 
    render(){
        return(
            <div className="container margin-top-20">
            <Video size="12"/>
            <div className="row">
            <div className="col s8"><Rate /></div>
            <div className="col s4 no-margin-padding">
                <div className="inline-form">
                <input type="text" className="question-form-text-field" id="question-text-field" placeholder="Ask a question"/>
                <button className="ask-button">ask</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
