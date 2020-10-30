import React,{ useEffect} from "react";
import { useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import {PostAuthor} from "./postAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import { selectAllPosts, fetchPosts,selectPostById,selectPostIds } from './postsSlice'



let PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        查看全部
      </Link>
    </article>
  )
}


export const PostsList=()=>{
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);
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
    // const orderedPosts = posts
    //     .slice()
    //     .sort((a,b) =>b.date.localeCompare(a.date));
    content = orderedPostIds.map(postId => (
      <PostExcerpt key={postId} postId={postId} />
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
