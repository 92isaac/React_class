import React, { Component } from 'react'

class Fourth extends Component {
    render() {
        return (
            <div>
                <h1>My name is {this.props.name}, and I attended {this.props.school}</h1>
            </div>
        )
    }
}

export default Fourth
