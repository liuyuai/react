import React,{ useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import {PostAuthor} from "./postAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import { selectAllPosts, fetchPosts } from './postsSlice'


export const PostsList=()=>{
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  // const orderedPostList = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  
  const postStatus = useSelector(state =>state.posts.status);
  const error = useSelector(state =>state.posts.error);
  
  useEffect(() =>{
    if(postStatus === "idle"){
      dispatch(fetchPosts())
    }
  },[postStatus,dispatch]);
  let content;
  if(postStatus === 'loading'){
    content = <div className="loader">Loading...</div>
  }else if(postStatus === 'succeeded'){
    const orderedPosts = posts
        .slice()
        .sort((a,b) =>b.date.localeCompare(a.date));
    content = orderedPosts.map(post =>(
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <PostAuthor userId={post.user}></PostAuthor>
          <TimeAgo timestamp={post.date}></TimeAgo>
          <p>{post.content}</p>
          <Link to={`/posts/${post.id}`} className="button muted-button">显示全部</Link>
          <ReactionButtons post={post}></ReactionButtons>
        </article>
    ))
  }else if(postStatus === 'failed'){
    content = <div>{error}</div>
  }
  
  
  // const renderPosts = orderedPostList.map(post => (
  //
  // ));
  
  
  return (
      <section>
        <h2>Posts</h2>
        {content}
      </section>
  )

};
