import React from "react"
import style from "./Posts.module.css"

const Posts = function(props) {
  return(<div className={style.Posts}>
 <div> 
  <p>new post</p>
   <img id="picture" src="https://uhd.name/uploads/posts/2020-10/1604006362_30-p-yeva-adams-60.jpg" alt=""/>
   <div>{props.message}</div>
   <button>like</button></div>
 </div>
  )
}

export default Posts