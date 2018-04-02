import React, { Component } from 'react'

import javascript from './javascript.png'

import './App.css';

class Javascript extends Component {
    render() {
        return (
            <div className="App-intro">
                
                <img src={javascript} alt="JavaScript" />
                <br/><br/>

                <div className="container">
                    <div className="skills js" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                </div>
                
            </div>
        )
    }
}

export default Javascript