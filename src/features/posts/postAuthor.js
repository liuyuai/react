import React from "react";
import { useSelector} from "react-redux";
import {selectUserById} from '../user/usersSlice'

export const PostAuthor = ({userId}) =>{
  const author = useSelector(selectUserById)
  
  return (
      <span>
        作者:{author?author.name:"那可能不知道"}
      </span>
  )
  
}
