import React, { Component } from 'react'

import css3 from './css3.png'

class Css3 extends Component {
    render() {
        return (
            <div className="App-intro">
                
                <img src={css3} alt="CSS3" />
                <br/><br/>

                <div className="container">
                    <div className="skills css" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                </div>
                
            </div>
        )
    }
}

export default Css3