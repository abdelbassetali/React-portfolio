import React, { useState } from "react";
import './boot.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Boot(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <div>
            <h1 className="skills-h1">Skills</h1>
            <p className="skills-h2">You Can See My Skills Here</p>

        <Carousel className="yaso" responsive={responsive}>
            
        <div>    
                <div className="skill">
                <div className="skills">
                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                82%
                            </div>

                        </div>
                        <div className="jopp">
                        Webdeveloper
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="30%" stop-color="navy" />
                                <stop offset="70%" stop-color="gray" />

                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </div></div>



  <div>    
            <div className="skill">
                <div className="skills">

                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                95%
                            </div>

                        </div>
                        <div className="jopp">
                            frontend
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="30%" stop-color="navy" />
                                <stop offset="70%" stop-color="gray" />

                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </div></div>

  <div>    
            <div className="skill">
                <div className="skills">

                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                85%
                            </div>

                        </div>
                        <div className="jopp">
                            backend
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="30%" stop-color="navy" />
                                <stop offset="70%" stop-color="gray" />

                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </div></div>

  <div>
        
  <div className="skill">
                <div className="skills">

                    <div className="outer">
                        <div className="inner">
                            <div id="number">
                                75%
                            </div>

                        </div>
                        <div className="jopp">
                        Web designer
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="30%" stop-color="navy" />
                                <stop offset="70%" stop-color="gray" />

                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
  </div>
   </Carousel>
   </div>
      )




// const aly = () => {
//     return (
       
//         <div className="BOOT flex">
            
            
//             <div className="skill">
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 75%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                             development
//                         </div>
//                     </div>
//                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
//                         <defs>
//                             <linearGradient id="GradientColor">
//                                 <stop offset="30%" stop-color="navy" />
//                                 <stop offset="70%" stop-color="gray" />

//                             </linearGradient>
//                         </defs>
//                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//                     </svg>
//                 </div>
//             </div>
//             <div className="skill">
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 75%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                             development
//                         </div>
//                     </div>
//                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
//                         <defs>
//                             <linearGradient id="GradientColor">
//                                 <stop offset="0%" stop-color="black" />
//                                 <stop offset="100%" stop-color="gray" />
//                             </linearGradient>
//                         </defs>
//                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//                     </svg>
//                 </div>
//             </div>
//             <div className="skill">
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 75%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                             development
//                         </div>
//                     </div>
//                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
//                         <defs>
//                             <linearGradient id="GradientColor">
//                                 <stop offset="0%" stop-color="black" />
//                                 <stop offset="100%" stop-color="gray" />
//                             </linearGradient>
//                         </defs>
//                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//                     </svg>
//                 </div>
//             </div>  <div className="skill">
            
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 75%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                             development
//                         </div>
//                     </div>
//                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
//                         <defs>
//                             <linearGradient id="GradientColor">
//                                 <stop offset="0%" stop-color="black" />
//                                 <stop offset="100%" stop-color="gray" />
//                             </linearGradient>
//                         </defs>
//                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//                     </svg>
//                 </div>
//             </div>
            
            
//         </div>

        
        
//     )
// }
}
export default Boot;
