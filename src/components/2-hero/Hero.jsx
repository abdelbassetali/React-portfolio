import React from "react";
import './hero.css'
import Lottie from "lottie-react"
import imgAnimation from "../../../public/anemation/Lottie Lego .json"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Hero() {
   const [typeEffect] = useTypewriter({
      words: [' Front-end developer', ' Back-end developer', ' React developer'],
      loop: {},
      typeSpeed: 300,
      deleteSpeed: 150,
   })
   return (
      <div className="app">
         <section className="Hero flex">
            <div className="left ">
               <div className="img-avatar flex">
                  <img className="avatar" src="./react-modified.png" alt="" />
                  <div className="icon-verified"></div>
               </div>
               <button className="btn-left" > welcome All In My Portfolio</button>
               <h1 className="wwriter">
                  Hi, I am Abdel Basset Ali
               </h1>
               <span className="wwriter">{typeEffect}</span>
               <p className="p1">Hello everyone, I have one year of experience in the web development</p>
               <div className="icon-left flex">
                  <div className="icon-1 icon-github"></div>
                  <div className="icon-1 icon-twitter"></div>
               </div>
               <div className="letscon flex">
                  <span className="LETS">Let’s Connect</span>
                  <span className="icon-arrow-right-circle aroow"></span>
               </div>
            </div>
            <div className="right animation ">
               <Lottie animationData={imgAnimation} />
            </div>
         </section>
      </div>
   )

}

export default Hero;
