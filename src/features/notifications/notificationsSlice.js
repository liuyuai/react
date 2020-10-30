import {createSlice,createAsyncThunk,createEntityAdapter} from "@reduxjs/toolkit";

import {client} from "../../api/client";

export const fetchNotifications = createAsyncThunk(
    'notification/fetchNotifications',
    async (_,{ getState }) =>{
      const allNotifications = selectAllNotifications(getState())
      const [latestNotification] = allNotifications;
      const latestTimestamp = latestNotification?latestNotification.date:""
      const response = await client.get(
          `/fakeApi/notifications?since=${latestTimestamp}`
      )
      return response.notifications;
    }
);

const notificationsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
})


const notificationSlice = createSlice({
  name:'notifications',
  initialState:notificationsAdapter.getInitialState(),
  reducers:{
    allNotificationsRead(state, action){

      // state.forEach(notification =>{
      //       //   notification.read = true
      //       // })

      Object.values(state.entities).forEach(notification => {
        notification.read = true
      })

    }
  },
  extraReducers:{
    [fetchNotifications.fulfilled]:(state,action) =>{


      // state.forEach(notification =>{
      //   notification.isNew = !notification.read
      // });
      // state.push(...action.payload);

      Object.values(state.entities).forEach(notification => {
        notification.isNew = !notification.read
      });
      notificationsAdapter.upsertMany(state, action.payload)

    }
  }
}
);

export default notificationSlice.reducer;

export const {allNotificationsRead} = notificationSlice.actions;

// export const selectAllNotifications = state => state.notifications;

export const {
  selectAll: selectAllNotifications
} = notificationsAdapter.getSelectors(state => state.notifications)

