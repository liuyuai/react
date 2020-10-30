import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import { selectUserById } from "./usersSlice";
import { selectAllPosts ,selectPostsByUser } from "../posts/postsSlice";

export const UserPage = () =>{
  const {userId} = useParams();
  const user = useSelector(state => selectUserById(state,userId));
  
  // const postsForUser = useSelector(state =>{
  //   const allPost = selectAllPosts(state);
  //   return allPost.filter(post => post.user === userId)
  // });
  
  const postsForUser = useSelector(state => selectPostsByUser(state,userId));
  
  const postTitles = postsForUser.map(post => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </li>
  ));
  
  return (
      <section>
        <h2>{user.name}</h2>
        <div>Post List</div>
        <ul>
          {postTitles}
        </ul>
      </section>
  )
  
};
