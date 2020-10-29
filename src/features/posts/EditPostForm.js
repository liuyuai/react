import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useHistory, useParams} from 'react-router-dom'
import { postUpdated,selectPostById  } from './postsSlice'


export const EditPostForm = () =>{
  const { postId } = useParams();
  const post = useSelector(state => selectPostById(state,postId));

  const [title,setTitle] =useState(post.title);
  const [content,setContent] = useState(post.content);

  const dispatch = useDispatch();
  const history = useHistory();

  const onTittleChange =(e) =>{
    setTitle(e.target.value);
  };
  const onContentChange = (e) =>{
    setContent(e.target.value);
  };
  const onSavePostClicked =(e) =>{
    if(title&&content){
      dispatch(postUpdated({
        id: post.id,
        title,
        content
      }));
      history.push(`/posts/${postId}`)
    }
  };

  return (
    <section>
      <h2>修改帖子</h2>
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
