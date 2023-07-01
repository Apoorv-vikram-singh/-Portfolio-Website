import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiOutlineArrowUp } from "react-icons/ai";
const Footer = () =>{
    return(
        <footer>
            <div>
                <img src={"https://avatars.githubusercontent.com/u/90571448?v=4"}alt="Founder"/>
                <h2>Apoorv Vikram Singh</h2>
                <p>Motivation is temporary,but displine is permanent</p>
            </div>
            <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/thakur_vikram_rathore_____/" target={"blank"}><AiFillInstagram></AiFillInstagram></a>
                <a href="https://www.instagram.com/thakur_vikram_rathore_____/" target={"blank"}><AiFillFacebook></AiFillFacebook></a>
                <a href="https://github.com/Apoorv-vikram-singh" target={"blank"}><AiFillGithub></AiFillGithub></a>

            </article>
            </aside>
            <a href="#homee">
                <AiOutlineArrowUp></AiOutlineArrowUp>
            </a>
        </footer>
    );
};
export default Footer;