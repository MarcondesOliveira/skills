import React, { Component } from 'react'

import cplusplus from './c++.png'

class Cplusplus extends Component {
    render() {
        return (
            <div className="App-intro">
                
                <img src={cplusplus} alt="C++" />
                <h1></h1>
                <br />

                <div className="container">
                    <div className="skills cplusplus" role="progressbar" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                </div>
                
            </div>
        )
    }
}

export default Cplusplus