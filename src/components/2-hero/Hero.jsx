import React from "react";
import './hero.css';
import Lottie from "lottie-react";
import { useTypewriter } from 'react-simple-typewriter';

function Hero() {
   const [typeEffect] = useTypewriter({
      words: ['Web GIS Developer'],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 50,
   });

   return (
      <div className="app">
         <section className="Hero flex">
            <div className="left">
               <div className="img-avatar flex">
                  <img className="avatar" src="./react-modified.png" alt="" />
                  <div className="icon-verified"></div>
               </div>
               <button className="btn-left">welcome All In My Portfolio</button>
               <h1 className="wwriter">
                  Hi, I am Abdel Basset Ali
               </h1>
               <span className="wwriter">{typeEffect}</span>
               <p className="p1">Hello everyone, I am a Web GIS Developer specializing in building interactive web mapping applications and spatial data visualization.</p>
               <div className="icon-left flex">
                  <div className="icon-1 icon-github"></div>
                  <div className="icon-1 icon-twitter"></div>
               </div>
               <div className="letscon flex">
                  <span className="LETS">Let’s Connect</span>
                  <span className="icon-arrow-right-circle aroow"></span>
               </div>
            </div>
            
            <div className="right animation">
                <Lottie path="/anemation/lottie-lego.json" loop={true} />       
            </div> {/* أضفنا قفلة الـ div هنا */}
         </section>
      </div>
   );
}

export default Hero;
