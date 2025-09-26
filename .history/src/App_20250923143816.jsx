import React, { useReducer } from 'react'

const initialState = {
  count: 0,
};

const reducer = function (state, action) {
  switch(action.type) {
    case "+":
      return {...state, count: state.count + 1};
      case "-":
        return {...state, count: state.count - 1};
        case "reset": 
        return {...state, count: 0}
        default:
          return {...state}
  }
} ;


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  

 
  return (
    <div>
      <button onClick={()=> dispatch({type: "+"})} type="button">+</button>
      <button onClick={()=> dispatch({type: "-"})} type="button">-</button>
    </div>
    
  )
}

export default App