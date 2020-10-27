import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import {createStore} from "redux";


const initialState = { value: 0 };

function counterReducer(state = initialState, action) {
  // Check to see if the reducer cares about this action
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1
    }
  }
  return state
}

const store = configureStore({reducer:counterReducer})

console.log(store.getState());

const increment = () =>{
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment());

//这一步就是做了一个 对象中的属性筛选
console.log(store.getState());

const selectCounterValue = state => state.value;
const CounterValue = selectCounterValue(store.getState());

console.log(CounterValue);






// function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
//
// let store = createStore(counter);
//
//
// store.subscribe(() => console.log(store.getState()));
//
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
