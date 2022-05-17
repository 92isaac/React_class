import React, { Component } from 'react'

class ClassWork extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             food:''
        }
    }

    foodDetails(){
        this.setState({
           food:'My favorite food is semo. I like semo because it is rich in fibre' 
        })
    }
    
    render() {
        return (
            <div>
               <h1 style={{'textDecoration':'underline'}}>My Favorite Food</h1> 
               <p>{this.state.food}</p>
               <button onClick={() =>this.foodDetails()}>Food</button>
            </div>
        )
    }
}

export default ClassWork
