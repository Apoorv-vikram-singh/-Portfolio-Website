import React from "react";
import {motion} from "framer-motion";
import {AiFillIeCircle,AiFillAndroid,AiFillWindows} from "react-icons/ai";
const Service=()=>{

        const animation={
            whileInView:{
                x:0,
                y:0,
                opacity:1,
            },
            one:{
                x:"-100%",
                opacity:0,
            },
            twoandthree:{
                y:"-100%",
                opacity:0,
            },
            four:{
                x:"100%",
                opacity:0,
            },
        };

    return(
    <div id="service">
        <h2>Service</h2>
        <section>
        <motion.div className="serviceBox1" whileInView={animation.whileInView} 
        initial={animation.one}>
            <h3>3+</h3>
            <p>Project Experience</p>
            
        </motion.div>
        <motion.div className="serviceBox2"whileInView={animation.whileInView}
        initial={animation.twoandthree}
        transition={{
            delay:0.2,
        }}>
            <AiFillIeCircle/>
            <span>Web Development</span>
            
        </motion.div>
        <motion.div className="serviceBox3"whileInView={animation.whileInView}
                initial={animation.twoandthree}>
            <AiFillAndroid/>
            <span>App Development</span>
            
        </motion.div>
        <motion.div className="serviceBox4"whileInView={animation.whileInView}
                initial={animation.four}>
            <AiFillWindows/>
            <span>Backend MAster Development</span>
            
        </motion.div>
        </section>
    </div>
    );
};
export default Service;