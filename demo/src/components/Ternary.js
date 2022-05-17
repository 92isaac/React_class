import React, { Component } from 'react'

class Ternary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             LearningReact:false
        }
    }
    
    render() {
        

        return this.state.LearningReact?(
            <div><h1>Welcome Frontend devs</h1></div>
        ):(
            <div><h1>Welcome Backend devs</h1></div>
        )
    }
}

export default Ternary
