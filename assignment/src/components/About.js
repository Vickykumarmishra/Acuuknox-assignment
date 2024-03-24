import React from 'react';
import { motion } from 'framer-motion';
import Services from './Services';
import { NavLink } from 'react-router-dom';
const AboutServicesComponent = () => {
  return (
    <div className='container'> 

       {/* hero start */}

    <div className='imageback' style={{backgroundImage:`url(${'mountain.jpg'})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',border:'transparent',height:'28rem',borderRadius:"15rem"}}>
    
    <div style={{backgroundColor: 'rgba(5, 185, 147, 0.6)',height:'28rem'}}>
  
 
   <motion.h1   animate={{ scale:1}}
transition={{ ease: "easeOut", duration: 1 }} style={{color:'white',marginBottom:'6rem',marginTop:'3rem',padding:'2rem',scale:0.2}}>About AccuKnox</motion.h1>
  
  <h6 style={{color:'white',marginBottom:'1rem'}}>Lorem Ipsum is placeholder text commonly used in the graphic, print, and web design industries. It resembles Latin and has no meaningful content, making it ideal for showcasing design layouts without distracting readers with readable text. Lorem Ipsum generators provide variations of this text in different lengths to suit various design needs</h6>

 ,  <NavLink to="/search"> <button className='btn btn-primary' style={{backgroundColor:'white',color:'green'}}>Search</button></NavLink>
   </div>

 </div>
    {/* hero end */}
     
     <Services></Services>
    </div>
  );
};


export default AboutServicesComponent;
