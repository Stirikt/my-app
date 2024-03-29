import React from "react";
import {  NavLink } from "react-router-dom";
import s from './Navbar.module.css'

 

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item} >
        <NavLink to ="/profile" >Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
      <NavLink  to ="/dialogs" >Messages</NavLink>
      </div>
      <div className={s.item}>
        <a href="#!" >News</a>
      </div>
      <div className={s.item}>
        <a href="#!" >Music</a>
      </div>
      <div className={s.item}>
        <a href="#!" >Settings</a>
      </div>
    </nav>
  )
}

export default Navbar