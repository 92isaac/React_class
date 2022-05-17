import React, { Component } from 'react'

class Change extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ade',
             school:'ABU'
        }
    }

    changeMessage(){
        this.setState({
            name:'Lawyer Kunle',
             school:'Yabatech'
        })
    }
    
    render() {
        const{name,school}=this.props
        return (
            <div>
              <h1> My name is {this.state.name}, and I am a student of {this.state.school}</h1>
               <button onClick={() => this.changeMessage()}>Change me</button>
            </div>
        )
    }
}

export default Change
