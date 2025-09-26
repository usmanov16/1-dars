import React from 'react'

function App() {

  const initialState = {
    count: 0,
  };

  const reducer = function (state, action) {
    switch(action.type) {
      case "+":
        return {...state, count}
    }
  } 
  return (
    <div>App</div>
  )
}

export default App