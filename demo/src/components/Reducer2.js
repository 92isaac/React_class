import React, {useReducer} from 'react'

const Reducer2 = () => {

  const initialOrdreState={
    chicken:0,
    coke:0,
    fries:0,
    total:0
  }

  const [orderState, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case 'CHICKEN':
        return{
          ...state,
          chicken:state.chicken + action.value,
          total:state.total + action.value *3
        }
      case 'COKE':
        return{
           ...state,
          coke:state.coke + action.value,
          total:state.total + action.value *0.5
        }
      case 'FRIES':
        return{
           ...state,
          fries:state.fries + action.value,
          total:state.total + action.value
        }
      case 'RESET':
        return initialOrdreState

        default:
          return state
    }
  }, initialOrdreState)

  const buttonHandler=(type, value)=>{
    dispatch({
      type:type,
      value:value,
    })
  }

  const resetOrder=()=>{
    dispatch({
      type:'RESET'
    })
  }

  const submitOrder=()=>{
      alert(`you have submitted your order successfully $${orderState.total}`)
  
  }

  return (
    <div style={style.container}>
      <div>
        <p>pricing:$3/chicken piece, $0.5/choke, $1/fries</p>
      </div>
      <hr/>
      <div>
        <p>
          Fried Chicken:{orderState.chicken} &nbsp;
          <button onClick={()=>buttonHandler('CHICKEN', 1)}>+</button>
          <button onClick={()=>buttonHandler('CHICKEN', -1)}disabled={orderState.chicken===0}>-</button>
        </p>
      </div>
      <div>
        <p>
          Coke:{orderState.coke} &nbsp;
          <button onClick={()=>buttonHandler('COKE', +1)}>+</button>
          <button onClick={()=>buttonHandler('COKE', -1)} disabled={orderState.coke===0}>-</button>
        </p>
      </div>
      <div>
        <p>
          Fries:{orderState.fries} &nbsp;
          <button onClick={()=>buttonHandler('FRIES', +1)}>+</button>
          <button onClick={()=>buttonHandler('FRIES', -1)} disabled={orderState.fries===0}>-</button>
        </p>
        <br/>
        <p>Total:${orderState.total}</p>
        <p>
          <button onClick={resetOrder}>Reset</button>
          <button onClick={submitOrder}>Order</button>
        </p>
      </div>
    </div>
  )
}

export default Reducer2

const style={
  container:{
    padding:50
  }
}