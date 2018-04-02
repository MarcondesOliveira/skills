import React, { Component } from 'react'

import java from './java.png'

import './App.css';

class Java extends Component {
    render() {
        return (
            <div className="App-intro">
               
                <img src={java} alt="Java"/>
                <h1>Java</h1>
                <br/>

                <div className="container">
                    <div className="skills java" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">60%</div>
                </div>
                
            </div>
        )
    }
}

export default Java