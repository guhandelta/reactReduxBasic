import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";


//Action => Describes what is to be done --> a simple fn() that returns an obj
const increment = () => {
    return {
        type: 'INCREMNT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//Reducer => Describes how the Actions transfrom the state
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMNT':
            return state + 1;

        case 'DECREMENT':
            return state + 1;
    }
};

//Store => Holds all the data or the state for the application, which can be accessed from anywhere
let store = createStore(counter);

// Do something when the state changes => just console logging something in this case
store.subscribe(() => console.log(store.getState()));

// Dispatching an action
store.dispatch(increment());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
