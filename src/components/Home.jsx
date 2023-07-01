import React, { useRef } from "react";
import {animate, motion} from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs";
import me from "../assets/ap.png"
const Home =({ratio})=>{


        const clienCount=useRef(null);
        const ProjectCount=useRef(null);

        const animationsClientCount=()=>{
             animate(0,5,{
                duration:1,
                onUpdate:((v)=>clienCount.current.textContent =v.toFixed()),
             });
        };
        const animationsProjectCount=()=>{
            animate(0,5,{
               duration:1,
               onUpdate:((v)=>ProjectCount.current.textContent =v.toFixed()),
            });
       };

    const animations={
         h1:{
            initial:{
                x:"-100%",
                opacity:0,
            },
            whileInView:{
                x:0,
                opacity:1,
            },
         },
         button:{
            initial:{
                y:"-100%",
                opacity:0,
            },
            whileInView:{
                y:0,
                opacity:1,
            },
         },
    }
    return(
    <div id="homee">
    <section>
        <div>
            <motion.h1 {...animations.h1}>
                    Hi, I Am <br/> Apoorv Vikram
            </motion.h1>
        <Typewriter options={{
            strings:["A Developer","A Designer","A Creator","A BackEnd Master"],
            autoStart:true,
            loop:true,
            cursor:"",
            wrapperClassName:"typewriterpara",

        }}>

        </Typewriter>
        <div>
        <a href="mailto:official.apoorvvikramrathore@gmail.com">Hire me</a>
        <a href="#work">Projects <BsArrowUpRight/>
        </a>
        </div>

        <article>
            <p>
            +{
                ratio < 3 && (
                    <motion.span whileInView={animationsClientCount} ref={clienCount}></motion.span>
                )
            }
            </p>
            <spam>Clients Worldwide</spam>
        </article>
        <aside>
        <article>
            <p>
                +{
                    ratio < 3 && (
                        <motion.span whileInView={animationsProjectCount} ref={ProjectCount}></motion.span>
                    )
                }
                
            </p>
            <spam>Projects Done</spam>
        </article>
        <article data-special>
            <p>Contact</p>
            <spam>apoorvvikramsinghrathore@gmail.com</spam>
        </article>
        </aside>

        </div>
    </section>
    <section>
        <img src={me} alt="Apoorv"></img>
    </section>
    <BsChevronDown/>
    </div>
    );
};
export default Home; 