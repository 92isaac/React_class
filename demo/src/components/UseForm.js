import React, {useState} from 'react'

function UseForm() {
  const [userN, setUserN]=useState({username:'', comment:'',topics:'HTML', message:''})
  // const user=()=>{
  //   setUserN(userN:e.target.value)
  // }

  const handleSubmit=(event)=>{
    event.preventDefault()
    setUserN({username:event.target.value, comment:event.target.value, topics:event.target.value})
    
  }


  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div>
        <label>username</label>
        <input type="text" value={userN.username} onChange={e=> setUserN({username:e.target.value})}/>
        <label>Comment</label>
        <textarea value={userN.comment} onChange={e=> setUserN({comment:e.target.value})}/>
        </div>


        <div>
          <label>Topics</label>
          <select value={userN.topics} onChange={e=> setUserN({topics:e.target.value})}>
            <option value='CSS'>CSS</option>
            <option value='HTML'>HTML</option>
            <option value='JavaScript'>JavaScript</option>
            <option value='React'>React</option>
          </select>
        </div>
          <h1>{message}</h1>
        <button type="submit" onSubmit={()=>handleSubmit()}>Submit</button>
        
        </form>
    </div>
  )
}

export default UseForm
