import React, { useState }  from "react";
import { useDispatch, useSelector} from "react-redux";

import {postAdded} from "./postsSlice";


export const AddPostForm = () =>{
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setuserId] = useState('');
  
  const dispatch = useDispatch();
  
  const users = useSelector(state => state.users);
  
  const onAuthorChanged = (e) => setuserId(e.target.value);
  const onTittleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  
  const onSavePostClicked  = () =>{
    if(title&&content){
      dispatch(postAdded(title,content,userId))
      setTitle('');
      setContent('');
    }
  };
  
  const canSave = title&&content&&userId;
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
