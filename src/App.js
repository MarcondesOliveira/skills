import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.jpg';
import html5 from './html5.png'
import css3 from './css3.png'
import javascript from './javascript.png'
import angular from './angular.png'
import react from './react.png'
import java from './java.png'
import c from './c.png'
import cplusplus from './c++.png'
import csharp from './c-sharp.png'

import './App.css';

import Home from './Home'
import Html5 from './Html5'
import Css3 from './Css3'
import Javascript from './Javascript'
import Angular from './Angular'
import ReactPage from './ReactPage'
import Java from './Java'
import C from './C'
import Cplusplus from './Cplusplus'
import Csharp from './Csharp'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>              
              <Link to='/html5'><img src={html5} className="App-icons" alt="html5"/></Link>
              <Link to='/css3'><img src={css3} className="App-icons" alt="css3"/></Link>
              <Link to='/javascript'><img src={javascript} className="App-icons" alt="javascript"/></Link>
              <Link to='/angular'><img src={angular} className="App-icons" alt="angular"/></Link>
              <Link to='/react'><img src={react} className="App-icons" alt="react"/></Link>
              <Link to='/java'><img src={java} className="App-icons" alt="java"/></Link>
              <Link to='/c'><img src={c} className="App-icons" alt="c"/></Link>
              <Link to='/c++'><img src={cplusplus} className="App-icons" alt="c++"/></Link>
              <Link to='/csharp'><img src={csharp} className="App-icons" alt="c-sharp"/></Link>
              
            </div>
            <div>
              <Home />
            </div>
            
          </header>
          <p className="App-intro">
            <Route path='/html5' component={Html5} />
            <Route path='/css3' component={Css3} />
            <Route path='/javascript' component={Javascript} />
            <Route path='/angular' component={Angular} />
            <Route path='/react' component={ReactPage} />
            <Route path='/java' component={Java} />
            <Route path='/c' component={C} />
            <Route path='/c++' component={Cplusplus} />
            <Route path='/csharp' component={Csharp} />
          </p>
        </div>
      </Router>
      </div>
    );
  }
  
}

export default App;
