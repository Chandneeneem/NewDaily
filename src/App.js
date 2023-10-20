
import './App.css'

import React, { Component } from 'react'
import Navbar from './comp/Navbar'
import News from './comp/News'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default class App extends Component {
  
  render() {
    return (
      <div>

        <Router>  

        <Navbar/>
          <Routes>
          <Route path="/" element={ <News pagesize={6} country="in" category="general"/>} />
          <Route path="/business" element={ <News pagesize={6} country="in" category="Business"/>} />
          <Route path="/sports" element={ <News pagesize={6} country="in" category="Sports"/>} />
          <Route path="/technology" element={ <News pagesize={6} country="in" category="technology"/>} />
          <Route path="/health" element={ <News pagesize={6} country="in" category="health"/>} />
          <Route path="/general" element={ <News pagesize={6} country="in" category="general"/>} />
          <Route path="/entertainment" element={ <News pagesize={6} country="in" category="entertainment"/>} />
          <Route path="/science" element={ <News pagesize={6} country="in" category="science"/>} />
        </Routes>
        
        </Router>
          
      </div>
    )
  }
}

