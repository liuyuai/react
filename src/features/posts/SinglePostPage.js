import React from "react";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'


export const SinglePostPage = (props) =>{

  console.log(props);

  // const url = useParams();
  // console.log(url);

  const { postId } = useParams();

  const post = useSelector(state =>state.posts.find(post =>post.id===postId));
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
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${postId}`}>修改</Link>
      </article>
    </section>
  )

};