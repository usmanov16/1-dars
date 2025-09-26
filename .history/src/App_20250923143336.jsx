import React from 'react'

function App() {

  const initialState = {
    count: 0,
  };

  const reducer = function (state, action) {
    switch(action.type) {
      case "+":
        return {...state, count: state.count + 1};
    }
  } 
  return (
    <div>App</div>
  )
}

export default App