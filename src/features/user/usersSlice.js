import {createSlice,createAsyncThunk,createEntityAdapter} from "@reduxjs/toolkit";
import {client} from "../../api/client";


export const fetchUsers = createAsyncThunk('users/fetchUsers',async () =>{
  const response = await client.get('/fakeApi/users')
  return response.users
});

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();


const usersSlice = createSlice({
  name:"users",
  initialState,
  reducers:{
  
  },
  extraReducers:{
    [fetchUsers.fulfilled]:usersAdapter.setAll
    //   (state, action) =>{
    //   return action.payload
    // }
  }
});

// export const selectAllUser = state =>state.users;
//
// export const selectUserById = (state, userId) =>
//     state.users.find(user => user.id === userId)

export const {
  selectAll: selectAllUser,
  selectById: selectUserById
} = usersAdapter.getSelectors(state => state.users)

export default usersSlice.reducer;
