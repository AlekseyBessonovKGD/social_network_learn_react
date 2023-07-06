import React from "react"
import style from "./NewPosts.module.css"

const NewPosts = function() {
  return(<div className={style.MyPosts}>
 <div> <p>add new post</p>
   <img id="picture-post" src="./ava.jpg" alt=""></img>
   <div><textarea name="" id="" cols="30" rows="5"></textarea>
   <button>send</button></div>
 </div>
</div>)
}

export default NewPosts