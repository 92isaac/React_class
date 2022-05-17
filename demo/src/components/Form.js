import React, { Component } from 'react'

export class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username:'', comment:'', topics:''
    }
  }
  
  handleUsername=(tumi)=>{
    this.setState({
      username:tumi.target.value
    })
  }

   handleChange=(tumi)=>{
    this.setState({
      username:tumi.target.value
    })
  }

   handleComment=(tumi)=>{
    this.setState({
      comment:tumi.target.value
    })
  }
  handleType=(tumi)=>{
    this.setState({
      comment:tumi.target.value
    })
  }


   handleTopic=(tomi)=>{
    this.setState({
      topics:tomi.target.value
    })
  }

   topicChange=(tomi)=>{
    this.setState({
      topics:tomi.target.value
    })
  }

  handleSubmit=(tomi)=>{
    tomi.preventDefault()
    alert(`${this.state.username} ${this.state.comment} ${this.state.topics}`)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <form>
        <label>username</label>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
        <label>Comment</label>
        <textarea value={this.state.comment} onChange={this.handleType}/>
        </form>


        <form>
          <label>Topics</label>
          <select value={this.state.topics} onChange={this.topicChange}>
            <option value='CSS'>CSS</option>
            <option value='HTML'>HTML</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='React'>React</option>
          </select>
        </form>

        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
