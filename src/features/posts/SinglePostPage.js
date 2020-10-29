import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import {PostAuthor} from "./postAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import {selectPostById ,fetchPosts} from "./postsSlice";


export const SinglePostPage = (props) =>{
  const dispatch = useDispatch();
  const { postId } = useParams();

  const post = useSelector(state =>selectPostById(state,postId));
  
  const postStatus = useSelector(state => state.posts.status)
  
  useEffect(()=>{
    if(postStatus === 'idle'){
      dispatch(fetchPosts())
    }
  },[postStatus,dispatch]);
  
  if(!post){
    return (
        <section>
          <h2>帖子没有找到哦</h2>
        </section>
    )
  }
  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post}></ReactionButtons>
        <Link to={`/editPost/${postId}`}>修改</Link>
      </article>
    </section>
  )

};
