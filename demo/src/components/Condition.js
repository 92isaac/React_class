import React, { Component } from 'react'

class Condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Female:false
        }
    }
    
    render() {
        let message;
        if(this.state.Female){
            message=<h1>Welcome Tumininu</h1>
        }else{
            message=<h1>Welcome others</h1>
        }
        return (
            <div>
                {message}
            </div>
        )
    }
}

export default Condition
