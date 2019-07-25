import React from 'react'
import {Link} from 'react-router-dom'

const Home = ()=>{
    return(
        <div className="container">
        <div className="post card">
        <div className="card-content">
        <h2>This is mockup for our upcoming Live Stream web application.</h2>
        <div className="row margin-top-50">
        <div className="col s6"><center><Link to="/student" className="waves-effect waves-light btn-large">Go to Student's Interface</Link></center></div>
        <div className="col s6"><center><Link to="/teacher" className="waves-effect waves-light btn-large">Go to Teacher's Interface</Link></center></div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home