import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Home'
import Teacher from './Component/Teacher'
import Student from './Component/Student'
import Navbar from './Component/Navbar'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/teacher" component={Teacher} />
    <Route path="/student" component={Student} />
    </div>
    </BrowserRouter>
  );
}

export default App;
