import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <nav className="black">
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/teacher">Teacher</NavLink></li>
                <li><NavLink to="/student">Student</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar