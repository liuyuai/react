import React, { useState }  from "react";
import { useDispatch, useSelector} from "react-redux";
import { unwrapResult} from "@reduxjs/toolkit";

import {postAdded, addNewPost} from "./postsSlice";
import {selectAllUser} from '../user/usersSlice'



export const AddPostForm = () =>{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  
  const dispatch = useDispatch();
  
  const users = useSelector(selectAllUser);
  
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const onTittleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';
  
  const onSavePostClicked  = async () =>{
    if(canSave){
      try{
        setAddRequestStatus('pending');
        const resultAction = await dispatch(
            addNewPost({ title, content, user: userId })
        );
        unwrapResult(resultAction);//这个函数需要去理解
        setTitle('');
        setContent('');
        setUserId('');
      }catch (e) {
        console.error('Failed to save the post: ', e)
      }finally {
        setAddRequestStatus('idle')
      }
    }
  };
  
  
  
  const usersOptions = users.map(user =>(
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
  ));
  return (
      <section>
        <h2>创建帖子</h2>
        <form>
          <label htmlFor="postTitle">
            帖子标题
          </label>
          <input type="text" name="postTitle" value={title} onChange={onTittleChange}/>
          <label htmlFor="postAuthor">Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value=""></option>
            {usersOptions}
          </select>
          <label htmlFor="postContent">
            内容
          </label>
          <textarea name="postContent" value={content} onChange={onContentChange} cols="30" rows="10"></textarea>
          <button type="button"disabled={!canSave}  onClick={onSavePostClicked }>
            保存
          </button>
        </form>
      </section>
  )
};
