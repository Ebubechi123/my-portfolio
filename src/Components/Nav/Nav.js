import React,{useState,useEffect}from "react";
import { gsap } from "gsap";
import { MenuIcon } from "../Icons/Icons";
import "./Nav.css";

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    function MenuToggle(){
        setToggle(!toggle)
    }
    useEffect(()=>{
      let tl = gsap.timeline({defaults:{duration:1}})
      tl.from(".header",{y:-70,stagger:.6,opacity:0,duration:1.5,ease:"bounce"});
    })


  return (
    <header className="header">
      <div className="nav-logo">
        <p>EBUBECHI</p>
      </div>
      <nav>
        <ul id={toggle ?`show-menu` : `menu-list`}>
          <li>Home</li>
          
          <li>About</li>
          <li>Portfolio</li>
          <li>Hire Me</li>
        </ul>
        <div onClick={MenuToggle} className="burger-menu">
          <MenuIcon  />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
