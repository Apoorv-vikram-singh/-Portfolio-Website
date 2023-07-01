import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer"
import { useEffect, useState } from "react";
function App(){

  const[menuOpen,setmenuOpne]=useState(false);
  const[ratio,setRation]=useState(window.innerWidth/window.innerHeight);
console.log(ratio);

useEffect(()=>{
  const resizeRatio=()=>{
    setRation(window.innerWidth/window.innerHeight);
  };
  window.addEventListener("resize",resizeRatio);
  return() =>{
    window.removeEventListener("resize",resizeRatio);
  };
},[ratio]);


  return ratio<3 ? ( 
    <>
      <HeaderPhone menuOpen={menuOpen} setmenuOpne={setmenuOpne} />
      <Header menuOpen={menuOpen} setmenuOpne={setmenuOpne}/>
      <Home ratio={ratio}/>
      <Work/>
      <Timeline/>
      <Service/>
      <Testimonial/>
      <Contact/>
      <Footer/>
  
      
    </>
    ):<em id="customMessage">Please change the ratio to view!</em>
}
export default App;