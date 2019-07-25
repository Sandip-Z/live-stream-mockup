import React from 'react'

class QuestionRaised extends React.Component{
    render(){
        const template = this.props.questions.map(question => {
            return (
            <div key={question.questionId} className="question">
            <p className="question-paragraph">At <u>{question.timestamp}</u> <span className="user">{question.studentName}</span> asks <i>{question.question}</i></p>
            </div>
        )
        }) 
        console.log(this.props);
        return(
            <div className="question-raised-wrapper">
            <p className="question-raised-title-card blue">QUESTIONS</p>
            <div className="questionWrapper">
            {template}
            </div>
            </div>
        )
    }
}

export default QuestionRaised