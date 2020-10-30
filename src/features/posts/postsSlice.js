import {createSlice, nanoid, createAsyncThunk,createSelector} from "@reduxjs/toolkit";
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


const initialState ={
  posts:  [],
  status:"idle",
  error:null
};


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
      const existingPost = state.posts.find(post => post.id === id);
      if(existingPost){
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    reactionAdded(state, action){
      const {postId, reaction} = action.payload;
      const existingPost = state.posts.find(post => post.id===postId);
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
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]:(state,action) =>{
      state.status = 'failed';
      state.error = action.error.message;
    },
    [addNewPost.fulfilled]:(state,action) =>{
      state.posts.push(action.payload);
    }
  }
});


export const {postAdded , postUpdated, reactionAdded} = postsSlice.actions;


export default postsSlice.reducer


export const selectAllPosts = state =>state.posts.posts;

export const selectPostById = (state,postId) =>
    state.posts.posts.find(post => post.id === postId);


export const selectPostsByUser  = createSelector(
    [selectAllPosts,(state,userId) =>userId],
    (posts,userId) => posts.filter(post => post.user === userId)
    
);
