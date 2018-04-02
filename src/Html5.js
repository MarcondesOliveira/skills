import React, { Component } from 'react'

import html5 from  './html5.png'

class Html5 extends Component {
    render() {
        return (
            <div className="App-intro">
            
                <img src={html5} alt="HTML5" />
                <br/><br/>

                <div className="container">
                    <div className="skills html" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                </div>

            </div>
        )
    }
}

export default Html5

// 509