import React from "react"
import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom"


function NavBar() {
  return(
  <nav className={style.nav}>
 <div className = {style.link}>
   <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="profile" >profile</NavLink>
 </div>
 <div className = {style.link}>
  <NavLink  className={({ isActive }) => isActive ? style.active : undefined} to="friends">friends</NavLink>
  </div>
  <div className = {style.link}>
   <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="messages">message</NavLink>
 </div>
 <div className = {style.link}>
   <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="news">news</NavLink>
 </div>
 <div className = {style.link}>
  <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="games">games</NavLink>
  </div>
  <div className = {style.link}>
   <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="music">music</NavLink>
 </div>
 <div className = {style.link}>
   <NavLink className={({ isActive }) => isActive ? style.active : undefined} to="settings">settings</NavLink>
 </div>
</nav>
)
}

export default NavBar