import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//useSelector -> Allows data extraction from the Redux store state, using a selector function
//useDispatch -> Gives the ability to dispatch an action
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);// Just extracting/pulling the counter value in the state
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Headsup from App.js</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>+</button>{/* Redux using a payload */}
      <button onClick={() => dispatch(decrement(3))}>-</button>
      {isLogged ? <h2>Welcome to teh Hood</h2> : <h2>Sorry brah, ya don't belong here</h2>}
    </div>
  );
}

export default App;
