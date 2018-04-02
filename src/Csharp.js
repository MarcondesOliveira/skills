import React, { Component } from 'react'

import csharp from './c-sharp.png'

class Csharp extends Component {
    render() {
        return (
            <div className="App-intro">
                
                <img src={csharp} alt="C-sharp" />
                <h1></h1>
                <br />

                <div className="container">
                    <div className="skills csharp" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
                
            </div>
        )
    }
}

export default Csharp