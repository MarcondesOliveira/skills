import React, { Component } from 'react'

import react from './react.png'

import './App.css';

class ReactPage extends Component {
    render() {
        return (
            <div className="App-intro">
               
                <img src={react} alt="React"/>
                <br/><br/>

                <div className="container">
                    <div className="skills react" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
                </div>
                
            </div>
        )
    }
}

export default ReactPage