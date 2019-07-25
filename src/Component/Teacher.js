import React, { Component } from 'react'

import Rate from './Rate'
import Video from './Video'
import QuestionRaised from './QuestionRaised'
import Attendance from './Attendance'
export default class Teacher extends Component { 
    constructor(props){
        super(props);
        this.state = {
            questions : [
                {questionId:1 ,studentName: 'aayush', question:'why is that?', timestamp:'22:15'},
                {questionId:2, studentName: 'ishan', question:'but, is it enough?', timestamp:'25:00'},
                {questionId:3, studentName: 'sandip', question:'lorem ipsum is a dummy text to see whether blah b;ha', timestamp:'26:00'}
            ],
            students : [
                {studentId:1, studentName: 'sandip'},
                {studentId:2, studentName:'aayush'},
                {studentId:3, studentName:'ishan'}
            ]
        }
    }
    render(){
        return(
            <div className="container">
            <Rate />
            <div className="row no-bottom-margin-padding">
                <div className="col s8 no-bottom-margin-padding">
                <Video size="12" />
                </div>
                <div className="col s4 post card no-margin-padding">
                <QuestionRaised questions={this.state.questions}/>
                </div>
            </div>
                <div className="attendance-wrapper z-depth-3">
                    <p className="no-margin-padding attendance-title-card">Attendance</p>
                    <Attendance students={this.state.students}/>
                </div>
            </div>
        )
    }
}
