import React from 'react'

const Third = (props) => {
    return (
        <div>
            {/* <h1>My name is {props.name}, and I attended {props.school}</h1> */}
            {props.children}
        </div>
    )
}

export default Third 
