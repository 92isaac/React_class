import React, { Component } from 'react'

class Fifth extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           message:'Welcome Visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    
    render() {
        return (
            <div>
                <h1 style={{'backgroundColor':'red'}}>{this.state.message}</h1>
                <button onClick ={ () =>this.changeMessage()}>Click Me</button>
                
            </div>
        )
    }
}

export default Fifth
