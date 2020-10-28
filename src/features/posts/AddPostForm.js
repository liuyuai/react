import React, { useState }  from "react";
import { useDispatch} from "react-redux";
import {nanoid} from "@reduxjs/toolkit";

import {postAdded} from "./postsSlice";


export const AddPostForm = () =>{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const dispatch = useDispatch();
  
  
  const onTittleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  
  const onSavePostClicked  = () =>{
    if(title&&content){
      dispatch(postAdded(title,content))
      setTitle('');
      setContent('');
    }
  };
  
  return (
      <section>
        <h2>创建帖子</h2>
        <form>
          <label htmlFor="postTitle">
            帖子标题
          </label>
          <input type="text" name="postTitle" value={title} onChange={onTittleChange}/>
          <label htmlFor="postContent">
            内容
          </label>
          <textarea name="postContent" value={content} onChange={onContentChange} cols="30" rows="10"></textarea>
          <button type="button" onClick={onSavePostClicked }>
            保存
          </button>
        </form>
      </section>
  )
};
