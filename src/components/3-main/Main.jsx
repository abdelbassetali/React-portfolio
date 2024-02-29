import React, { useState, useRef, useEffect } from "react";
import './main.css'
import Lottie from "lottie-react"
import imgAnimation from "../../../public/anemation/Animation.json"
const project = [
    { projectTitle: "React project", Category: ["react","alaa",], imgPath: "../1.jpg" },
    { projectTitle: " Css project", Category: ["alaa ","react"], imgPath: "../2.jpg" },
    { projectTitle: "Html project", Category: ["react","yaso"], imgPath: "../3.png" },
    { projectTitle: "Bootstrap project", Category: ["alaa","react"], imgPath: "../4.jpg" },
    { projectTitle: "Html&css project", Category: ["react","react","yaso"], imgPath: "../5.jpg" },
    { projectTitle: "React project", Category: ["as" ,"react","alaa","yaso"], imgPath: "../6.jpg" },
]
const Main = () => {
    const [alaa, setalaa] = useState("alaa");
    const [arr, setArr] = useState(project);
    
  
    return (
        <main>
            <section>
            </section>
            <section className="top-sction ">

                <h1 className="myh">My Project</h1>

                <p className="myh">  I am Abd el Basset Ali. I live in Qena and this is the React project   </p>
                <div >

                    <button onClick={() => {
                       setalaa("yasmeen");
                       const newArr = project.filter((item) => {
               
                           const  yasmeen = item.Category.filter((myitem)=>{
                return myitem ==="react"
                           })        
               
                           return yasmeen[0] === "react";
                       })
                       setArr(newArr)

                    }} className={alaa === "yasmeen" ? "active  btn2" : "btn2"}> 1st Section</button>

    <button onClick={() => {
        setalaa("css");
        const newArr = project.filter((item) => {

            const  yasmeen = item.Category.filter((myitem)=>{
 return myitem ==="alaa"
            })        

            return yasmeen[0] === "alaa";
        })
        setArr(newArr)

    }} className={alaa === "css" ? "active  btn2" : "btn2"}> 2st Section</button>

                    <button onClick={() => {
                        setalaa("fg")
                        const newArr = project.filter((item) => {
                            return item.Category === ""
                        })
                        setArr(newArr)
                    }} className={alaa === "fg" ? "active btn2" : "btn2"}> 3st Section</button>



                    <button onClick={() => {
                        setalaa("yas");
                        const newArr = project.filter((item) => {
                
                            const  yasmeen = item.Category.filter((myitem)=>{
                 return myitem ==="yaso"
                            })        
                
                            return yasmeen[0] === "yaso";
                        })
                        setArr(newArr)
                
                    }} className={alaa === "yas" ? "active  btn2" : "btn2"}> 4st Section</button>

                </div>
            </section>
            <section className="butoom-sction flex ">
                {arr.map((item) => {
                    return (
                        <article key={item.imgPath} className="card " >
                            <img className="img-card" width={258} height={190} src={item.imgPath} alt="" />
                            <div style={{ width: "260px" }} className="box  ">
                                <h6 className="title-1">{item.projectTitle}</h6>
                                <p className="sup-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Praesentium nobis incidunt,
                                    saepe officiis reprehenderit dolorum modi officia voluptates commodi</p>
                                <div className="end flex">
                                    <div className="icon-github " ></div>

                                    <a className="more flex" href="">more <span style={{ alignSelf: 'center' }} className="icon-arrow-thin-right"></span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    )
                }

                )}


            </section>
            <section className="form flex">
                <div className="img-form ">
                    <Lottie  animationData={imgAnimation} />

                </div>

                <div className="register-form ">

                    <h2 className="title-form">Get In Touch</h2>
                    <input className="name" placeholder="First Name" type="text" />
                    <input className="name" placeholder="Last Name" type="text" />
                    <input className="name" type="email" name="" id="" placeholder="Email Address" />
                    <input className="name" type="text" placeholder="Phone" />
                    <input className="placeholder" placeholder="Message" type="text" />
                    <button className="form-button">Send</button>


                </div>
            </section>

        </main>
    )
}
export default Main;