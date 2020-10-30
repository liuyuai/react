import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/user/usersSlice'
import notificationReducer from "../features/notifications/notificationsSlice";

export default configureStore({
  reducer: {
    posts:postsReducer,
    users:usersReducer,
    notifications:notificationReducer
  }
})
