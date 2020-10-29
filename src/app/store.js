import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersSlice from '../features/user/usersSlice'

export default configureStore({
  reducer: {
    posts:postsReducer,
    users:usersSlice
  }
})
