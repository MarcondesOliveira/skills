import React, { Component } from 'react'

import angular from './angular.png'

import './App.css';

class Angular extends Component {
    render() {
        return (
            <div className="App-intro">
               
                <img src={angular} alt="Angular"/>
                <h1>Angular</h1>
                <br/>

                <div className="container">
                    <div className="skills angular" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
                
            </div>
        )
    }
}

export default Angular