import React from "react";
import { useSelector} from "react-redux";

export const PostAuthor = ({userId}) =>{
  const author = useSelector(state =>{
    return state.users.find(user =>user.id === userId)
  })
  
  return (
      <span>
        作者:{author?author.name:"那可能不知道"}
      </span>
  )
  
}
