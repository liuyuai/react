import {createSlice} from "@reduxjs/toolkit";


const initialState =[
  { id: '0', name: '李磊' },
  { id: '1', name: '韩梅梅' },
  { id: '2', name: 'Mark' }
];



const usersSlice = createSlice({
  name:"users",
  initialState,
  reducers:{
  
  }
});

export default usersSlice.reducer;
