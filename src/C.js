import React, { Component } from 'react'

import c from './c.png'

class C extends Component {
    render() {
        return (
            <div className="App-intro">
                
                <img src={c} alt="C" />
                
                <h1></h1>
                <br />

                <div className="container">
                    <div className="skills c" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
                
            </div>
        )
    }
}

export default C