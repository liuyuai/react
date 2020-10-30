import {createSlice, nanoid, createAsyncThunk,createSelector,createEntityAdapter} from "@reduxjs/toolkit";
import {client} from "../../api/client";

export const fetchPosts = createAsyncThunk('posts/fetchPosts',async () => {
  // 这样的符合 函数式编程
  const response = await client.get('/fakeApi/posts');
  return response.posts;
});

export const addNewPost =  createAsyncThunk(
    'posts/addNewPost',
    async initialPost =>{
      const response = await client.post('/fakeApi/posts',{post:initialPost});
      //这里有一个问题不太明白啊  这里不是已经完成了ajax请求么
      return response.post;
    }
);


const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
});

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
});

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts);

console.log(postsAdapter);



const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded:{
      reducer:(state, action) => {
        state.posts.push(action.payload)
      },
        prepare:(title, content, userId) =>{
        return {
          payload:{
            id: nanoid(),
            date:new Date().toISOString(),
            title,
            content,
            user:userId,
            reactions: {
              thumbsUp: 0,
              hooray: 0,
              heart:0,
              rocket:0,
              eyes:0}
          }
        }
      }
    },
    postUpdated:(state, action) => {
      const {id,title,content} = action.payload;
      // const existingPost = state.posts.find(post => post.id === id);
      const existingPost = state.entities[id];
      if(existingPost){
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action){
      const {postId, reaction} = action.payload;
      // const existingPost = state.posts.find(post => post.id===postId);
      const existingPost = state.entities[postId];
      if(existingPost){
        existingPost.reactions[reaction]++
      }
    }
  },
  extraReducers:{
    [fetchPosts.pending]:(state,action) =>{
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]:(state, action) =>{
      state.status = 'succeeded';
      // state.posts = state.posts.concat(action.payload);
      postsAdapter.upsertMany(state, action.payload)
    },
    [fetchPosts.rejected]:(state,action) =>{
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewPost.fulfilled]:postsAdapter.addOne
    //   (state,action) =>{
    //   state.posts.push(action.payload);
    // }
  }
});


export const {postAdded , postUpdated, reactionAdded} = postsSlice.actions;


export default postsSlice.reducer


// export const selectAllPosts = state =>state.posts.posts;

// export const selectPostById = (state,postId) =>
//     state.posts.posts.find(post => post.id === postId);


export const selectPostsByUser  = createSelector(
    [selectAllPosts,(state,userId) =>userId],
    (posts,userId) => posts.filter(post => post.user === userId)
    
);
