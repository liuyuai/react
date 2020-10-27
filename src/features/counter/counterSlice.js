import {createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name:"couter",
  initialState:{
    value:0
  },
  reducers:{
    increment: state => {
      state.value +=1
    },
    decrement: state => {
      state.value -=1
    },
    incrementByAmount:(state, action) => {
      state.value +=action.payload
    }
  }
});


export const { increment, decrement, incrementByAmount } = counterSlice;

export default counterSlice.reducer;