import React, { Component } from 'react'

export class Bind extends Component {
    constructor(props) {
        super(props)
            this.clickHandler=this.clickHandler.bind(this)
        this.state = {
             message:'Hello'
        }
    }

    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
            <div><h1>{this.state.message}</h1></div>
            <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Bind
