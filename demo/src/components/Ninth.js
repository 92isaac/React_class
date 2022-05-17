import React, { Component } from 'react'

class Ninth extends Component {

    render() {
        const{state, city}=this.props
        return (
            <div>
               <h1> {city} is a place in {state}</h1>  
            </div>
        )
    }
}

export default Ninth
