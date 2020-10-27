
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

//相当于 一个方法 可以同时创建多个 store下的属性
export default configureStore({
  reducer:{
    counter:counterReducer
  }
})
