import React from "react";
const Header =()=>{
    return <nav>
        <NavContent/>
    </nav>
};


const NavContent =()=>(
    <>
        <h2>Apoorv Vikram</h2>
        <div>
            <a href="#homee">Home</a>
            <a href="#work">Word</a>
            <a href="#timeline">Experience</a>
            <a href="#service">Services</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="mailto:official.apoorvvikramsinghrathore@gmail.com">
            <button>Email</button>
        </a>
    </>
);
export default Header;