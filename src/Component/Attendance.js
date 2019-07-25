import React, { Component } from 'react'

export default class Attendance extends Component{
    render(){
        const template = this.props.students.map(student=>{
            return (
                <li key={student.studentId} className="theStudent z-depth-1">
                {student.studentName}
                <div class="switch">
                <label>
                  Mute
                  <input type="checkbox" />
                  <span class="lever"></span>
                  Unmute
                </label>
              </div>
                </li>   
            )
        })
        return(
            <div className="attendance-main-wrapper">
            <ul className="student-list">
            {template}
            </ul>
            </div>
        )
    }
}