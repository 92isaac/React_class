import React, { Component } from 'react'

export class HookCounter3 extends Component {

constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}
componentDidMount(){
  document.title=`clicked ${this.state.count} times`
}

componentDidUpdate(prevprops, prevstate){
  document.title=`clicked ${this.state.count} times`
}


  render() {
    return (
      <div>
        <button onClick={()=>this.setState({
          count:this.state.count +1
        })}>Count{this.state.count}times</button>
      </div>
    )
  }
}

export default HookCounter3
