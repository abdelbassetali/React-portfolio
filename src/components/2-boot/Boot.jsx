import React from "react";
import './boot.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Boot() {
    const responsive = {
        superLargeDesktop: {
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

    // الترتيب الجديد والنسب المطلوبة بالظبط
    const skillsList = [
        { percentage: "85%", title: "Web GIS", offset: "66" },          // 1. Web GIS
        { percentage: "80%", title: "JavaScript", offset: "88" },      // 2. JavaScript
        { percentage: "85%", title: "GIS Tools", offset: "66" },       // 3. GIS Tools
        { percentage: "85%", title: "Spatial Analysis", offset: "66" } // 4. Spatial Analysis
    ];

    return (
        <div>
            <h1 className="skills-h1">Technical Skills</h1>
            <p className="skills-h2">You Can See My Skills Here</p>

            <Carousel className="yaso" responsive={responsive}>
                {skillsList.map((skill, index) => (
                    <div key={index}>
                        <div className="skill">
                            <div className="skills">
                                <div className="outer">
                                    <div className="inner">
                                        <div id="number">
                                            {skill.percentage}
                                        </div>
                                    </div>
                                    <div className="jopp">
                                        {skill.title}
                                    </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                            <stop offset="30%" stopColor="navy" />
                                            <stop offset="70%" stopColor="gray" />
                                        </linearGradient>
                                    </defs>
                                    <circle 
                                        cx="80" 
                                        cy="80" 
                                        r="70" 
                                        strokeLinecap="round" 
                                        style={{
                                            strokeDasharray: 440,
                                            strokeDashoffset: skill.offset
                                        }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Boot;

// import React, { useState } from "react";
// import './boot.css'
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// function Boot(){
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//       return(
//         <div>
//             <h1 className="skills-h1">Skills</h1>
//             <p className="skills-h2">You Can See My Skills Here</p>

//         <Carousel className="yaso" responsive={responsive}>
            
//         <div>    
//                 <div className="skill">
//                 <div className="skills">
//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 85%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                        Web GIS
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
//             </div></div>



//   <div>    
//             <div className="skill">
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 80%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                            Frontend
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
//             </div></div>

//   <div>    
//             <div className="skill">
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 85%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                             GIS Tools
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
//             </div></div>

//   <div>
        
//   <div className="skill">
//                 <div className="skills">

//                     <div className="outer">
//                         <div className="inner">
//                             <div id="number">
//                                 80%
//                             </div>

//                         </div>
//                         <div className="jopp">
//                         JavaScript
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
//   </div>
//    </Carousel>
//    </div>
//       )




// // const aly = () => {
// //     return (
       
// //         <div className="BOOT flex">
            
            
// //             <div className="skill">
// //                 <div className="skills">

// //                     <div className="outer">
// //                         <div className="inner">
// //                             <div id="number">
// //                                 75%
// //                             </div>

// //                         </div>
// //                         <div className="jopp">
// //                             development
// //                         </div>
// //                     </div>
// //                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
// //                         <defs>
// //                             <linearGradient id="GradientColor">
// //                                 <stop offset="30%" stop-color="navy" />
// //                                 <stop offset="70%" stop-color="gray" />

// //                             </linearGradient>
// //                         </defs>
// //                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
// //                     </svg>
// //                 </div>
// //             </div>
// //             <div className="skill">
// //                 <div className="skills">

// //                     <div className="outer">
// //                         <div className="inner">
// //                             <div id="number">
// //                                 75%
// //                             </div>

// //                         </div>
// //                         <div className="jopp">
// //                             development
// //                         </div>
// //                     </div>
// //                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
// //                         <defs>
// //                             <linearGradient id="GradientColor">
// //                                 <stop offset="0%" stop-color="black" />
// //                                 <stop offset="100%" stop-color="gray" />
// //                             </linearGradient>
// //                         </defs>
// //                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
// //                     </svg>
// //                 </div>
// //             </div>
// //             <div className="skill">
// //                 <div className="skills">

// //                     <div className="outer">
// //                         <div className="inner">
// //                             <div id="number">
// //                                 75%
// //                             </div>

// //                         </div>
// //                         <div className="jopp">
// //                             development
// //                         </div>
// //                     </div>
// //                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
// //                         <defs>
// //                             <linearGradient id="GradientColor">
// //                                 <stop offset="0%" stop-color="black" />
// //                                 <stop offset="100%" stop-color="gray" />
// //                             </linearGradient>
// //                         </defs>
// //                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
// //                     </svg>
// //                 </div>
// //             </div>  <div className="skill">
            
// //                 <div className="skills">

// //                     <div className="outer">
// //                         <div className="inner">
// //                             <div id="number">
// //                                 75%
// //                             </div>

// //                         </div>
// //                         <div className="jopp">
// //                             development
// //                         </div>
// //                     </div>
// //                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="cricle">
// //                         <defs>
// //                             <linearGradient id="GradientColor">
// //                                 <stop offset="0%" stop-color="black" />
// //                                 <stop offset="100%" stop-color="gray" />
// //                             </linearGradient>
// //                         </defs>
// //                         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
// //                     </svg>
// //                 </div>
// //             </div>
            
            
// //         </div>

        
        
// //     )
// // }
// }
// export default Boot;
