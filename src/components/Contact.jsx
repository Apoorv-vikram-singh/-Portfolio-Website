import React, { useState } from "react";
import vg from "../assets/vg.png";
const Contact =()=>{

        const[name,setName]=useState("");
        const[email,setEmail]=useState("");
        const[message,setMessage]=useState("");


        const submitHandler=(e)=>{
            e.preventDefault();
            console.log(name,email,message);
        }


    return(
        <div id="contact">
            <section>
                <form onSubmit={submitHandler}>
                    <h2>Contact me</h2>
                    
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" required></input>
                    
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your Email" required></input>
                    <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your Message" required></input>
                    <button type="submit">Send</button>

                </form>
            </section>
            <aside>
                <img src={vg} alt=""></img>
            </aside>

        </div>
    ) 
}
export default Contact;