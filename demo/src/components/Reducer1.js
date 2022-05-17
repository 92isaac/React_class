import React, {useReducer} from 'react'

const Reducer1 = () => {
  const initialState={
    name:"", isValid:'false',
  }

  const[nameState, dispatch]=useReducer((state, action)=>{
    switch(action.type){
      case 'CHANGE' :
        return{
          name:action.value,
          isValid:action.value.length>2 ?true : false,
        }
        case 'SUBMIT':
          return{
            ...initialState,
          }

          default:
            return state
    }

  }, initialState)

  const handleChange=(event)=>{
    dispatch({
      type:'CHANGE',
      value:event.target.value
    })
  }

  const submitHandler=(event)=>{
    event.preventDefault();
    alert(nameState.name)
    dispatch({
      type:'SUBMIT'
    })
  }

  return (
    <div>
      <form style={styles.container}>
        <input type="text" value={nameState.value} onChange={handleChange} style={styles.input}/>
        <button disabled={!nameState.isValid} onClick={submitHandler}>SUBMIT</button>
      </form>
    </div>
  )
}

export default Reducer1

const styles={
  container:{
    padding:50
  }
}