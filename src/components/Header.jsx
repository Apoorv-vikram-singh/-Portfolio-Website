import React from "react";
import {AiOutlineMenu} from "react-icons/ai";
const Header = ({setmenuOpne,menuOpen})=>{
    return (
        <>
    <nav>
        <NavContent  setmenuOpne={setmenuOpne}/>
      
    </nav>
    <button className="navBtn" onClick={()=>setmenuOpne(!menuOpen)}>
            <AiOutlineMenu />
        </button>
        </>
    );
};

export const HeaderPhone =({menuOpen,setmenuOpne})=>{
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
        <NavContent setmenuOpne={setmenuOpne}/>
        </div>
    );
};


export const NavContent =({setmenuOpne})=>(
    <>
        <h2>Apoorv Vikram</h2>
        <div>
            <a onClick={()=>setmenuOpne(false)} href="#homee">Home</a>
            <a onClick={()=>setmenuOpne(false)} href="#work">Word</a>
            <a onClick={()=>setmenuOpne(false)} href="#timeline">Experience</a>
            <a onClick={()=>setmenuOpne(false)} href="#service">Services</a>
            <a onClick={()=>setmenuOpne(false)} href="#testimonial">Testimonial</a>
            <a onClick={()=>setmenuOpne(false)} href="#contact">Contact</a>
        </div>
        <a href="mailto:official.apoorvvikramsinghrathore@gmail.com">
            <button>Email</button>
        </a>
    </>
);
export default Header;