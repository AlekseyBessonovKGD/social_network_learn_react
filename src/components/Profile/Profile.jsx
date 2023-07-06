import React from "react"
import style from "./Profile.module.css"
import NewPosts from "./NewPost/NewPosts"
import Posts from "./Posts/Posts"

const Profile = function() {
  return(<div className={style.Profile}>
    <div>
      <img className={style.img}src="https://www.wallpaperflare.com/static/118/771/656/brazil-beach-sea-palm-trees-wallpaper.jpg" alt="" /> 
    </div>
 <div>avatar + description</div>
 <NewPosts/>
 <Posts message = 'hello world' />
 <Posts message = 'hello world again' />  
</div>)
}

export default Profile