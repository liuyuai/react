import React from "react";
import { useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import {PostAuthor} from "./postAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import { selectAllPosts } from './postsSlice'


export const PostsList=()=>{
  const posts = useSelector(selectAllPosts);
  const orderedPostList = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
  
  const renderPosts = orderedPostList.map(post => (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <PostAuthor userId={post.user}></PostAuthor>
        <TimeAgo timestamp={post.date}></TimeAgo>
        <p>{post.content.substring(0,100)}</p>
        <Link to={`/posts/${post.id}`} className="button muted-button">显示全部</Link>
        <ReactionButtons post={post}></ReactionButtons>
      </article>
  ));
  
  
  return (
      <section>
        <h2>Posts</h2>
        {renderPosts}
      </section>
  )

};
